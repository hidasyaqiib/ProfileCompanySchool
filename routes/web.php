<?php

use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public routes
Route::get('/', [HomeController::class, 'home'])->name('home');

Route::get('/profil', [AboutUsController::class, 'profile'])->name('profile');
Route::get('/fasilitas', [AboutUsController::class, 'facility'])->name('facility');
Route::get('/prestasi', [AboutUsController::class, 'achievement'])->name('achievement');

Route::get('/galeri', [GalleryController::class, 'index'])->name('gallery');

Route::get('/berita', [NewsController::class, 'news'])->name('news');

// Authenticated routes
Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';
