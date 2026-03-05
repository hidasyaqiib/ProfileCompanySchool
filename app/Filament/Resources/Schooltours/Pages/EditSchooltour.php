<?php

namespace App\Filament\Resources\Schooltours\Pages;

use App\Filament\Resources\Schooltours\SchooltourResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditSchooltour extends EditRecord
{
    protected static string $resource = SchooltourResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
