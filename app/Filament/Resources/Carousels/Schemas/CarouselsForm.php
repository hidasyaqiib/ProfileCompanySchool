<?php

namespace App\Filament\Resources\Carousels\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class CarouselsForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                FileUpload::make('image')
                    ->label('Gambar Carousel')
                    ->image()
                    ->directory('carousels')
                    ->disk('public')
                    ->visibility('public')
                    ->imageResizeTargetWidth('1920')
                    ->imageResizeTargetHeight('1080')
                    ->maxSize(5120)
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/jpg', 'image/webp', 'image/svg+xml'])
                    ->helperText('Maksimal ukuran file 5MB. Tipe file yang diperbolehkan: jpeg, png, jpg, webp, svg.')
                    ->required(),

                Toggle::make('is_active')
                    ->label('Status Aktif')
                    ->default(true)
                    ->onColor('success')
                    ->offColor('danger')
                    ->helperText('Jika dimatikan, slider ini tidak akan muncul di website.')
                    ->required(),
            ]);
    }
}
