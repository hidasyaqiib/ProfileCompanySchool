<?php

namespace App\Filament\Resources\Achievements\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class AchievementForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title_achievement')
                    ->label('Nama Lomba')
                    ->required(),

                TagsInput::make('name_student')
                    ->label('Nama Peserta (bisa banyak)')
                    ->placeholder('Ketik nama lalu tekan enter')
                    ->splitKeys(['Tab', ',', 'Enter'])
                    ->separator(',')
                    ->required(),

                DatePicker::make('date_achievement')
                    ->label('Tanggal Perolehan')
                    ->required(),

                Select::make('level_achievement')
                    ->label('Level Prestasi')
                    ->options([
                        'District' => 'Kecamatan',
                        'Provincial' => 'Provinsi',
                        'National' => 'Nasional',
                        'International' => 'Internasional',
                    ])
                    ->required(),

                FileUpload::make('image')
                    ->label('Bukti Foto')
                    ->image()
                    ->directory('achievement')
                    ->disk('public')
                    ->visibility('public')
                    ->imageResizeTargetWidth('1920')
                    ->imageResizeTargetHeight('1080')
                    ->maxSize(5120)
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/jpg', 'image/webp'])
                    ->helperText('Maksimal 5MB. Format file: jpg, jpeg, png, webp.')
                    ->required(),

                RichEditor::make('description')
                    ->label('Deskripsi')
                    ->columnSpanFull(),
            ]);
    }
}
