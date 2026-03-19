import { Head } from '@inertiajs/react';
import React, { useCallback, useMemo, useState } from 'react';
import ArticleBody from '@/components/news/show/article-body';
import ArticleHero from '@/components/news/show/article-hero';
import ArticleRelated from '@/components/news/show/article-related';
import type { NewsItem } from '@/components/news/news-list';
import MainLayout from '@/layouts/main-layout';

interface NewsShowPageProps {
    news: NewsItem & { content: string };
    relatedNews: NewsItem[];
    meta: {
        title: string;
        description: string;
        keywords: string;
        image?: string;
    };
}

const NewsShow: React.FC<NewsShowPageProps> = ({ news, relatedNews, meta }) => {
    const [copied, setCopied] = useState(false);

    const formatDate = (dateString: string): string =>
        new Date(dateString).toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

    /**
     * Inject heading IDs for TOC scroll-tracking and strip inline color styles
     * that editors sometimes embed (which would override our prose text colors).
     */
    const contentWithIds = useMemo(() => {
        return (
            news.content
                .replace(
                    /<h([23])([^>]*)>(.*?)<\/h[23]>/gi,
                    (_match, level, attrs, inner) => {
                        const text = inner.replace(/<[^>]*>/g, '');
                        const id = text
                            .toLowerCase()
                            .replace(/[^\w\s-]/g, '')
                            .trim()
                            .replace(/\s+/g, '-');
                        return `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
                    },
                )
                // Strip ALL inline style attributes so our Tailwind prose classes win
                .replace(/\sstyle="[^"]*"/gi, '')
        );
    }, [news.content]);

    const copyToClipboard = useCallback(() => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    }, []);

    const handleShare = useCallback(async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: news.title,
                    text: meta.description,
                    url: window.location.href,
                });
            } catch {
                copyToClipboard();
            }
        } else {
            copyToClipboard();
        }
    }, [news.title, meta.description, copyToClipboard]);

    const jsonLd = useMemo(
        () => ({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: news.title,
            description: meta.description,
            image:
                meta.image ||
                'https://mi-nu-02-situwangi.com/assets/image/hero-home.webp',
            datePublished: news.published_at,
            dateModified: news.published_at,
            author: { '@type': 'Person', name: news.author },
            publisher: {
                '@type': 'Organization',
                name: 'MI NU 02 Situwangi',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://mi-nu-02-situwangi.com/assets/image/logo.webp',
                },
            },
            mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': window.location.href,
            },
        }),
        [news, meta],
    );

    return (
        <MainLayout>
            <Head title={meta.title}>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={window.location.href} />
                <meta
                    property="og:image"
                    content={
                        meta.image ||
                        'https://mi-nu-02-situwangi.com/assets/image/hero-home.webp'
                    }
                />
                <meta property="og:site_name" content="MI NU 02 Situwangi" />
                <meta
                    property="article:published_time"
                    content={news.published_at}
                />
                <meta property="article:author" content={news.author} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta
                    name="twitter:image"
                    content={
                        meta.image ||
                        'https://mi-nu-02-situwangi.com/assets/image/hero-home.webp'
                    }
                />
                <link rel="canonical" href={window.location.href} />
                <meta name="robots" content="index, follow" />
                <meta name="author" content={news.author} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>

            <main className="bg-white">
                {/* Hero — cover image + breadcrumb + title + meta + actions */}
                <ArticleHero
                    news={news}
                    formatDate={formatDate}
                    onShare={handleShare}
                    onCopy={copyToClipboard}
                    copied={copied}
                />

                {/* Article body + sticky sidebar */}
                <section className="py-12 lg:py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-6xl">
                            <div className="grid gap-10 lg:grid-cols-12">
                                <ArticleBody
                                    contentWithIds={contentWithIds}
                                    description={meta.description}
                                    author={news.author}
                                    onShare={handleShare}
                                />
                                <ArticleRelated relatedNews={relatedNews} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    );
};

export default NewsShow;
