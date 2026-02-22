import React from "react";
import { Link } from '@inertiajs/react';

interface NewsCardProps {
    id: number;
    title: string;
    content: string;
    thumbnail: string | null;
    published_at: string;
    author: string;
    slug: string;
    status: 'Draft' | 'Published' | 'Archived';
}

const statusConfig: Record<string, { label: string; className: string }> = {
    Published: {
        label: 'Published',
        className: 'bg-none outline outline-1 outline-[#2ECC71] text-[#2ECC71]',
    },
    Draft: {
        label: 'Draft',
        className: 'bg-none outline outline-1 outline-amber-500 text-amber-500',
    },
    Archived: {
        label: 'Archived',
        className: 'bg-none outline outline-1 outline-gray-500 text-gray-500',
    },
};

const NewsCard: React.FC<NewsCardProps> = ({
    title,
    content,
    thumbnail,
    published_at,
    author,
    slug,
    status,
}) => {
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const badge = statusConfig[status] ?? statusConfig.Published;

    // Function to truncate title with 18 characters per line, max 2 lines, "..." only on last line
    const truncateTitle = (title: string): string => {
        const maxCharsPerLine = 18;
        const maxLines = 2;
        const maxTotalChars = maxCharsPerLine * maxLines;

        if (title.length <= maxCharsPerLine) {
            return title;
        }

        if (title.length <= maxTotalChars) {
            return title;
        }

        // Truncate and add "..." only at the end
        return title.substring(0, maxTotalChars - 3).trim() + '...';
    };

    // Function to truncate content with 18 characters per line, max 2 lines
    const truncateContent = (content: string): string => {
        // Remove HTML tags if any
        const plainText = content.replace(/<[^>]*>/g, '');
        const maxCharsPerLine = 20;
        const maxLines = 3;
        const maxTotalChars = maxCharsPerLine * maxLines;

        if (plainText.length <= maxCharsPerLine) {
            return plainText;
        }

        if (plainText.length <= maxTotalChars) {
            return plainText;
        }

        return plainText.substring(0, maxTotalChars - 3).trim() + '...';
    };

    return (
        <article className="group w-54 h-[440px] flex flex-col overflow-hidden rounded-2xl bg-none transition-all duration-300 hover:-translate-y-1">
            {/* Thumbnail */}
            <div className="relative h-52 overflow-hidden flex-shrink-0">
                <img
                    src={thumbnail ?? '/assets/image/hero-home.webp'}
                    alt={title}
                    className="h-full w-full rounded-lg object-cover transition-transform duration-500"
                    loading="lazy"
                />
            </div>

            {/* Content */}
            <div className="mb-3 grid grid-cols-1 sm:grid-cols-2 gap-1 sm:items-center">
                {/* Status Badge and Date */}
                <div className="mb-3 flex items-center justify-between flex-shrink-0">
                    <div
                        className={`w-fit h-fit rounded-lg px-2 py-1 text-xs font-medium ${badge.className}`}
                    >
                        {badge.label}
                    </div>

                    <time className="text-xs text-gray-500" dateTime={published_at}>
                        {formatDate(published_at)}
                    </time>
                </div>

                {/* Title - Fixed height with proper line breaking */}
                <h3 className="mb-2 text-base font-poppins font-semibold leading-tight text-gray-900 flex-shrink-0 line-clamp-2 h-12 overflow-hidden break-words">
                    {truncateTitle(title)}
                </h3>

                {/* Content - Fixed height with line clamp, max 2 lines */}
                <p className="mb-2 text-sm leading-relaxed text-gray-600 flex-1 line-clamp-2 h-10 overflow-hidden break-words">
                    {truncateContent(content)}
                </p>

                {/* Author - pushed to bottom */}
                <div className="flex items-center gap-2 border-t border-gray-100 pt-3 flex-shrink-0 mt-auto">
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-700 truncate">{author}</span>
                </div>
            </div>
        </article>
    );
};

export default NewsCard;
