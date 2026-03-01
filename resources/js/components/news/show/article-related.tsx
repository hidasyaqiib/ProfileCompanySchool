/**
 * ArticleRelated — Full-width related articles grid at the bottom of the
 * news show page.
 *
 * Returns null when there are no related articles so the parent does not
 * need to guard against an empty section.
 */
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import NewsCard from '@/components/components/news/news-card';
import type { NewsItem } from '@/components/news/news-list';

export interface ArticleRelatedProps {
    relatedNews: NewsItem[];
}

const ArticleRelated: React.FC<ArticleRelatedProps> = ({ relatedNews }) => {
    if (relatedNews.length === 0) return null;

    return (
        <section className="border-t border-gray-100 bg-gray-50/50 py-14">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">

                    {/* Section header */}
                    <div className="mb-8 flex items-end justify-between">
                        <div>
                            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#27ae60]">
                                Baca Juga
                            </p>
                            <h2 className="text-2xl font-black text-gray-900">Artikel Lainnya</h2>
                        </div>
                        <Link
                            href="/berita"
                            className="hidden items-center gap-1 text-xs font-semibold text-[#27ae60] underline-offset-2 hover:underline sm:flex"
                        >
                            Lihat semua
                            <ChevronRight className="h-3.5 w-3.5" />
                        </Link>
                    </div>

                    {/* Cards grid */}
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {relatedNews.slice(0, 3).map((article) => (
                            <NewsCard key={article.id} {...article} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ArticleRelated;
