<?php

namespace App\Filament\Resources\Galleries\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class GalleryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->label('Judul')
                    ->required(),

                DatePicker::make('date')
                    ->label('Tanggal')
                    ->required(),

                FileUpload::make('image')
                    ->label('Gambar')
                    ->image()
                    ->directory('galleries')
                    ->disk('public')
                    ->visibility('public')
                    ->imageCropAspectRatio('5:4')
                    ->imageResizeTargetWidth('900')
                    ->imageResizeTargetHeight('720')
                    ->imageResizeMode('cover')
                    ->imageEditor()
                    ->imageEditorAspectRatios(['5:4'])
                    ->maxSize(5120)
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/jpg', 'image/webp', 'image/svg+xml'])
                    ->helperText('Wajib rasio 5:4 (bisa dicrop saat upload). Maksimal ukuran file 5MB. Tipe file yang diperbolehkan: jpeg, png, jpg, webp, svg.')
                    ->columnSpanFull()
                    ->required(),
            ]);
    }
}
