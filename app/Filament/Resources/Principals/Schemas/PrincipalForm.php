<?php

namespace App\Filament\Resources\Principals\Schemas;

use Faker\Provider\Image;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class PrincipalForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Nama Kepala Sekolah')
                    ->required(),
                RichEditor::make('greeting_message')
                    ->label('Sambutan Kepala Sekolah')
                    ->columnSpanFull()
                    ->required(),
                FileUpload::make('image')
                    ->label('Foto Kepala Sekolah')
                    ->image()
                    ->directory('principal')
                    ->disk('public')
                    ->visibility('public')
                    ->imageResizeTargetWidth('600')
                    ->imageResizeTargetHeight('900')
                    ->imageResizeMode('cover')
                    ->imageEditor()
                    ->imageEditorAspectRatios(['2:3',])
                    ->maxSize(5120)
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/jpg', 'image/webp'])
                    ->helperText('Wajib rasio 2:3 (bisa dicrop saat upload). Maksimal 5MB. Format file: jpg, jpeg, png, webp.')
                    ->required(),
            ]);
    }
}
