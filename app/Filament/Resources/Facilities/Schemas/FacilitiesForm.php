<?php

namespace App\Filament\Resources\Facilities\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class FacilitiesForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Nama Fasilitas')
                    ->required(),

                Textarea::make('description')
                    ->label('Deskripsi')
                    ->required()
                    ->columnSpanFull(),

                FileUpload::make('image')
                    ->label('Galeri Foto')
                    ->image()
                    ->multiple() 
                    ->reorderable()
                    ->panelLayout('grid')
                    ->directory('facilities')
                    ->disk('public')
                    ->visibility('public')
                    ->imageCropAspectRatio('16:9') 
                    ->imageResizeTargetWidth('1280') 
                    ->imageResizeTargetHeight('720')
                    ->imageResizeMode('cover') 
                    ->imageEditor() 
                    ->imageEditorAspectRatios(['16:9',])
                    ->maxSize(5120)
                    ->maxFiles(10)
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/jpg', 'image/webp'])
                    ->helperText('Maksimal 10 foto. Wajib rasio 16:9 (bisa dicrop saat upload).')
                    ->columnSpanFull()
                    ->required(),
            ]);
    }
}
