<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\NewsController;

// Public routes
Route::get('/', [HomeController::class, 'home'])->name('home');

Route::get('/profil', [AboutUsController::class, 'profile'])->name('profile');

Route::get('/berita', [NewsController::class, 'news'])->name('news');

// Authenticated routes
Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';
