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
        title = 'Berita Terkini',
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

    const handlePageChange = useCallback((page: number) => {
        const params = new URLSearchParams(window.location.search);
        if (page > 1) {
            params.set('page', page.toString());
        } else {
            params.delete('page');
        }

        router.get('/berita', Object.fromEntries(params), {
            preserveState: true,
            preserveScroll: false,
        });
    }, []);

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

            {/* ── Magazine Masthead ─────────────────────────────────── */}
            <HeroNews
                search={searchValue}
                onSearchChange={setSearchValue}
                onSearchSubmit={handleSearchSubmit}
                totalNews={news?.meta?.total || 0}
            />

            {/* ── Main content ─────────────────────────────────────── */}
            <main className="bg-white">
                <div className="container mx-auto px-4 py-10">

                    {/* Results summary / filter chip */}
                    {(filters.search || paginationInfo.total > 0) && (
                        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm text-gray-500">
                                {filters.search ? (
                                    <>
                                        <span className="font-semibold text-gray-800">{paginationInfo.showing}</span> hasil untuk{' '}
                                        <span className="font-semibold text-[#27ae60]">&ldquo;{filters.search}&rdquo;</span>
                                        {' '}dari {paginationInfo.total} berita
                                    </>
                                ) : (
                                    <>
                                        Menampilkan{' '}
                                        <span className="font-semibold text-gray-800">{paginationInfo.showing}</span> dari{' '}
                                        <span className="font-semibold text-gray-800">{paginationInfo.total}</span> berita
                                    </>
                                )}
                            </p>

                            {filters.search && (
                                <button
                                    onClick={() => { setSearchValue(''); handleSearch(''); }}
                                    className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 transition-colors hover:border-gray-300 hover:bg-gray-50"
                                >
                                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Hapus Filter
                                </button>
                            )}
                        </div>
                    )}

                    {/* News grid + inline pagination */}
                    <NewsList
                        newsItems={news?.data || []}
                        loading={isSearching}
                        pagination={{
                            currentPage: paginationInfo.currentPage,
                            totalPages: paginationInfo.totalPages,
                            hasPrev: !!news?.links?.prev,
                            hasNext: !!news?.links?.next,
                            onPageChange: handlePageChange,
                        }}
                    />
                </div>
            </main>
        </MainLayout>
    );
};

export default NewsPage;
