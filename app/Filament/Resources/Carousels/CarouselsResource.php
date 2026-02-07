<?php

namespace App\Filament\Resources\Carousels;

use App\Filament\Resources\Carousels\Pages\CreateCarousels;
use App\Filament\Resources\Carousels\Pages\EditCarousels;
use App\Filament\Resources\Carousels\Pages\ListCarousels;
use App\Filament\Resources\Carousels\Schemas\CarouselsForm;
use App\Filament\Resources\Carousels\Tables\CarouselsTable;
use App\Models\Carousels;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class CarouselsResource extends Resource
{
    protected static ?string $model = Carousels::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'Carousels';

    protected static ?string $navigationLabel = 'Carousels';

    protected static ?string $modelLabel = 'Carousels';

    protected static ?string $pluralModelLabel = 'Carousels';

    public static function form(Schema $schema): Schema
    {
        return CarouselsForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return CarouselsTable::configure($table);
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
            'index' => ListCarousels::route('/'),
            'create' => CreateCarousels::route('/create'),
            'edit' => EditCarousels::route('/{record}/edit'),
        ];
    }
}
