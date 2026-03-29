<?php

namespace App\Filament\Resources\Principals\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Str;

class PrincipalsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Nama Kepala Sekolah')
                    ->searchable(),
                TextColumn::make('greeting_message')
                    ->label('Sambutan Kepala Sekolah')
                    ->formatStateUsing(fn (string $state): string => Str::limit(html_entity_decode(strip_tags($state)), 100))
                    ->wrap(),
                ImageColumn::make('image')
                    ->label('Foto Kepala Sekolah')
                    ->disk('public')
                    ->height(120)
                    ->width(120),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
                ViewAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
