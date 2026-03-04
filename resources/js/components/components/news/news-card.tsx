import { Link } from '@inertiajs/react';
import { ArrowUpRight, User } from 'lucide-react';
import React from 'react';

export interface NewsCardProps {
    id: number;
    title: string;
    content: string;
    thumbnail: string | null;
    published_at: string;
    author: string;
    slug: string;
    status: 'Draft' | 'Published' | 'Archived';
    image_url?: string;
    featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({
    title,
    content,
    published_at,
    author,
    slug,
    status,
    image_url,
    featured = false,
}) => {
    const formatDate = (dateString: string): string => {
        const now = new Date();
        const date = new Date(dateString);
        const diffMs = now.getTime() - date.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffHours < 1) return 'Baru saja';
        if (diffHours < 24) return `${diffHours} jam lalu`;
        if (diffDays < 7) return `${diffDays} hari lalu`;

        return date.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    const stripHtml = (html: string): string => html.replace(/<[^>]*>/g, '');

    const isNew = (): boolean => {
        const diffMs = Date.now() - new Date(published_at).getTime();
        return diffMs < 1000 * 60 * 60 * 48; // 48 hours
    };

    if (featured) {
        return (
            <Link href={`/berita/${slug}`} className="group block">
                <article className="relative overflow-hidden rounded-3xl bg-gray-900">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                        <img
                            src={image_url || '/assets/image/hero-home.webp'}
                            alt={title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="eager"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    </div>

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                        {/* Badges */}
                        <div className="mb-4 flex items-center gap-2">
                            {isNew() && (
                                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                                    Baru
                                </span>
                            )}
                        </div>

                        <h2 className="mb-3 text-xl font-black leading-tight text-white md:text-2xl lg:text-3xl group-hover:opacity-90 transition-opacity line-clamp-3">
                            {title}
                        </h2>

                        <p className="mb-4 line-clamp-2 text-sm text-white/70 leading-relaxed">
                            {stripHtml(content)}
                        </p>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-xs text-white/60">
                                <span className="flex items-center gap-1">
                                    <User className="h-3.5 w-3.5" />
                                    {author}
                                </span>
                                <span>·</span>
                                <span>{formatDate(published_at)}</span>
                            </div>
                            <div
                                className="flex h-9 w-9 items-center justify-center rounded-full transition-transform group-hover:scale-110"
                                style={{ background: 'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)' }}
                            >
                                <ArrowUpRight className="h-4 w-4 text-white" />
                            </div>
                        </div>
                    </div>
                </article>
            </Link>
        );
    }

    return (
        <Link href={`/berita/${slug}`} className="group block h-full">
        <article className="flex h-full flex-col overflow-hidden rounded-2xl border-2 border-dashed border-gray-200 bg-white transition-all duration-300 hover:border-[#2ECC71]/60">
                {/* Image */}
                <div className="p-3 pb-0">
                    <div className="relative aspect-video w-full h-50 overflow-hidden rounded-xl bg-gray-100">
                        <img
                            src={image_url || '/assets/image/hero-home.webp'}
                            alt={title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                        {/* New badge */}
                        {isNew() && (
                            <div className="absolute top-2 left-2">
                                <span
                                    className="rounded-full px-2.5 py-1 text-xs font-bold text-white shadow"
                                    style={{ background: 'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)' }}
                                >
                                    Baru
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-5 py-2">
                    {/* Meta */}
                    <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
                        <span className="flex items-center gap-1 font-medium text-gray-600 truncate">
                            <User className="h-3 w-3 shrink-0" />
                            {author}
                        </span>
                        <span className="text-gray-200">·</span>
                        <time dateTime={published_at} className="shrink-0">{formatDate(published_at)}</time>
                    </div>

                    {/* Title */}
                    <h3 className="mb-2.5 line-clamp-1 text-base font-bold leading-snug text-gray-900">
                        {title}
                    </h3>

                    {/* Excerpt */}
                    <p className="mb-5 line-clamp-2 grow text-sm leading-relaxed text-gray-500">
                        {stripHtml(content)}
                    </p>

                    {/* CTA */}
                    <div className="mt-auto flex items-center justify-between border-t border-gray-100 py-2">
                        <span className="text-xs font-semibold text-[#27ae60]">
                            Baca selengkapnya
                        </span>
                        <div
                            className="flex h-7 w-7 items-center justify-center rounded-full"
                        >
                            <ArrowUpRight className="h-3.5 w-3.5 text-[#27ae60]" />
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default NewsCard;
