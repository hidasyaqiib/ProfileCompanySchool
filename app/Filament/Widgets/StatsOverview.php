<?php

namespace App\Filament\Widgets;

use App\Models\Achievement;
use App\Models\News;
use App\Models\Teacher;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Filament\Widgets\AccountWidget as BaseAccountWidget;

class StatsOverview extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Berita', News::where('status', 'published')->count())
                ->description('Artikel yang telah dipublikasi')
                ->color('primary'),

            Stat::make('Jumlah Guru & Staff', Teacher::count())
                ->color('primary'),

            Stat::make('Total Prestasi', Achievement::count())
                ->color('warning'),
        ];
    }
}

class CustomAccountWidget extends BaseAccountWidget
{
    protected int | string | array $columnSpan = 'full';
}
