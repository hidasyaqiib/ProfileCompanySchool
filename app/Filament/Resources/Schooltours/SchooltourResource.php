<?php

namespace App\Filament\Resources\Schooltours;

use App\Filament\Resources\Schooltours\Pages\CreateSchooltour;
use App\Filament\Resources\Schooltours\Pages\EditSchooltour;
use App\Filament\Resources\Schooltours\Pages\ListSchooltours;
use App\Filament\Resources\Schooltours\Schemas\SchooltourForm;
use App\Filament\Resources\Schooltours\Tables\SchooltoursTable;
use App\Models\Schooltour;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class SchooltourResource extends Resource
{
    protected static ?string $model = Schooltour::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-globe-alt';

    protected static ?string $recordTitleAttribute = 'Tour Sekolah';

    protected static ?string $navigationLabel = 'Tour Sekolah';

    protected static ?string $modelLabel = 'Tour Sekolah';

    protected static ?string $pluralModelLabel = 'Tour Sekolah';

    protected static ?int $navigationSort = 6;

    public static function getNavigationGroup(): ?string
    {
        return 'Profil Madrasah';
    }

    public static function form(Schema $schema): Schema
    {
        return SchooltourForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return SchooltoursTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListSchooltours::route('/'),
            'create' => CreateSchooltour::route('/create'),
            'edit' => EditSchooltour::route('/{record}/edit'),
        ];
    }
}
