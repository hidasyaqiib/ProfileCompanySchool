<?php

namespace App\Filament\Resources\Extracurriculars\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ExtracurricularForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Nama Ekstrakurikuler')
                    ->required()
                    ->maxLength(255)
                    ->columnSpanFull()
                    ->placeholder('Masukkan nama ekstrakurikuler sekolah'),

                TextInput::make('description')
                    ->label('Deskripsi Ekstrakurikuler')
                    ->required()
                    ->maxLength(255)
                    ->columnSpanFull()
                    ->placeholder('Masukkan deskripsi ekstrakurikuler sekolah'),
            ]);
    }
}
