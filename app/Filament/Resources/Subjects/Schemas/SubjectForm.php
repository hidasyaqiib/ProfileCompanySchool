<?php

namespace App\Filament\Resources\Subjects\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class SubjectForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Nama Pelajaran')
                    ->required()
                    ->maxLength(255)
                    ->placeholder('Contoh: Matematika, Bahasa Indonesia, dll.'),
                Select::make('category')
                    ->label('Kategori Pelajaran')
                    ->required()
                    ->options([
                        'Pelajaran Agama' => 'Pelajaran Agama',
                        'Pelajaran Umum' => 'Pelajaran Umum',
                        'Muatan Lokal' => 'Muatan Lokal',
                    ])
                    ->placeholder('Pilih kategori pelajaran...')
                    ->native(false),
                TextInput::make('description')
                    ->label('Deskripsi Pelajaran')
                    ->required()
                    ->maxLength(255)
                    ->placeholder('Contoh: Deskripsi tentang pelajaran ini...')
                    ->columnSpanFull(),

            ]);
    }
}
