<?php

namespace App\Filament\Resources\Carousels\Pages;

use App\Filament\Resources\Carousels\CarouselsResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditCarousels extends EditRecord
{
    protected static string $resource = CarouselsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
