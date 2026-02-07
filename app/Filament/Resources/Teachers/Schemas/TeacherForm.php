<?php

namespace App\Filament\Resources\Teachers\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class TeacherForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Nama Lengkap')
                    ->required(),

                TextInput::make('position')
                    ->required()
                    ->label('Jabatan'),

                Select::make('type')
                    ->label('Tipe')
                    ->options([
                        'Teacher' => 'Guru',
                        'Staff' => 'Staff',
                        'Chief' => 'Kepala Sekolah',
                    ])
                    ->required(),

                FileUpload::make('photo')
                    ->label('Foto')
                    ->image()
                    ->disk('public')
                    ->visibility('public')
                    ->directory('teachers')
                    ->columnSpanFull()
                    ->maxSize(5120)
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/jpg', 'image/webp', 'image/svg+xml'])
                    ->helperText('Maksimal ukuran file 5MB. Tipe file yang diperbolehkan: jpeg, png, jpg, webp, svg.')
                    ->nullable(),
            ]);
    }
}
