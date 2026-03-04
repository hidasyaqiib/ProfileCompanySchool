<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class NewsController extends Controller
{
    /**
     * Display list of published news with search and pagination
     */
    public function news(Request $request): Response
    {
        $search = $request->get('search', '');
        $perPage = 9; // Fixed to 9 items per page

        $query = News::query()
            ->where('status', 'Published')
            ->orderBy('published_at', 'desc');

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('content', 'like', "%{$search}%")
                    ->orWhere('author', 'like', "%{$search}%");
            });
        }

        $news = $query->paginate($perPage)->withQueryString();

        return Inertia::render('public/news/news', [
            'news' => $news,
            'filters' => [
                'search' => $search,
            ],
            'meta' => [
                'title' => 'Berita Terkini - MI NU 02 Situwangi',
                'description' => 'Ikuti perkembangan dan update terbaru seputar kegiatan, prestasi, dan informasi penting MI NU 02 Situwangi. Pusat informasi terpercaya untuk orang tua, siswa, dan masyarakat.',
                'keywords' => 'berita sekolah, MI NU 02 Situwangi, informasi sekolah, kegiatan sekolah, prestasi siswa, pengumuman sekolah, update sekolah, news, madrasah ibtidaiyah',
            ],
        ]);
    }

    /**
     * Display single news article
     */
    public function show(string $slug): Response
    {
        $news = News::where('slug', $slug)
            ->where('status', 'Published')
            ->firstOrFail();

        // Get other latest news (excluding current article)
        $relatedNews = News::where('status', 'Published')
            ->where('id', '!=', $news->id)
            ->orderBy('published_at', 'desc')
            ->limit(5)
            ->get();

        return Inertia::render('public/news/show', [
            'news' => $news,
            'relatedNews' => $relatedNews,
            'meta' => [
                'title' => $news->title.' - MI NU 02 Situwangi',
                'description' => strip_tags(substr($news->content, 0, 160)).'...',
                'keywords' => 'berita, MI NU 02 Situwangi, '.$news->author.', informasi sekolah',
                'image' => $news->image_url,
            ],
        ]);
    }
}
