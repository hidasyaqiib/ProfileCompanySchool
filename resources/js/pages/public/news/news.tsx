import { Head, router } from '@inertiajs/react';
import React, { useState, useCallback, useMemo } from 'react';
import HeroNews from '@/components/news/hero-news';
import NewsList, { type NewsItem } from '@/components/news/news-list';
import MainLayout from '@/layouts/main-layout';

interface PaginationMeta {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
}

interface PaginatedNews {
    data: NewsItem[];
    meta: PaginationMeta;
    links: {
        first: string;
        last: string;
        prev: string | null;
        next: string | null;
    };
}

interface NewsPageProps {
    news?: PaginatedNews;
    filters?: {
        search?: string;
    };
    meta?: {
        title?: string;
        description?: string;
        keywords?: string;
    };
}

const NewsPage: React.FC<NewsPageProps> = ({
    news = {
        data: [],
        meta: {
            current_page: 1,
            last_page: 1,
            per_page: 9,
            total: 0,
            from: 0,
            to: 0
        },
        links: {
            first: '',
            last: '',
            prev: null,
            next: null
        }
    },
    filters = {},
    meta = {},
}) => {
    const [searchValue, setSearchValue] = useState(filters.search || '');
    const [isSearching, setIsSearching] = useState(false);

    // Extract meta values with defaults
    const {
        title = 'Berita Terkini - MI NU 02 Situwangi',
        description = 'Ikuti perkembangan dan update terbaru seputar kegiatan, prestasi, dan informasi penting MI NU 02 Situwangi. Pusat informasi terpercaya untuk orang tua, siswa, dan masyarakat.',
        keywords = 'berita sekolah, MI NU 02 Situwangi, informasi sekolah, kegiatan sekolah, prestasi siswa, pengumuman sekolah, update sekolah, news, madrasah ibtidaiyah'
    } = meta;

    const handleSearch = useCallback((search: string) => {
        setIsSearching(true);

        const params = new URLSearchParams();
        if (search.trim()) {
            params.set('search', search.trim());
        }

        router.get('/berita', Object.fromEntries(params), {
            preserveState: true,
            preserveScroll: true,
            onFinish: () => setIsSearching(false),
        });
    }, []);

    const handleSearchSubmit = useCallback(() => {
        handleSearch(searchValue);
    }, [searchValue, handleSearch]);

    const handleLoadMore = useCallback(() => {
        if (news?.links?.next) {
            const url = new URL(news.links.next);
            const page = url.searchParams.get('page');

            const params = new URLSearchParams(window.location.search);
            params.set('page', page || '2');

            router.get('/berita', Object.fromEntries(params), {
                preserveState: true,
                preserveScroll: true,
            });
        }
    }, [news?.links?.next]);

    const paginationInfo = useMemo(() => {
        if (!news?.meta) {
            return {
                hasMore: false,
                showing: 0,
                total: 0,
                currentPage: 1,
                totalPages: 1,
            };
        }

        return {
            hasMore: news.meta.current_page < news.meta.last_page,
            showing: Math.min(news.meta.to || 0, news.meta.total),
            total: news.meta.total,
            currentPage: news.meta.current_page,
            totalPages: news.meta.last_page,
        };
    }, [news?.meta]);

    const jsonLd = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Berita MI NU 02 Situwangi",
        "description": description,
        "url": "https://mi-nu-02-situwangi.com/berita",
        "publisher": {
            "@type": "Organization",
            "name": "MI NU 02 Situwangi",
            "logo": {
                "@type": "ImageObject",
                "url": "https://mi-nu-02-situwangi.com/assets/image/logo.webp"
            }
        },
        "blogPost": news?.data?.map(item => ({
            "@type": "BlogPosting",
            "headline": item.title,
            "description": item.content.replace(/<[^>]*>/g, '').substring(0, 160),
            "url": `https://mi-nu-02-situwangi.com/berita/${item.slug}`,
            "datePublished": item.published_at,
            "author": {
                "@type": "Person",
                "name": item.author
            },
            "image": item.image_url || "https://mi-nu-02-situwangi.com/assets/image/hero-home.webp"
        })) || []
    }), [news?.data, description]);

    return (
        <MainLayout>
            <Head title={title}>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />

                {/* Open Graph */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mi-nu-02-situwangi.com/berita" />
                <meta property="og:image" content="https://mi-nu-02-situwangi.com/assets/image/hero-home.webp" />
                <meta property="og:site_name" content="MI NU 02 Situwangi" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="https://mi-nu-02-situwangi.com/assets/image/hero-home.webp" />

                {/* Additional SEO */}
                <link rel="canonical" href="https://mi-nu-02-situwangi.com/berita" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="MI NU 02 Situwangi" />

                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>

            {/* Hero Section */}
            <HeroNews
                search={searchValue}
                onSearchChange={setSearchValue}
                onSearchSubmit={handleSearchSubmit}
                totalNews={news?.meta?.total || 0}
            />

            {/* News List Section */}
            <main className="bg-gray-50">
                {/* Results Summary */}
                <section className="border-b border-gray-200 bg-white py-6">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-gray-600">
                                    {filters.search ? (
                                        <>
                                            Menampilkan {paginationInfo.showing} dari {paginationInfo.total} hasil
                                            untuk "<span className="font-semibold text-emerald-600">{filters.search}</span>"
                                        </>
                                    ) : (
                                        <>
                                            Menampilkan {paginationInfo.showing} dari {paginationInfo.total} berita terbaru
                                        </>
                                    )}
                                </p>
                            </div>

                            {filters.search && (
                                <button
                                    onClick={() => {
                                        setSearchValue('');
                                        handleSearch('');
                                    }}
                                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                                >
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Hapus Filter
                                </button>
                            )}
                        </div>
                    </div>
                </section>

                {/* News List */}
                <NewsList
                    newsItems={news?.data || []}
                    showLoadMore={paginationInfo.hasMore}
                    onLoadMore={handleLoadMore}
                    loading={isSearching}
                />

                {/* Pagination Navigation */}
                {paginationInfo.totalPages > 1 && (
                    <section className="border-t border-gray-200 bg-white py-8">
                        <div className="container mx-auto px-4">
                            <nav className="flex items-center justify-between">
                                <div className="flex flex-1 justify-between sm:hidden">
                                    {news?.links?.prev && (
                                        <button
                                            onClick={() => {
                                                const url = new URL(news.links.prev!);
                                                const page = url.searchParams.get('page') || '1';
                                                const params = new URLSearchParams(window.location.search);
                                                params.set('page', page);
                                                router.get('/berita', Object.fromEntries(params), {
                                                    preserveState: true,
                                                });
                                            }}
                                            className="relative inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                        >
                                            Sebelumnya
                                        </button>
                                    )}
                                    {news?.links?.next && (
                                        <button
                                            onClick={() => {
                                                const url = new URL(news.links.next!);
                                                const page = url.searchParams.get('page') || '2';
                                                const params = new URLSearchParams(window.location.search);
                                                params.set('page', page);
                                                router.get('/berita', Object.fromEntries(params), {
                                                    preserveState: true,
                                                });
                                            }}
                                            className="relative ml-3 inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                        >
                                            Selanjutnya
                                        </button>
                                    )}
                                </div>

                                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            Halaman <span className="font-medium">{paginationInfo.currentPage}</span> dari{' '}
                                            <span className="font-medium">{paginationInfo.totalPages}</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {news?.links?.prev && (
                                            <button
                                                onClick={() => {
                                                    const url = new URL(news.links.prev!);
                                                    const page = url.searchParams.get('page') || '1';
                                                    const params = new URLSearchParams(window.location.search);
                                                    params.set('page', page);
                                                    router.get('/berita', Object.fromEntries(params), {
                                                        preserveState: true,
                                                    });
                                                }}
                                                className="relative inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                            >
                                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                                Sebelumnya
                                            </button>
                                        )}
                                        {news?.links?.next && (
                                            <button
                                                onClick={() => {
                                                    const url = new URL(news.links.next!);
                                                    const page = url.searchParams.get('page') || '2';
                                                    const params = new URLSearchParams(window.location.search);
                                                    params.set('page', page);
                                                    router.get('/berita', Object.fromEntries(params), {
                                                        preserveState: true,
                                                    });
                                                }}
                                                className="relative inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                            >
                                                Selanjutnya
                                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </section>
                )}
            </main>
        </MainLayout>
    );
};

export default NewsPage;
