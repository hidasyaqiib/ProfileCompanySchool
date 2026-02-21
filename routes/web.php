<?php

use App\Http\Controllers\StaffController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\GlobalController;

// Public routes
Route::get('/', [GlobalController::class, 'home'])->name('home');

Route::get('/profil', [GlobalController::class, 'profile'])->name('profile');

Route::get('/berita', function () {
    return Inertia::render('public/news/news');
})->name('news');

// STAFF ROUTES
Route::get('/struktur-organisasi', [StaffController::class, 'structure'])->name('structure');

Route::get('/guru', [StaffController::class, 'teacher'])->name('teacher');

// Authenticated routes
Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';
