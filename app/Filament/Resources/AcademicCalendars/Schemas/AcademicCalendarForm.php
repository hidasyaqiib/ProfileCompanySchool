<?php

namespace App\Filament\Resources\AcademicCalendars\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class AcademicCalendarForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->label('Judul Acara / Agenda')
                    ->required()
                    ->maxLength(255)
                    ->columnSpanFull(),

                Select::make('category')
                    ->label('Kategori Event')
                    ->options([
                        'akademik' => '🔴 Akademik',
                        'event' => '🟢 Event & Kesiswaan',
                        'administrasi' => '🔵 Administrasi',
                    ])
                    ->required()
                    ->native(false),

                DatePicker::make('start_date')
                    ->label('Tanggal Mulai')
                    ->required()
                    ->native(false),

                DatePicker::make('end_date')
                    ->label('Tanggal Selesai')
                    ->helperText('Kosongkan jika acara hanya berlangsung 1 hari')
                    ->native(false)
                    ->afterOrEqual('start_date'),

                Textarea::make('description')
                    ->label('Penjelasan / Deskripsi (Opsional)')
                    ->rows(3)
                    ->columnSpanFull(),
            ]);
    }
}
