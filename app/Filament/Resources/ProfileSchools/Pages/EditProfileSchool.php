<?php

namespace App\Filament\Resources\ProfileSchools\Pages;

use App\Filament\Resources\ProfileSchools\ProfileSchoolResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditProfileSchool extends EditRecord
{
    protected static string $resource = ProfileSchoolResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
