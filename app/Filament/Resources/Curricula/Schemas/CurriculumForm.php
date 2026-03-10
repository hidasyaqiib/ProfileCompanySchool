<?php

namespace App\Filament\Resources\Curricula\Schemas;

use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class CurriculumForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Nama Kurikulum')
                    ->required()
                    ->maxLength(255)
                    ->columnSpanFull(),
                RichEditor::make('description')
                    ->label('Deskripsi Kurikulum')
                    ->columnSpanFull(),
            ]);
    }
}
