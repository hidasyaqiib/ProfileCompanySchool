<?php

namespace App\Filament\Resources\News\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class NewsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->searchable()
                    ->sortable()
                    ->weight('bold')
                    ->limit(50)
                    ->label('Judul Berita'),

                TextColumn::make('author')
                    ->label('Penulis'),

                TextColumn::make('content')
                    ->label('Isi Berita')
                    ->formatStateUsing(fn (string $state): string => \Str::limit(strip_tags($state), 50))
                    ->wrap(),

                TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'Draft' => 'gray',
                        'Published' => 'success',
                        'Archived' => 'warning',
                    })
                    ->label('Status'),

                TextColumn::make('created_at')
                    ->date('d M Y')
                    ->sortable()
                    ->label('Tanggal'),

                ImageColumn::make('thumbnail')
                    ->label('Cover')
                    ->disk('public')
                    ->square(),
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
