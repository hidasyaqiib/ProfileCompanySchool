<?php

namespace App\Filament\Resources\Schooltours\Pages;

use App\Filament\Resources\Schooltours\SchooltourResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListSchooltours extends ListRecords
{
    protected static string $resource = SchooltourResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
