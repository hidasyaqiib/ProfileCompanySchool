<?php

namespace App\Filament\Resources\ProfileSchools\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class ProfileSchoolForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Textarea::make('content')
                    ->required()
                    ->rows(7)
                    ->autosize()
                    ->columnSpanFull(),
                FileUpload::make('image')
                    ->label('Foto Profil Sekolah')
                    ->image()
                    ->directory('profile')
                    ->disk('public')
                    ->visibility('public')
                    ->imageEditor()
                    ->imageEditorAspectRatios(['5:4'])
                    ->maxSize(5120)
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/jpg', 'image/webp'])
                    ->helperText('Maksimal 5MB. Format file: jpg, jpeg, png, webp.')
                    ->columnSpanFull()
                    ->required(),
            ]);
    }
}
