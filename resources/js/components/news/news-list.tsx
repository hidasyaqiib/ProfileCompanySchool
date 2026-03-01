import { Link } from '@inertiajs/react';
import { ArrowUpRight, User } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';
import NewsCard from '../components/news/news-card';

export interface NewsItem {
    id: number;
    title: string;
    content: string;
    thumbnail: string | null;
    published_at: string;
    author: string;
    slug: string;
    status: 'Draft' | 'Published' | 'Archived';
    image_url?: string;
}

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    hasPrev: boolean;
    hasNext: boolean;
    onPageChange: (page: number) => void;
}

interface NewsListProps {
    newsItems: NewsItem[];
    className?: string;
    showLoadMore?: boolean;
    onLoadMore?: () => void;
    loading?: boolean;
    pagination?: PaginationProps;
}

const SkeletonCard = () => (
    <div className="animate-pulse overflow-hidden rounded-2xl bg-white ring-1 ring-gray-100">
        <div className="aspect-4/3 bg-gray-100" />
        <div className="p-5">
            <div className="mb-3 flex gap-2">
                <div className="h-3 w-20 rounded-full bg-gray-100" />
                <div className="h-3 w-16 rounded-full bg-gray-100" />
            </div>
            <div className="mb-2 h-4 w-full rounded-full bg-gray-100" />
            <div className="h-4 w-3/4 rounded-full bg-gray-100" />
            <div className="mt-3 space-y-1.5">
                <div className="h-3 w-full rounded-full bg-gray-50" />
                <div className="h-3 w-full rounded-full bg-gray-50" />
                <div className="h-3 w-2/3 rounded-full bg-gray-50" />
            </div>
        </div>
    </div>
);

const NewsList: React.FC<NewsListProps> = ({
    newsItems,
    className = '',
    showLoadMore = false,
    onLoadMore,
    loading = false,
    pagination,
}) => {
    if (loading) {
        return (
            <section className={`py-14 ${className}`}>
                <div className="container mx-auto px-4">
                    {/* Featured skeleton — compact horizontal */}
                    <div className="mb-8 flex gap-4 rounded-2xl bg-white p-4 ring-1 ring-gray-100 sm:gap-5 sm:p-5">
                        <div className="aspect-4/3 w-[38%] max-w-85 shrink-0 animate-pulse rounded-xl bg-gray-100 sm:w-[42%]" />
                        <div className="flex flex-1 flex-col justify-between py-0.5">
                            <div className="mb-2 flex items-center gap-2">
                                <div className="h-4 w-28 animate-pulse rounded-full bg-gray-100" />
                                <div className="h-4 w-16 animate-pulse rounded-full bg-gray-100" />
                            </div>
                            <div className="space-y-2">
                                <div className="h-5 animate-pulse rounded bg-gray-100" />
                                <div className="h-5 w-4/5 animate-pulse rounded bg-gray-100" />
                                <div className="h-5 w-2/3 animate-pulse rounded bg-gray-100" />
                            </div>
                            <div className="mt-2 hidden space-y-1.5 sm:block">
                                <div className="h-3.5 animate-pulse rounded bg-gray-50" />
                                <div className="h-3.5 w-5/6 animate-pulse rounded bg-gray-50" />
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                                <div className="h-5 w-20 animate-pulse rounded-full bg-gray-100" />
                                <div className="h-4 w-24 animate-pulse rounded bg-gray-50" />
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {[1, 2, 3, 4].map((i) => (
                            <SkeletonCard key={i} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (newsItems.length === 0) {
        return (
            <section className={`py-20 ${className}`}>
                <div className="container mx-auto px-4 text-center">
                    <div className="mx-auto max-w-sm">
                        <div
                            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl"
                            style={{ background: 'linear-gradient(135deg, #2ECC71/10 0%, #27ae60/10 100%)', backgroundColor: '#f0fdf4' }}
                        >
                            <svg className="h-10 w-10 text-[#27ae60]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">Belum Ada Berita</h3>
                        <p className="text-sm text-gray-500">
                            Belum ada berita yang dipublikasikan. Silakan periksa kembali nanti.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    const featuredItem = newsItems[0];
    // All items after the featured one are shown in the card grid
    const remainingItems = newsItems.slice(1);
    const hasHeroLayout = newsItems.length >= 1;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] as const } },
    };

    return (
        <section className={`py-14 ${className}`} id="news-list">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* ── Featured card — Google-News horizontal style ── */}
                    {hasHeroLayout && (
                        <motion.div variants={itemVariants} className="mb-8">
                            <Link
                                href={`/berita/${featuredItem.slug}`}
                                className="group flex gap-4 overflow-hidden rounded-2xl bg-white p-4 ring-1 ring-gray-200 transition-all duration-300 hover:shadow-lg hover:ring-[#2ECC71]/40 sm:gap-5 sm:p-5"
                            >
                                {/* Left — thumbnail */}
                                <div className="relative aspect-4/3 w-1/2 shrink-0 overflow-hidden rounded-xl">
                                    <img
                                        src={featuredItem.image_url || '/assets/image/hero-home.webp'}
                                        alt={featuredItem.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="eager"
                                    />
                                </div>

                                {/* Right — content */}
                                <div className="flex w-1/2 min-w-0 flex-col justify-between py-0.5">
                                    {/* Source */}
                                    <div className="mb-2 flex flex-wrap items-center gap-2">
                                        <div className="flex items-center gap-1.5">
                                            <div
                                                className="h-5 w-5 rounded-full"
                                                style={{ background: 'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)' }}
                                            />
                                            <span className="text-xs font-semibold text-gray-600">MI NU 02 Situwangi</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h2 className="mb-2 line-clamp-3 text-base font-black leading-snug text-gray-900 transition-colors group-hover:text-[#27ae60] sm:text-lg md:text-xl lg:text-2xl">
                                        {featuredItem.title}
                                    </h2>

                                    {/* Excerpt — hidden on small screens */}
                                    <p className="mb-3 hidden line-clamp-2 text-sm leading-relaxed text-gray-500 sm:block">
                                        {featuredItem.content.replace(/<[^>]*>/g, '')}
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-2 text-xs">
                                        <span className="flex items-center gap-1 text-gray-500">
                                            <User className="h-3 w-3" />
                                            {featuredItem.author}
                                        </span>
                                        <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-[#27ae60] opacity-0 transition-opacity group-hover:opacity-100" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    )}

                    {/* If not enough for hero layout, show all in grid */}
                    {!hasHeroLayout && (
                        <div className="mb-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {newsItems.map((news) => (
                                <motion.div key={news.id} variants={itemVariants}>
                                    <NewsCard {...news} />
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Divider */}
                    {hasHeroLayout && remainingItems.length > 0 && (
                        <div className="mb-8 flex items-center gap-4">
                            <div className="h-px flex-1 bg-gray-100" />
                            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                                Berita Lainnya
                            </span>
                            <div className="h-px flex-1 bg-gray-100" />
                        </div>
                    )}

                    {/* Remaining items grid — 4 cards per row on large screens */}
                    {remainingItems.length > 0 && (
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {remainingItems.map((news) => (
                                <motion.div key={news.id} variants={itemVariants}>
                                    <NewsCard {...news} />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* ── Pagination ────────────────────────────────── */}
                {pagination && pagination.totalPages >= 1 && (
                    <nav
                        aria-label="Navigasi halaman berita"
                        className="mt-10 flex flex-col items-center gap-3 border-t border-gray-100 pt-8"
                    >
                        <div className="flex items-center gap-1.5">
                            {/* Previous */}
                            <button
                                onClick={() => pagination.onPageChange(pagination.currentPage - 1)}
                                disabled={!pagination.hasPrev}
                                aria-label="Halaman sebelumnya"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition-all hover:border-[#2ECC71] hover:text-[#27ae60] disabled:cursor-not-allowed disabled:opacity-35"
                            >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Page numbers */}
                            {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                                let pageNum: number;
                                if (pagination.totalPages <= 5) {
                                    pageNum = i + 1;
                                } else {
                                    const cur = pagination.currentPage;
                                    const tot = pagination.totalPages;
                                    if (cur <= 3) pageNum = i + 1;
                                    else if (cur > tot - 3) pageNum = tot - 4 + i;
                                    else pageNum = cur - 2 + i;
                                }
                                const isActive = pageNum === pagination.currentPage;
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => pagination.onPageChange(pageNum)}
                                        aria-label={`Halaman ${pageNum}`}
                                        aria-current={isActive ? 'page' : undefined}
                                        className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold transition-all ${
                                            isActive
                                                ? 'text-white shadow-md shadow-emerald-200'
                                                : 'border border-gray-200 bg-white text-gray-600 hover:border-[#2ECC71] hover:text-[#27ae60]'
                                        }`}
                                        style={isActive ? { background: 'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)' } : undefined}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}

                            {/* Next */}
                            <button
                                onClick={() => pagination.onPageChange(pagination.currentPage + 1)}
                                disabled={!pagination.hasNext}
                                aria-label="Halaman berikutnya"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition-all hover:border-[#2ECC71] hover:text-[#27ae60] disabled:cursor-not-allowed disabled:opacity-35"
                            >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-xs text-gray-400">
                            Halaman {pagination.currentPage} dari {pagination.totalPages}
                        </p>
                    </nav>
                )}

                {/* Load More Button */}
                {showLoadMore && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={onLoadMore}
                            disabled={loading}
                            className="inline-flex items-center gap-2 rounded-2xl px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                            style={{ background: 'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)' }}
                        >
                            {loading ? (
                                <>
                                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Memuat...
                                </>
                            ) : (
                                'Muat Lebih Banyak'
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsList;
