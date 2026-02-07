<?php

namespace App\Filament\Resources\Achievements\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
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
                    ->searchable(),

                TextColumn::make('description')
                    ->label('Deskripsi')
                    ->formatStateUsing(fn(string $state): string => Str::limit(strip_tags($state), 50))
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
