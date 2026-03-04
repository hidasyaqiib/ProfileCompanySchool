/**
 * HeroNews — Magazine-Style Masthead
 *
 * Editorial header for the /berita news-list page. Inspired by modern news
 * magazine layouts: bold typographic headline, edition date, and inline search.
 * Keeps the school's emerald green palette.
 *
 * Props
 * ─────
 * @param search           Current search query value (controlled)
 * @param onSearchChange   Called on every keystroke in the search field
 * @param onSearchSubmit   Called when user presses Enter or clicks "Cari"
 * @param totalNews        Total number of published articles (optional)
 */
import { Search, Sparkles } from 'lucide-react';
import React from 'react';

interface HeroNewsProps {
    search: string;
    onSearchChange: (value: string) => void;
    onSearchSubmit: () => void;
    totalNews?: number;
}

const HeroNews: React.FC<HeroNewsProps> = ({
    search,
    onSearchChange,
    onSearchSubmit,
    totalNews,
}) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') onSearchSubmit();
    };

    const editionDate = new Date().toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <header className="relative overflow-hidden bg-white pt-24 pb-10 sm:pt-28 sm:pb-12">
            {/* ── Decorative background ─────────────────────────── */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div
                    className="absolute -top-40 -right-40 h-[300px] w-[300px] rounded-full opacity-[0.07] blur-3xl sm:h-[500px] sm:w-[500px]"
                    style={{ background: 'radial-gradient(circle, #2ECC71, #27ae60)' }}
                />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #27ae60 1px, transparent 1px)`,
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6">
                {/* ── Edition meta bar ──────────────────────────────── */}
                <div className="mb-6 flex items-center justify-between border-y border-gray-100 py-2.5 sm:mb-8">
                    <div className="flex items-center gap-2">
                        <Sparkles className="h-3.5 w-3.5 text-[#27ae60]" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#27ae60]">
                            Informasi Terbaru
                        </span>
                    </div>
                    <span className="hidden text-xs text-gray-400 sm:block">{editionDate}</span>
                    {totalNews !== undefined && totalNews > 0 && (
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-[#27ae60]">
                            {totalNews} Artikel
                        </span>
                    )}
                </div>

                {/* ── Magazine masthead ─────────────────────────────── */}
                <div className="mx-auto max-w-4xl">
                    {/* Giant editorial wordmark */}
                    <h1 className="mb-2 text-center text-5xl font-black leading-none tracking-tighter text-gray-900 sm:text-6xl md:text-8xl lg:text-[9rem]">
                        Berita
                    </h1>

                    {/* School sub-line */}
                    <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 sm:mb-10 sm:tracking-[0.3em]">
                        MI NU 02 Situwangi &mdash; Berita &amp; Informasi Sekolah
                    </p>

                    {/* ── Search bar ────────────────────────────────── */}
                    <div className="mx-auto max-w-2xl px-0 sm:px-4">
                        <div className="flex items-center rounded-2xl bg-white shadow-lg shadow-gray-100/80 ring-1 ring-gray-200 transition-shadow focus-within:ring-2 focus-within:ring-[#2ECC71]/50">
                            <Search className="ml-4 h-4 w-4 shrink-0 text-gray-400 sm:ml-5 sm:h-5 sm:w-5" />
                            <input
                                type="search"
                                value={search}
                                onChange={(e) => onSearchChange(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Cari berita…"
                                className="flex-1 bg-transparent py-3.5 pl-2.5 pr-1 text-sm text-gray-800 placeholder-gray-400 focus:outline-none sm:py-4 sm:pl-3 sm:pr-2"
                                aria-label="Cari berita"
                            />
                            <button
                                onClick={onSearchSubmit}
                                className="m-1.5 rounded-xl px-4 py-2 text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95 sm:px-5 sm:py-2.5"
                                style={{ background: 'linear-gradient(135deg, #2ECC71 0%, #27ae60 100%)' }}
                                aria-label="Mulai pencarian"
                            >
                                Cari
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Bottom divider ────────────────────────────────── */}
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 px-4">
                <div className="container mx-auto">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                </div>
            </div>
        </header>
    );
};

export default HeroNews;
