import { Link } from '@inertiajs/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NewsCard from '@/components/components/news/news-card';

export interface NewsItem {
    id: number;
    title: string;
    content: string;
    thumbnail: string | null;
    image_url?: string | null;
    published_at: string;
    author: string;
    slug: string;
    status: 'Draft' | 'Published' | 'Archived';
}

interface NewsInShortProps {
    /** Pre-loaded news from Inertia server-side props */
    initialNews?: NewsItem[];
    /** If true, fetch client-side from /api/news instead of using initialNews */
    fetchFromApi?: boolean;
    /** Maximum cards to display */
    limit?: number;
    /** Show the "See all" link */
    showViewAll?: boolean;
}

function SkeletonCard(): React.ReactElement {
    return (
        <div className="h-96 w-54 animate-pulse overflow-hidden rounded-2xl bg-white shadow-md">
            <div className="h-52 shrink-0 bg-gray-200" />
            <div className="flex h-44 flex-col space-y-3 p-3 px-0.5">
                <div className="flex items-center justify-between">
                    <div className="h-6 w-16 rounded bg-gray-200" />
                    <div className="h-3 w-20 rounded bg-gray-200" />
                </div>
                <div className="space-y-2">
                    <div className="h-5 w-full rounded bg-gray-200" />
                    <div className="h-5 w-3/4 rounded bg-gray-200" />
                </div>
                <div className="flex-1 space-y-1">
                    <div className="h-4 w-full rounded bg-gray-200" />
                    <div className="h-4 w-full rounded bg-gray-200" />
                    <div className="h-4 w-5/6 rounded bg-gray-200" />
                </div>
                <div className="mt-auto flex items-center gap-2 border-t border-gray-100 pt-4">
                    <div className="h-4 w-4 rounded-full bg-gray-200" />
                    <div className="h-3 w-20 rounded bg-gray-200" />
                </div>
            </div>
        </div>
    );
}

const NewsInShort: React.FC<NewsInShortProps> = ({
    initialNews = [],
    fetchFromApi = false,
    limit = 4,
    showViewAll = true,
}) => {
    const [news, setNews] = useState<NewsItem[]>(initialNews.slice(0, limit));
    const [loading, setLoading] = useState<boolean>(fetchFromApi);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!fetchFromApi) {
            return;
        }

        const controller = new AbortController();

        const fetchNews = async (): Promise<void> => {
            try {
                setLoading(true);
                setError(null);

                const response = await axios.get<{ data: NewsItem[] }>(
                    '/api/news',
                    {
                        params: { limit },
                        signal: controller.signal,
                    },
                );

                setNews(response.data.data);
            } catch (err) {
                if (!axios.isCancel(err)) {
                    setError('Gagal memuat berita. Silakan coba lagi.');
                    console.error('Error fetching news:', err);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchNews();

        return () => controller.abort();
    }, [fetchFromApi, limit]);

    return (
        <section className="relative overflow-hidden bg-linear-to-br from-gray-50 to-white py-16">
            {/* Background blobs */}
            <div className="pointer-events-none absolute top-10 left-10 h-32 w-32 rounded-full bg-emerald-400 opacity-5 blur-3xl" />
            <div className="pointer-events-none absolute right-20 bottom-20 h-40 w-40 rounded-full bg-emerald-500 opacity-5 blur-3xl" />

            <div className="relative z-10 container mx-auto px-5">
                {/* Header */}
                <div className="mb-10 flex items-end justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                            Berita{' '}
                            <span className="text-emerald-600">Terkini</span>
                        </h2>
                        <p className="mt-2 max-w-xl text-gray-500">
                            Ikuti perkembangan dan update terbaru seputas
                            kegiatan MI NU 2 Situwangi
                        </p>
                    </div>

                    {showViewAll && (
                        <Link
                            href="/berita"
                            className="hidden items-center gap-1 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700 sm:inline-flex"
                        >
                            Lihat semua
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </Link>
                    )}
                </div>

                {/* Error state */}
                {error && (
                    <div className="mb-8 rounded-xl border border-red-200 bg-red-50 p-6 text-center">
                        <p className="font-medium text-red-700">{error}</p>
                        <button
                            onClick={() => {
                                setError(null);
                                setLoading(true);
                            }}
                            className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                        >
                            Coba Lagi
                        </button>
                    </div>
                )}

                {/* Loading state */}
                {loading && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {Array.from({ length: limit }).map((_, index) => (
                            <SkeletonCard key={index} />
                        ))}
                    </div>
                )}

                {/* Empty state */}
                {!loading && !error && news.length === 0 && (
                    <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-white py-16 text-center">
                        <svg
                            className="mx-auto mb-4 h-14 w-14 text-gray-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            />
                        </svg>
                        <h3 className="mb-2 text-base font-semibold text-gray-600">Belum Ada Berita Terbaru</h3>
                        <p className="inline-flex items-center gap-1.5 rounded-md border border-yellow-200 bg-yellow-50 px-3 py-2 text-sm text-yellow-700">
                            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
                            </svg>
                            Berita belum dipublikasikan. Silakan tambahkan melalui panel admin.
                        </p>
                    </div>
                )}

                {/* News grid */}
                {!loading && !error && news.length > 0 && (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {news.map((item) => (
                            <NewsCard
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                content={item.content}
                                thumbnail={item.thumbnail}
                                image_url={item.image_url ?? item.thumbnail ?? undefined}
                                published_at={item.published_at}
                                author={item.author}
                                slug={item.slug}
                                status={item.status}
                            />
                        ))}
                    </div>
                )}

                {/* Mobile "view all" */}
                {showViewAll && (
                    <div className="mt-10 text-center sm:hidden">
                        <Link
                            href="/berita"
                            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg"
                        >
                            Lihat Semua Berita
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsInShort;
