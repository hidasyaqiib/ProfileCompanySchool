<?php

namespace App\Filament\Resources\Structures\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class StructureForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Judul Struktur')
                    ->required(),


                FileUpload::make('photo')
                    ->label('Gambar Struktur')
                    ->image()
                    ->columnSpanFull()
                    ->disk('public')
                    ->directory('structures')
                    ->visibility('public')
                    ->imageResizeTargetWidth('1920')
                    ->imageResizeTargetHeight('1080')
                    ->maxSize(5120)
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/jpg', 'image/webp', 'image/svg+xml'])
                    ->helperText('Maksimal ukuran file 5MB. Tipe file yang diperbolehkan: jpeg, png, jpg, webp, svg.')
                    ->required(),
            ]);
    }
}
