<?php

use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\AdmissionController;
use App\Http\Controllers\SchooltourController;
use App\Http\Controllers\StaffController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public routes
Route::get('/', [HomeController::class, 'home'])->name('home');

Route::get('/profil', [AboutUsController::class, 'profile'])->name('profile');
Route::get('/fasilitas', [AboutUsController::class, 'facility'])->name('facility');
Route::get('/prestasi', [AboutUsController::class, 'achievement'])->name('achievement');

Route::get('/galeri', [GalleryController::class, 'index'])->name('gallery');

Route::get('/berita', [NewsController::class, 'news'])->name('news');
Route::get('/berita/{slug}', [NewsController::class, 'show'])->name('news.show');

// Authenticated routes
Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';




// TAMBAHAN JORDAN
// STAFF ROUTES
Route::get('/struktur-organisasi', [StaffController::class, 'structure'])->name('structure');
Route::get('/guru', [StaffController::class, 'teacher'])->name('teacher');

// SCHOOL TOUR ROUTE
Route::get('/school-tour', [SchooltourController::class, 'schooltour'])->name('schooltour');

// ADMISSION ROUTE
Route::get('/ppdb', [AdmissionController::class, 'admission'])->name('admission');
