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
                            style={{ backgroundColor: '#f0fdf4' }}
                        >
                            <svg
                                className="h-10 w-10 text-[#27ae60]"
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
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-gray-900">
                            Belum Ada Berita
                        </h3>
                        <p className="inline-flex items-center gap-1.5 rounded-md border border-yellow-200 bg-yellow-50 px-3 py-2 text-sm text-yellow-700">
                            <svg
                                className="h-4 w-4 shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z"
                                />
                            </svg>
                            Berita belum dipublikasikan. Silakan tambahkan
                            melalui panel admin.
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
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] as const },
        },
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
                                className="group flex flex-row gap-4 sm:gap-6"
                            >
                                {/* Thumbnail — 50% */}
                                <div className="w-1/2 shrink-0 overflow-hidden rounded-2xl">
                                    <img
                                        src={
                                            featuredItem.image_url ||
                                            '/assets/image/hero-home.webp'
                                        }
                                        alt={featuredItem.title}
                                        className="aspect-4/3 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="eager"
                                    />
                                </div>

                                {/* Content — 50% */}
                                <div className="flex w-1/2 min-w-0 flex-col gap-2 py-0.5 sm:gap-3">
                                    {/* Source */}
                                    <div className="flex flex-wrap items-center gap-1.5">
                                        <div
                                            className="h-3.5 w-3.5 shrink-0 rounded-full"
                                            style={{
                                                background:
                                                    'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)',
                                            }}
                                        />
                                        <span className="text-xs font-semibold text-gray-500">
                                            Terbaru
                                        </span>
                                        <span className="text-gray-300">·</span>
                                        <span className="text-xs text-gray-400">
                                            {featuredItem.published_at}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="line-clamp-4 text-lg leading-tight font-black text-gray-900 transition-colors group-hover:text-[#27ae60] sm:text-xl md:text-2xl lg:text-5xl">
                                        {featuredItem.title}
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="text-md line-clamp-4 hidden leading-relaxed text-gray-500 sm:block lg:line-clamp-5">
                                        {featuredItem.content.replace(
                                            /<[^>]*>/g,
                                            '',
                                        )}
                                    </p>

                                    {/* Author + arrow */}
                                    <div className="mt-auto flex items-center gap-2 border-t border-gray-100 pt-2 text-xs text-gray-400">
                                        <User className="h-3 w-3 shrink-0" />
                                        <span className="truncate font-medium uppercase">
                                            {featuredItem.author}
                                        </span>
                                        <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-[#27ae60] opacity-0 transition-opacity group-hover:opacity-100" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    )}

                    {/* If not enough for hero layout, show all in grid */}
                    {/* news terbaru */}
                    {!hasHeroLayout && (
                        <div className="mb-5 grid gap-5 lg:grid-cols-4">
                            {newsItems.map((news) => (
                                <motion.div
                                    key={news.id}
                                    variants={itemVariants}
                                >
                                    <NewsCard {...news} />
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Divider */}
                    {hasHeroLayout && remainingItems.length > 0 && (
                        <div className="mb-8 flex items-center gap-4">
                            <div className="h-px flex-1 bg-gray-100" />
                            <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                                Berita Lainnya
                            </span>
                            <div className="h-px flex-1 bg-gray-100" />
                        </div>
                    )}

                    {/* Remaining items news grid */}
                    {remainingItems.length > 0 && (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
                            {remainingItems.map((news) => (
                                <motion.div
                                    key={news.id}
                                    variants={itemVariants}
                                >
                                    <NewsCard {...news} />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* ── Pagination ────────────────────────────────── */}
                {pagination && pagination.totalPages > 1 && (
                    <nav
                        aria-label="Navigasi halaman berita"
                        className="mt-10 flex items-center justify-center space-x-2 border-t border-gray-100 pt-8"
                    >
                        {/* Previous */}
                        <button
                            onClick={() =>
                                pagination.onPageChange(
                                    pagination.currentPage - 1,
                                )
                            }
                            disabled={!pagination.hasPrev}
                            aria-label="Halaman sebelumnya"
                            className={`rounded-lg px-4 py-2 font-medium transition-colors duration-300 ${
                                !pagination.hasPrev
                                    ? 'cursor-not-allowed bg-gray-200 text-gray-400'
                                    : 'bg-white text-gray-700 shadow-sm hover:bg-green-50 hover:text-[#2ECC71]'
                            }`}
                        >
                            ‹ Sebelumnya
                        </button>

                        {/* Page numbers */}
                        <div className="flex space-x-1">
                            {Array.from(
                                { length: Math.min(5, pagination.totalPages) },
                                (_, i) => {
                                    let pageNum: number;
                                    if (pagination.totalPages <= 5) {
                                        pageNum = i + 1;
                                    } else {
                                        const cur = pagination.currentPage;
                                        const tot = pagination.totalPages;
                                        if (cur <= 3) pageNum = i + 1;
                                        else if (cur > tot - 3)
                                            pageNum = tot - 4 + i;
                                        else pageNum = cur - 2 + i;
                                    }
                                    const isActive =
                                        pageNum === pagination.currentPage;
                                    return (
                                        <button
                                            key={pageNum}
                                            onClick={() =>
                                                pagination.onPageChange(pageNum)
                                            }
                                            aria-label={`Halaman ${pageNum}`}
                                            aria-current={
                                                isActive ? 'page' : undefined
                                            }
                                            className={`h-10 w-10 rounded-lg font-medium transition-all duration-300 ${
                                                isActive
                                                    ? 'bg-[#2ECC71] text-white shadow-md'
                                                    : 'bg-white text-gray-700 shadow-sm hover:bg-green-50 hover:text-[#2ECC71]'
                                            }`}
                                        >
                                            {pageNum}
                                        </button>
                                    );
                                },
                            )}
                        </div>

                        {/* Next */}
                        <button
                            onClick={() =>
                                pagination.onPageChange(
                                    pagination.currentPage + 1,
                                )
                            }
                            disabled={!pagination.hasNext}
                            aria-label="Halaman berikutnya"
                            className={`rounded-lg px-4 py-2 font-medium transition-colors duration-300 ${
                                !pagination.hasNext
                                    ? 'cursor-not-allowed bg-gray-200 text-gray-400'
                                    : 'bg-white text-gray-700 shadow-sm hover:bg-green-50 hover:text-[#2ECC71]'
                            }`}
                        >
                            Selanjutnya ›
                        </button>
                    </nav>
                )}

                {/* Load More Button */}
                {showLoadMore && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={onLoadMore}
                            disabled={loading}
                            className="inline-flex items-center gap-2 rounded-2xl px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                            style={{
                                background:
                                    'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)',
                            }}
                        >
                            {loading ? (
                                <>
                                    <svg
                                        className="h-4 w-4 animate-spin"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            fill="none"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        />
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
