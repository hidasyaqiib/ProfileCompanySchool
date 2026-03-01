import { Head, Link } from '@inertiajs/react';
import React, { useMemo } from 'react';
import { FiArrowLeft, FiCalendar, FiClock, FiShare2, FiUser } from 'react-icons/fi';
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

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: news.title,
                    text: meta.description,
                    url: window.location.href,
                });
            } catch (err) {
                // Fallback to clipboard
                copyToClipboard();
            }
        } else {
            copyToClipboard();
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
        // You could add a toast notification here
    };

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
            <Head title={meta.title}>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                
                {/* Open Graph */}
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content={meta.image || "https://mi-nu-02-situwangi.com/assets/image/hero-home.webp"} />
                <meta property="og:site_name" content="MI NU 02 Situwangi" />
                <meta property="article:published_time" content={news.published_at} />
                <meta property="article:author" content={news.author} />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image || "https://mi-nu-02-situwangi.com/assets/image/hero-home.webp"} />
                
                {/* Additional SEO */}
                <link rel="canonical" href={window.location.href} />
                <meta name="robots" content="index, follow" />
                <meta name="author" content={news.author} />
                
                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>

            <main className="bg-white">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 py-16 lg:py-24">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }}
                        />
                    </div>

                    <div className="relative container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">
                            {/* Back Button */}
                            <div className="mb-8">
                                <Link
                                    href="/berita"
                                    className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
                                >
                                    <FiArrowLeft className="h-4 w-4" />
                                    Kembali ke Berita
                                </Link>
                            </div>

                            {/* Article Header */}
                            <header className="text-center">
                                {/* Category Badge */}
                                <div className="mb-6">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-300">
                                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                        Berita Terbaru
                                    </span>
                                </div>

                                {/* Title */}
                                <h1 className="mb-6 text-3xl font-bold leading-tight text-white lg:text-5xl">
                                    {news.title}
                                </h1>

                                {/* Meta Info */}
                                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <FiUser className="h-4 w-4" />
                                        <span className="font-medium">{news.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FiCalendar className="h-4 w-4" />
                                        <time dateTime={news.published_at}>
                                            {formatDate(news.published_at)}
                                        </time>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FiClock className="h-4 w-4" />
                                        <span>{estimateReadTime(news.content)} menit baca</span>
                                    </div>
                                </div>

                                {/* Share Button */}
                                <div className="mt-8">
                                    <button
                                        onClick={handleShare}
                                        className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-all hover:bg-emerald-700"
                                    >
                                        <FiShare2 className="h-4 w-4" />
                                        Bagikan Artikel
                                    </button>
                                </div>
                            </header>
                        </div>
                    </div>

                    {/* Wave Separator */}
                    <div className="absolute right-0 bottom-0 left-0">
                        <svg
                            viewBox="0 0 1440 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-auto w-full"
                        >
                            <path
                                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </section>

                {/* Article Content */}
                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">
                            <div className="grid gap-12 lg:grid-cols-12">
                                {/* Main Content */}
                                <article className="lg:col-span-8">
                                    {/* Featured Image */}
                                    {news.image_url && (
                                        <div className="mb-8 overflow-hidden rounded-2xl">
                                            <img
                                                src={news.image_url}
                                                alt={news.title}
                                                className="h-auto w-full object-cover"
                                                loading="eager"
                                            />
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div 
                                        className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-img:rounded-xl"
                                        dangerouslySetInnerHTML={{ __html: news.content }}
                                    />

                                    {/* Article Footer */}
                                    <footer className="mt-12 border-t border-gray-200 pt-8">
                                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                                                    <FiUser className="h-6 w-6 text-emerald-600" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">{news.author}</p>
                                                    <p className="text-sm text-gray-600">Penulis</p>
                                                </div>
                                            </div>
                                            
                                            <button
                                                onClick={handleShare}
                                                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                                            >
                                                <FiShare2 className="h-4 w-4" />
                                                Bagikan
                                            </button>
                                        </div>
                                    </footer>
                                </article>

                                {/* Sidebar */}
                                <aside className="lg:col-span-4">
                                    <div className="sticky top-8 space-y-8">
                                        {/* Related Articles */}
                                        {relatedNews.length > 0 && (
                                            <div className="rounded-2xl bg-gray-50 p-6">
                                                <h3 className="mb-6 text-lg font-bold text-gray-900">
                                                    Berita Terkait
                                                </h3>
                                                <div className="space-y-4">
                                                    {relatedNews.map((article) => (
                                                        <article key={article.id}>
                                                            <Link
                                                                href={`/berita/${article.slug}`}
                                                                className="group block"
                                                            >
                                                                <div className="flex gap-4">
                                                                    <div className="w-20 flex-shrink-0">
                                                                        <img
                                                                            src={article.image_url || '/assets/image/hero-home.webp'}
                                                                            alt={article.title}
                                                                            className="aspect-square w-full rounded-lg object-cover"
                                                                        />
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <h4 className="mb-2 line-clamp-2 text-sm font-semibold text-gray-900 group-hover:text-emerald-600">
                                                                            {article.title}
                                                                        </h4>
                                                                        <p className="text-xs text-gray-500">
                                                                            {formatDate(article.published_at)}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </article>
                                                    ))}
                                                </div>
                                                
                                                <div className="mt-6">
                                                    <Link
                                                        href="/berita"
                                                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                                                    >
                                                        Lihat Semua Berita
                                                        <FiArrowLeft className="h-4 w-4 rotate-180" />
                                                    </Link>
                                                </div>
                                            </div>
                                        )}

                                        {/* Quick Actions */}
                                        <div className="rounded-2xl bg-emerald-50 p-6">
                                            <h3 className="mb-4 text-lg font-bold text-gray-900">
                                                Ingin Tahu Lebih Banyak?
                                            </h3>
                                            <p className="mb-6 text-sm text-gray-600">
                                                Jelajahi informasi lengkap tentang MI NU 02 Situwangi
                                            </p>
                                            <div className="space-y-3">
                                                <Link
                                                    href="/profil"
                                                    className="block w-full rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
                                                >
                                                    Profil Sekolah
                                                </Link>
                                                <Link
                                                    href="/fasilitas"
                                                    className="block w-full rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
                                                >
                                                    Fasilitas
                                                </Link>
                                                <Link
                                                    href="/galeri"
                                                    className="block w-full rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
                                                >
                                                    Galeri
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    );
};

export default NewsShow;