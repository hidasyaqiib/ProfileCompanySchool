/**
 * ArticleSidebar — Sticky right-column sidebar for the news show page.
 *
 * Contains the table of contents (ArticleToc), a share/copy widget,
 * and a compact list of related articles.
 */
import { Link } from '@inertiajs/react';
import { Copy, Share2 } from 'lucide-react';
import React from 'react';
import ArticleToc from '@/components/news/article-toc';
import type { NewsItem } from '@/components/news/news-list';

export interface ArticleSidebarProps {
    /** Raw HTML content used to generate the TOC */
    newsContent: string;
    relatedNews: NewsItem[];
    formatDate: (dateString: string) => string;
    onShare: () => void;
    onCopy: () => void;
    copied: boolean;
}

const ArticleSidebar: React.FC<ArticleSidebarProps> = ({
    newsContent,
    relatedNews,
    formatDate,
    onShare,
    onCopy,
    copied,
}) => (
    <aside className="lg:col-span-4">
        <div className="sticky top-24 space-y-6">

            {/* Table of contents */}
            <ArticleToc content={newsContent} />

            {/* Share widget */}
            <div className="overflow-hidden rounded-2xl border border-gray-100">
                <div className="border-b border-gray-100 px-5 py-4">
                    <h3 className="text-xs font-black uppercase tracking-wider text-gray-900">
                        Bagikan Artikel
                    </h3>
                </div>
                <div className="flex flex-col gap-2 p-4">
                    <button
                        onClick={onShare}
                        className="flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold text-white transition-all hover:opacity-90"
                        style={{ background: 'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)' }}
                    >
                        <Share2 className="h-3.5 w-3.5" />
                        Bagikan
                    </button>
                    <button
                        onClick={onCopy}
                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-2.5 text-xs font-semibold text-gray-600 transition-all hover:border-[#2ECC71] hover:text-[#27ae60]"
                    >
                        <Copy className="h-3.5 w-3.5" />
                        {copied ? '✓ Tautan tersalin!' : 'Salin Tautan'}
                    </button>
                </div>
            </div>

            {/* Related articles compact list */}
            {relatedNews.length > 0 && (
                <div className="overflow-hidden rounded-2xl border border-gray-100">
                    <div className="border-b border-gray-100 px-5 py-4">
                        <h3 className="text-xs font-black uppercase tracking-wider text-gray-900">
                            Artikel Lainnya
                        </h3>
                    </div>
                    <div className="divide-y divide-gray-50 p-2">
                        {relatedNews.slice(0, 4).map((article) => (
                            <Link
                                key={article.id}
                                href={`/berita/${article.slug}`}
                                className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50"
                            >
                                <img
                                    src={article.image_url || '/assets/image/hero-home.webp'}
                                    alt={article.title}
                                    className="h-14 w-14 shrink-0 rounded-xl object-cover"
                                    loading="lazy"
                                />
                                <div className="min-w-0">
                                    <h4 className="line-clamp-2 text-xs font-bold leading-snug text-gray-800 transition-colors group-hover:text-[#27ae60]">
                                        {article.title}
                                    </h4>
                                    <p className="mt-1 text-[10px] text-gray-400">
                                        {formatDate(article.published_at)}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="px-4 pb-4">
                        <Link
                            href="/berita"
                            className="flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold text-white transition-all hover:opacity-90"
                            style={{ background: 'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)' }}
                        >
                            Lihat Semua Berita
                        </Link>
                    </div>
                </div>
            )}

        </div>
    </aside>
);

export default ArticleSidebar;
