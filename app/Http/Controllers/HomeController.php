<?php

namespace App\Http\Controllers;

use App\Models\AcademicCalendar;
use App\Models\Facilities;
use App\Models\News;
use App\Models\Principal;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function home(): Response
    {
        $latestNews = News::query()
            ->where('status', 'Published')
            ->orderByDesc('published_at')
            ->limit(4)
            ->get()
            ->map(fn(News $news) => [
                'id' => $news->id,
                'title' => $news->title,
                'content' => \Illuminate\Support\Str::limit(strip_tags($news->content), 150),
                'thumbnail' => $news->image_url,
                'image_url' => $news->image_url,
                'published_at' => $news->published_at,
                'author' => $news->author,
                'slug' => $news->slug,
                'status' => $news->status,
            ]);

        $featuredFacilities = Facilities::query()
            ->where('is_featured', true)
            ->orderByDesc('created_at')
            ->limit(4)
            ->get()
            ->map(fn(Facilities $facility) => [
                'id' => $facility->id,
                'name' => $facility->name,
                'description' => \Illuminate\Support\Str::limit(strip_tags($facility->description), 150),
                'image' => $facility->first_image_url,
                'created_at' => $facility->created_at,
            ]);

        $principal = Principal::latest()->first();

        $upcomingEvents = AcademicCalendar::query()
            ->where('end_date', '>=', now()->toDateString())
            ->orWhereNull('end_date')
            ->where(function ($q) {
                $q->where('start_date', '>=', now()->toDateString())
                    ->orWhere('end_date', '>=', now()->toDateString());
            })
            ->orderBy('start_date')
            ->limit(5)
            ->get()
            ->map(fn(AcademicCalendar $e) => [
                'id' => $e->id,
                'title' => $e->title,
                'description' => $e->description,
                'start' => $e->start_date->format('Y-m-d'),
                'end' => $e->end_date?->format('Y-m-d'),
                'category' => $e->category,
            ]);


        return Inertia::render('public/home/home', [
            'latestNews' => $latestNews,
            'featuredFacilities' => $featuredFacilities,
            'principal' => $principal ? [
                'name' => $principal->name,
                'image_url' => $principal->image_url,
                'greeting_message' => $principal->greeting_message,
            ] : null,
            'upcomingEvents' => $upcomingEvents,
        ]);
    }
}
