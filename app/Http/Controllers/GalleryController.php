<?php

namespace App\Http\Controllers;

use App\Models\Gallery;

class GalleryController extends Controller
{
    public function index()
    {
        $galleryItems = Gallery::query()
            ->orderByDesc('date')
            ->get()
            ->map(fn (Gallery $gallery) => [
                'id' => $gallery->id,
                'title' => $gallery->title,
                'image' => $gallery->image_url,
                'description' => '',
                'date' => $gallery->date,
            ]);

        $meta = [
            'title' => 'Galeri - SMK Telkom Sidoarjo',
            'description' => 'Jelajahi dokumentasi visual kegiatan sekolah, prestasi siswa, dan fasilitas modern SMK Telkom Sidoarjo. Koleksi foto dan video terlengkap dari berbagai momen bersejarah institusi pendidikan teknologi terdepan.',
            'keywords' => 'galeri sekolah, SMK Telkom Sidoarjo, dokumentasi kegiatan, foto sekolah, video kegiatan, prestasi siswa, fasilitas sekolah, teknologi informasi, pendidikan vokasi, gallery',
        ];

        return inertia('public/gallery/gallery', [
            'galleryItems' => $galleryItems,
            'meta' => $meta,
        ]);
    }
}
