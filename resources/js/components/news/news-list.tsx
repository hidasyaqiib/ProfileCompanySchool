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
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {newsItems.map((news) => (
                        <motion.div
                            key={news.id}
                            variants={itemVariants}
                        >
                            <NewsCard {...news} />
                        </motion.div>
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
