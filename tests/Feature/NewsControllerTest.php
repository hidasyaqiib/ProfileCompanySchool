<?php

namespace Tests\Feature;

use App\Models\News;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class NewsControllerTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        
        // Create sample news for testing
        News::create([
            'title' => 'Test News Article',
            'content' => '<p>This is a test news article content.</p>',
            'author' => 'Test Author',
            'published_at' => Carbon::now(),
            'slug' => 'test-news-article',
            'status' => 'Published',
        ]);

        News::create([
            'title' => 'Draft News Article',
            'content' => '<p>This is a draft news article.</p>',
            'author' => 'Test Author',
            'published_at' => Carbon::now(),
            'slug' => 'draft-news-article',
            'status' => 'Draft',
        ]);
    }

    public function test_news_index_page_loads_successfully(): void
    {
        $response = $this->get('/berita');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => 
            $page->component('public/news/news')
                 ->has('news.data', 1) // Only published news should be shown
                 ->has('filters')
                 ->has('meta')
        );
    }

    public function test_news_index_with_search(): void
    {
        $response = $this->get('/berita?search=Test');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => 
            $page->component('public/news/news')
                 ->where('filters.search', 'Test')
                 ->has('news.data', 1)
        );
    }

    public function test_news_index_with_empty_search(): void
    {
        $response = $this->get('/berita?search=NonExistent');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => 
            $page->component('public/news/news')
                 ->where('filters.search', 'NonExistent')
                 ->has('news.data', 0)
        );
    }

    public function test_news_show_page_loads_successfully(): void
    {
        $response = $this->get('/berita/test-news-article');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => 
            $page->component('public/news/show')
                 ->has('news')
                 ->where('news.slug', 'test-news-article')
                 ->has('relatedNews')
                 ->has('meta')
        );
    }

    public function test_news_show_draft_returns_404(): void
    {
        $response = $this->get('/berita/draft-news-article');
        $response->assertStatus(404);
    }

    public function test_news_show_nonexistent_returns_404(): void
    {
        $response = $this->get('/berita/nonexistent-article');
        $response->assertStatus(404);
    }

    public function test_news_index_pagination_works(): void
    {
        // Create more news to test pagination
        for ($i = 1; $i <= 15; $i++) {
            News::create([
                'title' => "News Article {$i}",
                'content' => "<p>Content for article {$i}</p>",
                'author' => 'Test Author',
                'published_at' => Carbon::now()->subDays($i),
                'slug' => "news-article-{$i}",
                'status' => 'Published',
            ]);
        }

        $response = $this->get('/berita');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => 
            $page->component('public/news/news')
                 ->has('news.data', 9) // Default per_page is 9
                 ->where('news.meta.total', 16) // 15 + 1 from setUp
        );
    }

    public function test_news_meta_data_is_correct(): void
    {
        $response = $this->get('/berita');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => 
            $page->component('public/news/news')
                 ->where('meta.title', 'Berita Terkini - MI NU 02 Situwangi')
                 ->has('meta.description')
                 ->has('meta.keywords')
        );
    }
}
