<?php

namespace App\Filament\Resources\ProfileSchools\Pages;

use App\Filament\Resources\ProfileSchools\ProfileSchoolResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListProfileSchools extends ListRecords
{
    protected static string $resource = ProfileSchoolResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
