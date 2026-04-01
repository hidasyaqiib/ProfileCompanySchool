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
                    ->label('Nama Lengkap dan Jabatan')
                    ->placeholder('Contoh: Siti Aminah, S.Pd, M.Pd')
                    ->required(),

                TextInput::make('position')
                    ->required()
                    ->placeholder('Contoh: Guru Kelas 1, Guru Mapel PAI, Kepala Sekolah')
                    ->label('Jabatan'),

                Select::make('type')
                    ->label('Tipe')
                    ->options([
                        'Teacher' => 'Guru',
                        'Staff' => 'Pengurus dan Administrasi',
                        'Chief' => 'Kepala Sekolah',
                    ])
                    ->required()
                    ->live()
                    ->native(false),

                TextInput::make('motto')
                    ->label('Motto Hidup')
                    ->placeholder('Contoh: "Pendidikan adalah kunci masa depan"')
                    ->visible(fn ($get) => $get('type') === 'Chief')
                    ->required(fn ($get) => $get('type') === 'Chief'),

                TextInput::make('last_education')
                    ->label('Pendidikan Terakhir')
                    ->placeholder('Contoh: S1 Pendidikan Agama Islam')
                    ->nullable()
                    ->visible(fn ($get) => $get('type') === 'Chief')
                    ->required(fn ($get) => $get('type') === 'Chief'),

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
