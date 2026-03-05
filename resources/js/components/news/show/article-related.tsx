/**
 * ArticleRelated — Sticky sidebar widget for the news show page.
 *
 * Shows the latest 3 other articles as compact numbered cards in a sticky
 * sidebar on desktop. Stacks below the article body on mobile/tablet.
 */
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CalendarDays, ChevronRight } from 'lucide-react';
import React from 'react';
import type { NewsItem } from '@/components/news/news-list';

export interface ArticleRelatedProps {
    relatedNews: NewsItem[];
}

const formatRelativeDate = (dateString: string): string => {
    const now = new Date();
    const date = new Date(dateString);
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Hari ini';
    if (diffDays === 1) return 'Kemarin';
    if (diffDays < 7) return `${diffDays} hari lalu`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} minggu lalu`;
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
};

const ArticleRelated: React.FC<ArticleRelatedProps> = ({ relatedNews }) => {
    if (relatedNews.length === 0) return null;

    return (
        <motion.aside
            className="lg:col-span-4 w-full min-w-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
            <div className="space-y-4">

                {/* Widget card */}
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/60 px-5 py-4">
                        <div className="flex items-center gap-2.5">
                            <div
                                className="h-4 w-1 rounded-full"
                                style={{ background: 'linear-gradient(180deg, #2ECC71 0%, #27ae60 100%)' }}
                            />
                            <h2 className="text-sm font-black uppercase tracking-wider text-gray-900">
                                Artikel Lainnya
                            </h2>
                        </div>
                        <Link
                            href="/berita"
                            className="flex items-center gap-0.5 text-xs font-semibold text-[#27ae60] underline-offset-2 hover:underline"
                        >
                            Semua
                            <ChevronRight className="h-3 w-3" />
                        </Link>
                    </div>

                    {/* Article list */}
                    <ul className="divide-y divide-gray-50">
                        {relatedNews.slice(0, 5).map((article) => (
                            <li key={article.id}>
                                <Link
                                    href={`/berita/${article.slug}`}
                                    className="group flex items-start gap-3 p-4 transition-colors hover:bg-emerald-50/40"
                                >
                                    {/* Thumbnail */}
                                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                                        <img
                                            src={article.image_url || '/assets/image/hero-home.webp'}
                                            alt={article.title}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            loading="lazy"
                                        />

                                    </div>

                                    {/* Content */}
                                    <div className="min-w-0 flex-1 py-0.5">
                                        <h3 className="mb-2 line-clamp-2 text-sm font-bold leading-snug text-gray-900 transition-colors group-hover:text-[#27ae60]">
                                            {article.title}
                                        </h3>
                                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                            <CalendarDays className="h-3 w-3 shrink-0" />
                                            <time dateTime={article.published_at}>
                                                {formatRelativeDate(article.published_at)}
                                            </time>
                                        </div>
                                    </div>

                                    {/* Arrow icon */}
                                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 self-center text-gray-200 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#27ae60]" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Footer CTA */}
                    <div className="border-t border-gray-100 px-4 py-3.5">
                        <Link
                            href="/berita"
                            className="flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold text-white transition-all hover:opacity-90 active:scale-95"
                            style={{ background: 'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)' }}
                        >
                            Lihat Semua Berita
                            <ChevronRight className="h-3.5 w-3.5" />
                        </Link>
                    </div>
                </div>

            </div>
        </motion.aside>
    );
};

export default ArticleRelated;
