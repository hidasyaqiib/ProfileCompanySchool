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
use Filament\Tables\Table;

class PrincipalResource extends Resource
{
    protected static ?string $model = Principal::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-academic-cap';

    protected static ?string $recordTitleAttribute = 'Sambuntan Kepala Sekolah';

    protected static ?string $navigationLabel = 'Sambuntan Kepala Sekolah';

    protected static ?string $modelLabel = 'Sambuntan Kepala Sekolah';

    protected static ?string $pluralModelLabel = 'Sambuntan Kepala Sekolah';

    protected static ?int $navigationSort = 6;

    public static function getNavigationGroup(): ?string
    {
        return 'Data Kepegawaian';
    }

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

    public static function canCreate(): bool
    {
        return Principal::count() === 0;
    }
}
