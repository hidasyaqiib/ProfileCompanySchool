<?php

namespace App\Filament\Resources\Admissions\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class AdmissionForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                FileUpload::make('image')
                    ->label('Gambar Persyaratan')
                    ->image()
                    ->directory('admission')
                    ->disk('public')
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
