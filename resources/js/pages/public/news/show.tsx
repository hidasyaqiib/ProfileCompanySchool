import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Calendar, ChevronRight, Clock, Copy, Share2 } from 'lucide-react';
import React, { useCallback, useMemo, useState } from 'react';
import ArticleToc from '@/components/news/article-toc';
import NewsCard from '@/components/components/news/news-card';
import ReadingProgress from '@/components/news/reading-progress';
import type { NewsItem } from '@/components/news/news-list';
import MainLayout from '@/layouts/main-layout';

interface NewsShowPageProps {
    news: NewsItem & {
        content: string;
    };
    relatedNews: NewsItem[];
    meta: {
        title: string;
        description: string;
        keywords: string;
        image?: string;
    };
}

const NewsShow: React.FC<NewsShowPageProps> = ({
    news,
    relatedNews,
    meta,
}) => {
    const [copied, setCopied] = useState(false);

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const estimateReadTime = (content: string): number => {
        const text = content.replace(/<[^>]*>/g, '');
        const words = text.split(/\s+/).filter(Boolean).length;
        return Math.max(1, Math.ceil(words / 200));
    };

    /**
     * Inject `id` attributes into every h2/h3 in the raw HTML so
     * ArticleToc can observe them via IntersectionObserver.
     */
    const contentWithIds = useMemo(() => {
        return news.content.replace(
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

    const jsonLd = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": news.title,
        "description": meta.description,
        "image": meta.image || "https://mi-nu-02-situwangi.com/assets/image/hero-home.webp",
        "datePublished": news.published_at,
        "dateModified": news.published_at,
        "author": {
            "@type": "Person",
            "name": news.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "MI NU 02 Situwangi",
            "logo": {
                "@type": "ImageObject",
                "url": "https://mi-nu-02-situwangi.com/assets/image/logo.webp"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": window.location.href
        }
    }), [news, meta]);

    return (
        <MainLayout>
            {/* ── Reading progress bar ─────────── */}
            <ReadingProgress />

            {/* ── SEO meta ────────────────────── */}
            <Head title={meta.title}>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content={meta.image || 'https://mi-nu-02-situwangi.com/assets/image/hero-home.webp'} />
                <meta property="og:site_name" content="MI NU 02 Situwangi" />
                <meta property="article:published_time" content={news.published_at} />
                <meta property="article:author" content={news.author} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image || 'https://mi-nu-02-situwangi.com/assets/image/hero-home.webp'} />
                <link rel="canonical" href={window.location.href} />
                <meta name="robots" content="index, follow" />
                <meta name="author" content={news.author} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>

            <main className="bg-white">

                {/* ═══════════════════════════════════════════════════
                    HERO — full-bleed cover image + title overlay
                ═══════════════════════════════════════════════════ */}
                <div className="relative">
                    {/* Cover image */}
                    <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden bg-gray-900 lg:h-[70vh]">
                        <img
                            src={news.image_url || '/assets/image/hero-home.webp'}
                            alt={news.title}
                            className="h-full w-full object-cover opacity-70"
                            loading="eager"
                            fetchPriority="high"
                        />
                        {/* Gradient overlay — stronger at bottom for legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />

                        {/* ── Breadcrumb ───────────────────── */}
                        <div className="absolute top-24 left-0 right-0">
                            <div className="container mx-auto px-4">
                                <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/60">
                                    <Link href="/" className="transition-colors hover:text-white">Beranda</Link>
                                    <ChevronRight className="h-3 w-3" />
                                    <Link href="/berita" className="transition-colors hover:text-white">Berita</Link>
                                    <ChevronRight className="h-3 w-3" />
                                    <span className="line-clamp-1 max-w-[200px] text-white/80">{news.title}</span>
                                </nav>
                            </div>
                        </div>

                        {/* ── Title block ──────────────────── */}
                        <div className="absolute inset-x-0 bottom-0 pb-10 pt-24">
                            <div className="container mx-auto px-4">
                                <div className="mx-auto max-w-4xl">
                                    {/* Category pill */}
                                    <div className="mb-5">
                                        <span
                                            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white"
                                            style={{ background: 'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)' }}
                                        >
                                            <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                                            Berita Terbaru
                                        </span>
                                    </div>

                                    <h1 className="text-2xl font-black leading-tight text-white md:text-4xl lg:text-[2.75rem]">
                                        {news.title}
                                    </h1>

                                    {/* Meta inline under title */}
                                    <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/70">
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="flex h-7 w-7 items-center justify-center rounded-full text-white text-xs font-black"
                                                style={{ background: 'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)' }}
                                            >
                                                {news.author.charAt(0).toUpperCase()}
                                            </div>
                                            <span className="font-semibold text-white">{news.author}</span>
                                        </div>
                                        <span className="text-white/30">·</span>
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="h-3.5 w-3.5" />
                                            <time dateTime={news.published_at}>{formatDate(news.published_at)}</time>
                                        </div>
                                        <span className="text-white/30">·</span>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="h-3.5 w-3.5" />
                                            <span>{estimateReadTime(news.content)} menit baca</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Action bar ────────────────────── */}
                    <div className="border-b border-gray-100 bg-white/95 py-3 shadow-sm backdrop-blur-sm">
                        <div className="container mx-auto px-4">
                            <div className="mx-auto flex max-w-4xl items-center justify-between">
                                <Link
                                    href="/berita"
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 transition-colors hover:text-[#27ae60]"
                                >
                                    <ArrowLeft className="h-3.5 w-3.5" />
                                    Kembali ke Berita
                                </Link>

                                <div className="flex items-center gap-2">
                                    {/* Copy link */}
                                    <button
                                        onClick={copyToClipboard}
                                        title="Salin tautan"
                                        className="flex items-center gap-1.5 rounded-xl border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600 transition-all hover:border-[#2ECC71] hover:text-[#27ae60]"
                                    >
                                        <Copy className="h-3.5 w-3.5" />
                                        {copied ? 'Tersalin!' : 'Salin'}
                                    </button>
                                    {/* Share */}
                                    <button
                                        onClick={handleShare}
                                        className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold text-white transition-all hover:opacity-90 active:scale-95"
                                        style={{ background: 'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)' }}
                                    >
                                        <Share2 className="h-3.5 w-3.5" />
                                        Bagikan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ═══════════════════════════════════════════════════
                    ARTICLE BODY — two-column layout (article + sidebar)
                ═══════════════════════════════════════════════════ */}
                <section className="py-12 lg:py-16">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-6xl">
                            <div className="grid gap-10 lg:grid-cols-12">

                                {/* ── Main article ───────────────────── */}
                                <article className="lg:col-span-8">

                                    {/* Article intro / lead */}
                                    <p className="mb-8 text-lg font-medium leading-relaxed text-gray-600 lg:text-xl">
                                        {meta.description}
                                    </p>

                                    {/* Article content */}
                                    <div
                                        className="prose prose-base max-w-none
                                            prose-headings:scroll-mt-24
                                            prose-headings:font-black prose-headings:text-gray-900 prose-headings:tracking-tight
                                            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                                            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                                            prose-p:text-gray-600 prose-p:leading-[1.8]
                                            prose-a:font-semibold prose-a:text-[#27ae60] prose-a:no-underline hover:prose-a:underline
                                            prose-strong:text-gray-900 prose-strong:font-bold
                                            prose-ul:text-gray-600 prose-ol:text-gray-600
                                            prose-li:leading-relaxed
                                            prose-blockquote:border-l-4 prose-blockquote:border-[#2ECC71] prose-blockquote:bg-emerald-50/60 prose-blockquote:rounded-r-2xl prose-blockquote:py-2 prose-blockquote:not-italic
                                            prose-blockquote:text-gray-700 prose-blockquote:font-medium
                                            prose-img:rounded-2xl prose-img:shadow-lg prose-img:mx-auto
                                            prose-figure:my-8
                                            prose-figcaption:text-center prose-figcaption:text-xs prose-figcaption:text-gray-400
                                            prose-code:text-[#27ae60] prose-code:bg-emerald-50 prose-code:rounded prose-code:px-1 prose-code:py-0.5
                                            prose-hr:border-gray-100"
                                        dangerouslySetInnerHTML={{ __html: contentWithIds }}
                                    />

                                    {/* ── Author card ──────────────────── */}
                                    <footer className="mt-14 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
                                        <div className="p-6">
                                            <div className="flex items-center gap-4">
                                                {/* Avatar */}
                                                <div
                                                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-xl font-black text-white"
                                                    style={{ background: 'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)' }}
                                                >
                                                    {news.author.charAt(0).toUpperCase()}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-black text-gray-900">{news.author}</p>
                                                    <p className="text-xs text-gray-500">Penulis &mdash; MI NU 02 Situwangi</p>
                                                </div>
                                                <button
                                                    onClick={handleShare}
                                                    className="hidden shrink-0 items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95 sm:flex"
                                                    style={{ background: 'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)' }}
                                                >
                                                    <Share2 className="h-4 w-4" />
                                                    Bagikan
                                                </button>
                                            </div>
                                        </div>
                                    </footer>
                                </article>

                                {/* ── Sticky sidebar ─────────────────── */}
                                <aside className="lg:col-span-4">
                                    <div className="sticky top-24 space-y-6">

                                        {/* Table of contents */}
                                        <ArticleToc content={news.content} />

                                        {/* Share widget */}
                                        <div className="overflow-hidden rounded-2xl border border-gray-100">
                                            <div className="border-b border-gray-100 px-5 py-4">
                                                <h3 className="text-xs font-black uppercase tracking-wider text-gray-900">
                                                    Bagikan Artikel
                                                </h3>
                                            </div>
                                            <div className="flex flex-col gap-2 p-4">
                                                <button
                                                    onClick={handleShare}
                                                    className="flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold text-white transition-all hover:opacity-90"
                                                    style={{ background: 'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)' }}
                                                >
                                                    <Share2 className="h-3.5 w-3.5" />
                                                    Bagikan
                                                </button>
                                                <button
                                                    onClick={copyToClipboard}
                                                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-2.5 text-xs font-semibold text-gray-600 transition-all hover:border-[#2ECC71] hover:text-[#27ae60]"
                                                >
                                                    <Copy className="h-3.5 w-3.5" />
                                                    {copied ? '✓ Tautan tersalin!' : 'Salin Tautan'}
                                                </button>
                                            </div>
                                        </div>

                                        {/* Related articles (sidebar) */}
                                        {relatedNews.length > 0 && (
                                            <div className="overflow-hidden rounded-2xl border border-gray-100">
                                                <div className="border-b border-gray-100 px-5 py-4">
                                                    <h3 className="text-xs font-black uppercase tracking-wider text-gray-900">
                                                        Berita Terkait
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

                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    RELATED ARTICLES GRID — full-width at page bottom
                ═══════════════════════════════════════════════════ */}
                {relatedNews.length > 0 && (
                    <section className="border-t border-gray-100 bg-gray-50/50 py-14">
                        <div className="container mx-auto px-4">
                            <div className="mx-auto max-w-6xl">
                                {/* Section header */}
                                <div className="mb-8 flex items-end justify-between">
                                    <div>
                                        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#27ae60]">
                                            Baca Juga
                                        </p>
                                        <h2 className="text-2xl font-black text-gray-900">
                                            Berita Terkait Lainnya
                                        </h2>
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
                )}

            </main>
        </MainLayout>
    );
};

export default NewsShow;
