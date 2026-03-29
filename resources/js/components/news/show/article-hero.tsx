/**
 * ArticleHero — Full-bleed hero section for the news show page.
 *
 * Contains the cover image with gradient overlay, breadcrumb navigation,
 * article title, author/date metadata, and action buttons (back, copy, share)
 * — all in one cohesive section.
 */
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, ChevronRight, Copy, Share2 } from 'lucide-react';
import React from 'react';
import type { NewsItem } from '@/components/news/news-list';

export interface ArticleHeroProps {
    news: Pick<NewsItem, 'title' | 'author' | 'published_at' | 'image_url'>;
    formatDate: (dateString: string) => string;
    onShare: () => void;
    onCopy: () => void;
    copied: boolean;
}

const ArticleHero: React.FC<ArticleHeroProps> = ({
    news,
    formatDate,
    onShare,
    onCopy,
    copied,
}) => (
    <div className="relative h-[60vh] min-h-72 w-full overflow-hidden bg-gray-950 sm:h-[70vh] sm:min-h-96 md:h-[75vh] md:min-h-120">
        {/* Cover image */}
        <img
            src={news.image_url || '/assets/image/hero-home.webp'}
            alt={news.title}
            className="h-full w-full object-cover opacity-60"
            loading="eager"
            fetchPriority="high"
        />

        {/* Gradient overlay — strong at bottom for content legibility */}
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/50 to-gray-950/10" />

        {/* Breadcrumb — top */}
        <div className="absolute inset-x-0 top-4 sm:top-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <nav
                    aria-label="Breadcrumb"
                    className="flex flex-wrap items-center gap-1.5 text-xs"
                >
                    <Link
                        href="/"
                        className="font-medium text-white/70 transition-colors hover:text-white"
                    >
                        Beranda
                    </Link>
                    <ChevronRight className="h-3 w-3 shrink-0 text-white/40" />
                    <Link
                        href="/berita"
                        className="font-medium text-white/70 transition-colors hover:text-white"
                    >
                        Berita
                    </Link>
                    <ChevronRight className="h-3 w-3 shrink-0 text-white/40" />
                    <span className="line-clamp-1 max-w-40 text-white/50 sm:max-w-60">
                        {news.title}
                    </span>
                </nav>
            </div>
        </div>

        {/* Bottom content — title + meta + actions */}
        <motion.div
            className="absolute inset-x-0 bottom-0 pb-6 sm:pb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.2 }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    {/* Title */}
                    <h1 className="mb-3 text-xl leading-tight font-black text-white drop-shadow-sm sm:mb-5 sm:text-2xl md:text-4xl lg:text-[2.75rem]">
                        {news.title}
                    </h1>

                    {/* Author + date */}
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-white/70 sm:mb-6 sm:gap-4">
                        <div className="flex items-center gap-2">
                            <div
                                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black text-white"
                                style={{
                                    background:
                                        'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)',
                                }}
                            >
                                {news.author.charAt(0).toUpperCase()}
                            </div>
                            <span className="font-semibold text-white">
                                {news.author}
                            </span>
                        </div>
                        <span className="text-white/30">·</span>
                        <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            <time dateTime={news.published_at}>
                                {formatDate(news.published_at)}
                            </time>
                        </div>
                    </div>

                    {/* Action bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-4 sm:gap-3 sm:pt-5">
                        <Link
                            href="/berita"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 transition-colors hover:text-white"
                        >
                            <ArrowLeft className="h-3.5 w-3.5" />
                            Kembali ke Berita
                        </Link>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={onCopy}
                                title="Salin tautan"
                                className="flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                            >
                                <Copy className="h-3.5 w-3.5" />
                                {copied ? 'Tersalin!' : 'Salin'}
                            </button>
                            <button
                                onClick={onShare}
                                className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold text-white transition-all hover:opacity-90 active:scale-95"
                                style={{
                                    background:
                                        'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)',
                                }}
                            >
                                <Share2 className="h-3.5 w-3.5" />
                                Bagikan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
);

export default ArticleHero;
