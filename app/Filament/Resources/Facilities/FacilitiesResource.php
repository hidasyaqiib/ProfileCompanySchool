<?php

namespace App\Filament\Resources\Facilities;

use App\Filament\Resources\Facilities\Pages\CreateFacilities;
use App\Filament\Resources\Facilities\Pages\EditFacilities;
use App\Filament\Resources\Facilities\Pages\ListFacilities;
use App\Filament\Resources\Facilities\Schemas\FacilitiesForm;
use App\Filament\Resources\Facilities\Tables\FacilitiesTable;
use App\Models\Facilities;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;

class FacilitiesResource extends Resource
{
    protected static ?string $model = Facilities::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-building-office-2';

    protected static ?string $recordTitleAttribute = 'Fasilitas Sekolah';

    protected static ?string $navigationLabel = 'Fasilitas Sekolah';

    protected static ?string $modelLabel = 'Fasilitas Sekolah';

    protected static ?string $pluralModelLabel = 'Fasilitas Sekolah';

    protected static ?int $navigationSort = 5;

    public static function getNavigationGroup(): ?string
    {
        return 'Profil Madrasah';
    }

    public static function form(Schema $schema): Schema
    {
        return FacilitiesForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return FacilitiesTable::configure($table);
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
            'index' => ListFacilities::route('/'),
            'create' => CreateFacilities::route('/create'),
            'edit' => EditFacilities::route('/{record}/edit'),
        ];
    }
}
