import { Link } from '@inertiajs/react';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

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
}

const statusDotColor: Record<string, string> = {
    Published: 'bg-emerald-500',
    Draft: 'bg-amber-500',
    Archived: 'bg-gray-400',
};

const statusLabelColor: Record<string, string> = {
    Published: 'text-emerald-600',
    Draft: 'text-amber-600',
    Archived: 'text-gray-500',
};

const NewsCard: React.FC<NewsCardProps> = ({
    title,
    content,
    thumbnail,
    published_at,
    author,
    slug,
    status,
    image_url,
}) => {
    const formatDate = (dateString: string): string => {
        const now = new Date();
        const date = new Date(dateString);
        const diffMs = now.getTime() - date.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffHours < 1) {
            return 'Baru saja';
        }
        if (diffHours < 24) {
            return `${diffHours} jam lalu`;
        }
        if (diffDays < 7) {
            return `${diffDays} hari lalu`;
        }

        return date.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const stripHtml = (html: string): string => html.replace(/<[^>]*>/g, '');

    const estimateReadTime = (text: string): number => {
        const words = stripHtml(text).split(/\s+/).filter(Boolean).length;
        return Math.max(1, Math.ceil(words / 200));
    };

    const dotColor = statusDotColor[status] ?? statusDotColor.Published;
    const labelColor = statusLabelColor[status] ?? statusLabelColor.Published;

    return (
        <Link
            href={`/berita/${slug}`}
            className="group block h-full rounded-xl bg-white p-4 shadow"
        >
            <article className="flex h-full flex-col">
                {/* Thumbnail */}
                <div className="relative mb-4 aspect-4/3 overflow-hidden rounded-xl">
                    <img
                        src={image_url || '/assets/image/hero-home.webp'}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                </div>

                {/* Source & Date */}
                <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
                    <span
                        className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full ${dotColor}`}
                    />
                    {/* <span className={`font-semibold ${labelColor}`}>{status}</span> */}
                    <span className="truncate font-semibold text-gray-800">
                        {author}
                    </span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={published_at}>
                        {formatDate(published_at)}
                    </time>
                </div>

                {/* Title */}
                <h3 className="mb-2 line-clamp-2 text-base leading-snug font-bold break-all text-gray-900 transition-colors group-hover:text-emerald-700">
                    {title}
                </h3>

                {/* Excerpt */}
                <p className="mb-4 line-clamp-3 grow text-sm leading-relaxed break-all text-gray-500">
                    {stripHtml(content)}
                </p>

                {/* Footer: category + read time */}
                <div className="mt-auto flex items-center justify-end text-xs">
                    <span className="flex items-center gap-1 font-semibold text-emerald-700 transition-all group-hover:underline">
                        Baca selengkapnya
                        <FiArrowRight className="h-4 w-4 text-emerald-700 transition-transform group-hover:translate-x-1" />
                    </span>
                </div>
            </article>
        </Link>
    );
};

export default NewsCard;
