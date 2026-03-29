<?php

namespace App\Http\Controllers;

use App\Models\AcademicCalendar;
use App\Models\Achievement;
use App\Models\Curriculum;
use App\Models\Extracurricular;
use App\Models\Facilities;
use App\Models\Profileschool;
use App\Models\Subject;

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
                'date' => $achievement->date_achievement?->format('d M Y') ?? '',
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

    public function academicCalendar()
    {
        $events = AcademicCalendar::all()
            ->map(fn (AcademicCalendar $event) => [
                'id' => $event->id,
                'title' => $event->title,
                'description' => $event->description,
                'start' => $event->start_date->format('Y-m-d'),
                // Pass inclusive end_date; the frontend will handle +1 day for FullCalendar
                'end' => $event->end_date?->format('Y-m-d'),
                'category' => $event->category,
            ]);

        return inertia('public/about/academicCalendar', [
            'events' => $events,
        ]);
    }

    public function curriculum()
    {
        $subjects = Subject::orderBy('category')
            ->get()
            ->map(fn (Subject $subject) => [
                'id' => $subject->id,
                'name' => $subject->name,
                'description' => $subject->description,
                'category' => $subject->category,
            ]);

        $extracurriculars = Extracurricular::orderBy('name')
            ->get()
            ->map(fn (Extracurricular $item) => [
                'id' => $item->id,
                'name' => $item->name,
                'description' => $item->description,
            ]);

        $curricula = Curriculum::all()
            ->map(fn (Curriculum $curriculum) => [
                'id' => $curriculum->id,
                'name' => $curriculum->name,
                'description' => $curriculum->description,
            ]);

        return inertia('public/about/curriculum', [
            'subjects' => $subjects,
            'extracurriculars' => $extracurriculars,
            'curricula' => $curricula,
        ]);
    }
}
