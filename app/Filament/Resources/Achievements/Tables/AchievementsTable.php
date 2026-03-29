<?php

namespace App\Filament\Resources\Achievements\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Str;

class AchievementsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title_achievement')
                    ->label('Nama Lomba')
                    ->searchable(),

                TextColumn::make('name_student')
                    ->label('Nama Peserta')
                    ->listWithLineBreaks()
                    ->bulleted()
                    ->state(function ($record) {
                        $names = $record->name_student;
                        if (is_string($names)) {
                            return explode(',', $names);
                        }
                        if (is_array($names) && count($names) === 1 && str_contains($names[0] ?? '', ',')) {
                            return explode(',', $names[0]);
                        }

                        return $names;
                    })
                    ->searchable(),

                TextColumn::make('description')
                    ->label('Deskripsi')
                    ->formatStateUsing(fn (string $state): string => Str::limit(strip_tags($state), 50))
                    ->wrap(),

                TextColumn::make('date_achievement')
                    ->label('Tanggal Perolehan')
                    ->date('d M Y')
                    ->sortable(),

                TextColumn::make('level_achievement')
                    ->label('Level Prestasi')
                    ->sortable(),

                ImageColumn::make('image')
                    ->label('Bukti Foto')
                    ->disk('public')
                    ->height(70)
                    ->width(70),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                ViewAction::make(),
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
