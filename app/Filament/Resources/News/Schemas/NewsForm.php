<?php

namespace App\Filament\Resources\News\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Schemas\Schema;

class NewsForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->label('Judul Berita')
                    ->required()
                    ->afterStateUpdated(fn (callable $set, $state) => $set('slug', \Str::slug($state))),

                TextInput::make('slug')
                    ->label('Slug Berita (Otomatis)')
                    ->required()
                    ->disabled()
                    ->dehydrated()
                    ->unique(table: 'news', column: 'slug', ignorable: fn ($record) => $record),

                TextInput::make('author')
                    ->label('Penulis')
                    ->required()
                    ->default(auth()->user()->name ?? 'Admin'),

                DatePicker::make('published_at')
                    ->label('Tanggal Publikasi')
                    ->required()
                    ->default(now()),

                Select::make('status')
                    ->label('Status Berita')
                    ->options([
                        'Draft' => 'Draft',
                        'Published' => 'Published',
                        'Archived' => 'Archived',
                    ])
                    ->required(),

                FileUpload::make('thumbnail')
                    ->label('Gambar Utama Berita')
                    ->image()
                    ->columnSpanFull()
                    ->directory('news')
                    ->disk('public')
                    ->visibility('public')
                    ->imageCropAspectRatio('4:5')
                    ->imageResizeTargetWidth('720')
                    ->imageResizeTargetHeight('900')
                    ->imageResizeMode('cover')
                    ->imageEditor()
                    ->imageEditorAspectRatios(['4:5',])
                    ->maxSize(5120)
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/jpg', 'image/webp', 'image/svg+xml'])
                    ->helperText('Wajib rasio 4:5 (bisa dicrop saat upload). Maksimal ukuran file 5MB. Tipe file yang diperbolehkan: jpeg, png, jpg, webp, svg.')
                    ->nullable(),

                RichEditor::make('content')
                    ->label('Konten Berita')
                    ->columnSpanFull()
                    ->required(),
            ]);
    }
}
