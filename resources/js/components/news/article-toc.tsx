/**
 * ArticleToc — Table of Contents
 *
 * Parses the raw HTML content of an article, extracts all h2 and h3
 * headings, and renders a clickable table-of-contents list. The active
 * heading is highlighted using IntersectionObserver for zero-reflow
 * scroll tracking.
 *
 * @example
 *   <ArticleToc content={news.content} />
 */
import React, { useEffect, useMemo, useRef, useState } from 'react';

interface TocHeading {
    id: string;
    text: string;
    level: 2 | 3;
}

interface ArticleTocProps {
    /** Raw HTML content of the article */
    content: string;
}

/** Strip HTML tags and return plain text */
const stripTags = (html: string): string => html.replace(/<[^>]*>/g, '');

/** Slugify a heading text into a URL-safe id */
const slugify = (text: string): string =>
    text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');

const ArticleToc: React.FC<ArticleTocProps> = ({ content }) => {
    const [activeId, setActiveId] = useState<string>('');
    const observerRef = useRef<IntersectionObserver | null>(null);

    /** Extract headings from HTML string */
    const headings = useMemo<TocHeading[]>(() => {
        const matches = [...content.matchAll(/<h([23])[^>]*>(.*?)<\/h[23]>/gi)];
        return matches.map((m) => ({
            level: parseInt(m[1], 10) as 2 | 3,
            text: stripTags(m[2]),
            id: slugify(stripTags(m[2])),
        }));
    }, [content]);

    /** Observe rendered headings for scroll-based active state */
    useEffect(() => {
        if (headings.length === 0) return;

        observerRef.current?.disconnect();

        observerRef.current = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((e) => e.isIntersecting);
                if (visible) setActiveId(visible.target.id);
            },
            { rootMargin: '-20% 0% -60% 0%' },
        );

        headings.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observerRef.current?.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, [headings]);

    if (headings.length === 0) return null;

    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveId(id);
        }
    };

    return (
        <nav aria-label="Daftar Isi" className="overflow-hidden rounded-2xl border border-gray-100">
            {/* Header */}
            <div className="border-b border-gray-100 px-5 py-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-gray-900">
                    Daftar Isi
                </h3>
            </div>

            {/* TOC list */}
            <ol className="space-y-0.5 p-3">
                {headings.map((h) => (
                    <li key={h.id}>
                        <button
                            onClick={() => handleClick(h.id)}
                            className={[
                                'w-full rounded-xl px-3 py-2 text-left text-xs font-medium leading-snug transition-colors',
                                h.level === 3 ? 'pl-6' : '',
                                activeId === h.id
                                    ? 'bg-emerald-50 font-semibold text-[#27ae60]'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900',
                            ].join(' ')}
                        >
                            {h.level === 3 && (
                                <span className="mr-1.5 text-gray-300">└</span>
                            )}
                            {h.text}
                        </button>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default ArticleToc;
