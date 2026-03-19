<?php

namespace App\Filament\Resources\Curricula\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Support\Str;

class CurriculaTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Nama Kurikulum')
                    ->searchable(),
                TextColumn::make('description')
                    ->label('Deskripsi Kurikulum')
                    ->searchable()
                    ->html()
                    ->html()
                    ->formatStateUsing(fn (string $state): string => Str::limit(strip_tags($state), 100))
                    ->wrap()
                    ->tooltip(fn ($record): string => strip_tags($record->description)),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
                ViewAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
