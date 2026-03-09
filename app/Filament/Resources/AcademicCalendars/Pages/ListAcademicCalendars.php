<?php

namespace App\Filament\Resources\AcademicCalendars\Pages;

use App\Filament\Resources\AcademicCalendars\AcademicCalendarResource;
use App\Filament\Resources\AcademicCalendars\Schemas\AcademicCalendarForm;
use App\Models\AcademicCalendar;
use Carbon\Carbon;
use Filament\Actions\Action;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\Page;
use Filament\Schemas\Schema;

class ListAcademicCalendars extends Page
{
    protected static string $resource = AcademicCalendarResource::class;

    protected static ?string $title = 'Kalender Akademik';

    public function getView(): string
    {
        return 'filament.resources.academic-calendars.pages.list-academic-calendars';
    }

    public function getHeaderActions(): array
    {
        return [
            CreateAction::make()
                ->model(AcademicCalendar::class)
                ->form(fn(Schema $schema) => AcademicCalendarForm::configure($schema))
                ->modalHeading('Tambah Agenda Baru')
                ->modalSubmitActionLabel('Simpan')
                ->after(fn() => $this->dispatch('calendar-refresh')),
        ];
    }

    /**
     * Resolved by Filament when JS calls: $wire.mountAction('editEvent', {id})
     */
    public function editEventAction(): Action
    {
        return Action::make('editEvent')
            ->label('Edit Agenda')
            ->modalHeading('Edit Agenda')
            ->modalSubmitActionLabel('Simpan Perubahan')
            ->form(fn(Schema $schema) => AcademicCalendarForm::configure($schema))
            ->fillForm(
                fn(array $arguments): array =>
                AcademicCalendar::find($arguments['id'] ?? 0)?->attributesToArray() ?? []
            )
            ->action(function (array $data, array $arguments): void {
                AcademicCalendar::find($arguments['id'])?->update($data);
                $this->dispatch('calendar-refresh');
            })
            ->extraModalFooterActions(fn(array $arguments): array => [
                Action::make('deleteCalendarEvent')
                    ->label('Hapus Agenda')
                    ->color('danger')
                    ->requiresConfirmation()
                    ->modalHeading('Hapus Agenda')
                    ->modalDescription('Apakah kamu yakin ingin menghapus agenda ini? Tindakan ini tidak dapat dibatalkan.')
                    ->action(function () use ($arguments): void {
                        AcademicCalendar::find($arguments['id'] ?? 0)?->delete();
                        $this->dispatch('calendar-refresh');
                    }),
            ]);
    }

    /**
     * Resolved by Filament when JS calls: $wire.mountAction('createEvent', {start, end?})
     */
    public function createEventAction(): Action
    {
        return Action::make('createEvent')
            ->label('Tambah Agenda')
            ->modalHeading('Tambah Agenda Baru')
            ->modalSubmitActionLabel('Simpan')
            ->form(fn(Schema $schema) => AcademicCalendarForm::configure($schema))
            ->fillForm(function (array $arguments): array {
                $start = $arguments['start'] ?? null;
                $endDate = null;

                if (!empty($arguments['end'])) {
                    // FullCalendar exclusive end → convert to inclusive
                    $parsed = Carbon::parse($arguments['end'])->subDay()->toDateString();
                    $endDate = ($parsed !== $start) ? $parsed : null;
                }

                return [
                    'start_date' => $start,
                    'end_date' => $endDate,
                ];
            })
            ->action(function (array $data): void {
                AcademicCalendar::create($data);
                $this->dispatch('calendar-refresh');
            });
    }

    public function eventDropped(int $id, string $start, ?string $end = null): void
    {
        $record = AcademicCalendar::find($id);
        if (!$record) {
            return;
        }

        $endDate = null;
        if ($end) {
            // FullCalendar end date is exclusive for all-day multi-day events — subtract 1 day
            $parsed = Carbon::parse($end)->subDay();
            // If computed end equals start, it's truly a single-day event
            $endDate = $parsed->toDateString() !== $start ? $parsed->toDateString() : null;
        }

        $record->update([
            'start_date' => $start,
            'end_date' => $endDate,
        ]);
    }

    public function getCalendarEvents(): array
    {
        return AcademicCalendar::all()
            ->map(fn(AcademicCalendar $event) => [
                'id' => $event->id,
                'title' => $event->title,
                'start' => Carbon::parse($event->start_date)->toDateString(),
                'end' => $event->end_date
                    ? Carbon::parse($event->end_date)->addDay()->toDateString()
                    : null,
                'color' => match ($event->category) {
                    'akademik' => '#ef4444',
                    'event' => '#22c55e',
                    'administrasi' => '#3b82f6',
                    default => '#6b7280',
                },
                'extendedProps' => [
                    'category' => $event->category,
                    'description' => $event->description,
                ],
            ])
            ->toArray();
    }
}
