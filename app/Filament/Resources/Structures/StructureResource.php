<?php

namespace App\Filament\Resources\Structures;

use App\Filament\Resources\Structures\Pages\CreateStructure;
use App\Filament\Resources\Structures\Pages\EditStructure;
use App\Filament\Resources\Structures\Pages\ListStructures;
use App\Filament\Resources\Structures\Schemas\StructureForm;
use App\Filament\Resources\Structures\Tables\StructuresTable;
use App\Models\Structure;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class StructureResource extends Resource
{
    protected static ?string $model = Structure::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'Struktur Organsasi';

    protected static ?string $navigationLabel = 'Struktur Organisasi';

    protected static ?string $modelLabel = 'Struktur Organisasi';

    protected static ?string $pluralModelLabel = 'Struktur Organisasi';

    public static function form(Schema $schema): Schema
    {
        return StructureForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return StructuresTable::configure($table);
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
            'index' => ListStructures::route('/'),
            'create' => CreateStructure::route('/create'),
            'edit' => EditStructure::route('/{record}/edit'),
        ];
    }
}
