<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\Facilities;
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
            ->map(fn (News $news) => [
                'id' => $news->id,
                'title' => $news->title,
                'content' => \Illuminate\Support\Str::limit(strip_tags($news->content), 150),
                'thumbnail' => $news->image_url,
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
            ->map(fn (Facilities $facility) => [
                'id' => $facility->id,
                'name' => $facility->name,
                'description' => \Illuminate\Support\Str::limit(strip_tags($facility->description), 150),
                'image' => $facility->image,
                'created_at' => $facility->created_at,
            ]);

        return Inertia::render('public/home/home', [
            'latestNews' => $latestNews,
            'featuredFacilities' => $featuredFacilities,
        ]);
    }
}
