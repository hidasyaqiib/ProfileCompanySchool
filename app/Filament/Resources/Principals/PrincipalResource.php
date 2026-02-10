<?php

namespace App\Filament\Resources\Principals;

use App\Filament\Resources\Principals\Pages\CreatePrincipal;
use App\Filament\Resources\Principals\Pages\EditPrincipal;
use App\Filament\Resources\Principals\Pages\ListPrincipals;
use App\Filament\Resources\Principals\Schemas\PrincipalForm;
use App\Filament\Resources\Principals\Tables\PrincipalsTable;
use App\Models\Principal;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class PrincipalResource extends Resource
{
    protected static ?string $model = Principal::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'Kepala Sekolah';

    protected static ?string $navigationLabel = 'Kepala Sekolah';

    protected static ?string $modelLabel = 'Kepala Sekolah';

    protected static ?string $pluralModelLabel = 'Kepala Sekolah';

    public static function form(Schema $schema): Schema
    {
        return PrincipalForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PrincipalsTable::configure($table);
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
            'index' => ListPrincipals::route('/'),
            'create' => CreatePrincipal::route('/create'),
            'edit' => EditPrincipal::route('/{record}/edit'),
        ];
    }
}
