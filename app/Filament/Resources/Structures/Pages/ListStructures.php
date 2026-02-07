<?php

namespace App\Filament\Resources\Structures\Pages;

use App\Filament\Resources\Structures\StructureResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListStructures extends ListRecords
{
    protected static string $resource = StructureResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
