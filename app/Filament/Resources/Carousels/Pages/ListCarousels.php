<?php

namespace App\Filament\Resources\Carousels\Pages;

use App\Filament\Resources\Carousels\CarouselsResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListCarousels extends ListRecords
{
    protected static string $resource = CarouselsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
