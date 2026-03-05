<?php

namespace App\Http\Controllers;

use App\Models\Achievement;
use App\Models\Facilities;
use App\Models\Profileschool;

class AboutUsController extends Controller
{
    public function profile()
    {
        $profile = Profileschool::latest()->first();

        return inertia('public/about/profile', [
            'profile' => $profile ? [
                'content' => $profile->content,
                'image_url' => $profile->image_url,
            ] : null,
        ]);
    }

    public function facility()
    {
        $facilities = Facilities::query()
            ->orderByDesc('created_at')
            ->get()
            ->map(fn (Facilities $facility) => [
                'id' => $facility->id,
                'title' => $facility->name,
                'image' => $facility->first_image_url,
                'images' => $facility->image_urls,
                'description' => $facility->description,
                'date' => $facility->created_at?->format('Y-m-d'),
            ]);

        $meta = [
            'title' => 'Fasilitas - SMK Telkom Sidoarjo',
            'description' => 'Jelajahi fasilitas modern SMK Telkom Sidoarjo yang lengkap untuk mendukung pembelajaran Teknologi dan Informatika. Lab Komputer, Jaringan, Telekomunikasi dengan standar industri.',
            'keywords' => 'fasilitas sekolah, SMK Telkom Sidoarjo, laboratorium komputer, lab jaringan, telekomunikasi, teknologi informasi, pendidikan vokasi',
        ];

        return inertia('public/about/facility', [
            'facilities' => $facilities,
            'meta' => $meta,
        ]);
    }

    public function achievement()
    {
        $achievements = Achievement::query()
            ->orderByDesc('date_achievement')
            ->get()
            ->map(fn (Achievement $achievement) => [
                'id' => $achievement->id,
                'title' => $achievement->title_achievement,
                'category' => implode(', ', (array) ($achievement->name_student ?? [])),
                'year' => $achievement->date_achievement?->format('Y') ?? '',
                'level' => $achievement->level_achievement,
                'description' => $achievement->description ?? '',
                'image' => $achievement->image_url,
                'award' => null,
            ]);

        $meta = [
            'title' => 'Prestasi - SMK Telkom Sidoarjo',
            'description' => 'Jelajahi berbagai prestasi yang telah diraih siswa-siswi SMK Telkom Sidoarjo dalam kompetisi teknologi informasi, akademik, dan ekstrakurikuler tingkat lokal, nasional, hingga internasional.',
            'keywords' => 'prestasi sekolah, SMK Telkom Sidoarjo, kompetisi IT, juara lomba, prestasi siswa, teknologi informasi, pendidikan vokasi, achievement',
        ];

        return inertia('public/about/achievment', [
            'achievements' => $achievements,
            'meta' => $meta,
        ]);
    }
}
