<?php

namespace App\Filament\Resources\Facilities\Pages;

use App\Filament\Resources\Facilities\FacilitiesResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListFacilities extends ListRecords
{
    protected static string $resource = FacilitiesResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
