<?php

namespace App\Filament\Resources\Schooltours\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class SchooltourForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->label('Judul Ruangan')
                    ->required(),

                RichEditor::make('description')
                    ->label('Deskripsi Singkat Ruangan')
                    ->required()
                    ->columnSpanFull(),

                FileUpload::make('cover_image')
                    ->label('Foto Cover Ruangan')
                    ->image()
                    ->directory('schooltours')
                    ->disk('public')
                    ->visibility('public')
                    ->imageCropAspectRatio('16:9')
                    ->imageResizeTargetWidth('1280')
                    ->imageResizeTargetHeight('720')
                    ->imageResizeMode('cover')
                    ->imageEditor()
                    ->imageEditorAspectRatios(['16:9'])
                    ->maxSize(5120)
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/jpg', 'image/webp'])
                    ->helperText('Wajib rasio 16:9 (bisa dicrop saat upload). Maksimal 5MB.')
                    ->columnSpanFull(),

                FileUpload::make('panorama_image')
                    ->label('Foto Panorama Ruangan')
                    ->image()
                    ->columnSpanFull()
                    ->directory('schooltours')
                    ->disk('public')
                    ->visibility('public')
                    ->maxSize(20480)
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/jpg', 'image/webp'])
                    ->imageResizeMode('force')
                    ->imageResizeTargetWidth('4096')
                    ->imageResizeTargetHeight('2048')
                    ->helperText('Maksimal 20MB. Bisa Menggunakan Tipe File JPG, JPEG, PNG, atau WEBP.'),
            ]);
    }
}
