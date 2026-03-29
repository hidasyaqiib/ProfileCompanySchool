<?php

namespace App\Filament\Resources\ProfileSchools;

use App\Filament\Resources\ProfileSchools\Pages\CreateProfileSchool;
use App\Filament\Resources\ProfileSchools\Pages\EditProfileSchool;
use App\Filament\Resources\ProfileSchools\Pages\ListProfileSchools;
use App\Filament\Resources\ProfileSchools\Schemas\ProfileSchoolForm;
use App\Filament\Resources\ProfileSchools\Tables\ProfileSchoolsTable;
use App\Models\ProfileSchool;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;

class ProfileSchoolResource extends Resource
{
    protected static ?string $model = ProfileSchool::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-identification';

    protected static ?string $recordTitleAttribute = 'Profil Sekolah';

    protected static ?string $navigationLabel = 'Profil Sekolah';

    protected static ?string $modelLabel = 'Profil Sekolah';

    protected static ?string $pluralModelLabel = 'Profil Sekolah';

    protected static ?int $navigationSort = 4;

    public static function getNavigationGroup(): ?string
    {
        return 'Profil Madrasah';
    }

    public static function form(Schema $schema): Schema
    {
        return ProfileSchoolForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ProfileSchoolsTable::configure($table);
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
            'index' => ListProfileSchools::route('/'),
            'create' => CreateProfileSchool::route('/create'),
            'edit' => EditProfileSchool::route('/{record}/edit'),
        ];
    }

    public static function canCreate(): bool
    {
        return ProfileSchool::count() === 0;
    }
}
