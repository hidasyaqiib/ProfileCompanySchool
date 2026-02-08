<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// Public routes
Route::get('/', function () {
    return Inertia::render('public/home/home', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/profil', function () {
    return Inertia::render('public/about/profile');
})->name('profile');

Route::get('/berita', function () {
    return Inertia::render('public/news/news');
})->name('news');

// Authenticated routes
Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';
