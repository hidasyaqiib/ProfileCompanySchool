<?php

namespace App\Providers\Filament;

use App\Filament\Widgets\CustomAccountWidget;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Navigation\NavigationGroup;
use Filament\Pages\Dashboard;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('portal-admin-minusitu')
            ->brandName('MI NU 02 Situwangi')
            ->brandLogo(asset('assets/image/logo-mi-light.webp'))
            ->darkModeBrandLogo(asset('assets/image/logo-mi-dark.webp'))
            ->brandLogoHeight('3rem')
            ->favicon(asset('assets/image/logo-kemenag.webp'))
            ->sidebarCollapsibleOnDesktop()
            ->login()
            ->passwordReset()
            ->navigationGroups([
                NavigationGroup::make('Publikasi & Informasi'),
                NavigationGroup::make('Profil Madrasah'),
                NavigationGroup::make('Data Kepegawaian'),
                NavigationGroup::make('Penerimaan Siswa Baru'),
            ])
            ->colors([
                'primary' => Color::hex('#2DC86F'),
                'info' => Color::hex('#3B82F6'),
                'success' => Color::hex('#2DC86F'),
                'warning' => Color::hex('#F59E0B'),
                'danger' => Color::hex('#EF4444'),
            ])
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\Filament\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\Filament\Pages')
            ->pages([
                Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\Filament\Widgets')
            ->widgets([
                CustomAccountWidget::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}
