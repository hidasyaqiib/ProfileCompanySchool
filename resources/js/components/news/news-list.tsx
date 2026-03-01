import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';

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

interface NewsListProps {
    newsItems: NewsItem[];
    className?: string;
    showLoadMore?: boolean;
    onLoadMore?: () => void;
    loading?: boolean;
}

const NewsList: React.FC<NewsListProps> = ({
    newsItems,
    className = '',
    showLoadMore = false,
    onLoadMore,
    loading = false,
}) => {
    const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

    const handleImageError = (id: number) => {
        setImageErrors(prev => new Set(prev).add(id));
    };

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const formatTimeAgo = (dateString: string): string => {
        const now = new Date();
        const date = new Date(dateString);
        const diffMs = now.getTime() - date.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffHours < 1) return 'Baru saja';
        if (diffHours < 24) return `${diffHours} jam lalu`;
        if (diffDays < 7) return `${diffDays} hari lalu`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} minggu lalu`;
        if (diffDays < 365) return `${Math.floor(diffDays / 30)} bulan lalu`;
        return `${Math.floor(diffDays / 365)} tahun lalu`;
    };

    const stripHtml = (html: string): string => {
        return html.replace(/<[^>]*>/g, '').trim();
    };

    const truncateText = (text: string, maxLength: number = 150): string => {
        const stripped = stripHtml(text);
        if (stripped.length <= maxLength) return stripped;
        return stripped.substring(0, maxLength).trim() + '...';
    };

    const estimateReadTime = (content: string): number => {
        const words = stripHtml(content).split(/\s+/).filter(Boolean).length;
        return Math.max(1, Math.ceil(words / 200));
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1] as const,
            },
        },
    };

    if (newsItems.length === 0) {
        return (
            <section className={`py-16 ${className}`}>
                <div className="container mx-auto px-4 text-center">
                    <div className="mx-auto max-w-md">
                        <div className="relative mb-8">
                            <svg
                                className="mx-auto h-24 w-24 text-gray-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-4 text-xl font-semibold text-gray-800">
                            Belum Ada Berita
                        </h3>
                        <p className="text-gray-600">
                            Belum ada berita yang dipublikasikan. Silakan periksa kembali nanti.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={`py-16 ${className}`} id="news-list">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {newsItems.map((news) => (
                        <motion.article
                            key={news.id}
                            variants={itemVariants}
                            className="group"
                        >
                            <Link
                                href={`/berita/${news.slug}`}
                                className="block h-full"
                            >
                                <div className="h-full overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    {/* Image */}
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={
                                                imageErrors.has(news.id)
                                                    ? '/assets/image/hero-home.webp'
                                                    : news.image_url || '/assets/image/hero-home.webp'
                                            }
                                            alt={news.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            onError={() => handleImageError(news.id)}
                                            loading="lazy"
                                        />

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                                        {/* Read time badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-sm">
                                                <FiClock className="h-3 w-3" />
                                                {estimateReadTime(news.content)} min
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Meta info */}
                                        <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <FiUser className="h-3 w-3" />
                                                <span className="font-medium">{news.author}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <FiCalendar className="h-3 w-3" />
                                                <time dateTime={news.published_at}>
                                                    {formatDate(news.published_at)}
                                                </time>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="mb-3 line-clamp-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-emerald-600">
                                            {news.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
                                            {truncateText(news.content)}
                                        </p>

                                        {/* Read more */}
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-medium text-gray-400">
                                                {formatTimeAgo(news.published_at)}
                                            </span>
                                            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-colors group-hover:text-emerald-700">
                                                <span>Baca selengkapnya</span>
                                                <svg
                                                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Load More Button */}
                {showLoadMore && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={onLoadMore}
                            disabled={loading}
                            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                        >
                            {loading ? (
                                <>
                                    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
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
                                <>
                                    Muat Lebih Banyak
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsList;
