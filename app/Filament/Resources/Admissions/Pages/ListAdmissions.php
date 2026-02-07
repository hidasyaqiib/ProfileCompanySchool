<?php

namespace App\Filament\Resources\Admissions\Pages;

use App\Filament\Resources\Admissions\AdmissionResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListAdmissions extends ListRecords
{
    protected static string $resource = AdmissionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
