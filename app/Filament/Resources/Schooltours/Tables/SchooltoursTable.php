<?php

namespace App\Filament\Resources\Schooltours\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class SchooltoursTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->label('Judul Ruangan')
                    ->searchable(),

                TextColumn::make('description')
                    ->label('Deskripsi Singkat Ruangan')
                    ->limit(50)
                    ->wrap()
                    ->html(),

                ImageColumn::make('cover_image')
                    ->label('Foto Cover Ruangan')
                    ->disk('public')
                    ->height(120)
                    ->width(120),

                ImageColumn::make('panorama_image')
                    ->label('Foto Panorama Ruangan')
                    ->disk('public')
                    ->height(120)
                    ->width(120),
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
