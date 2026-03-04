import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface ModalCardProps {
    title: string;
    /** Primary image (always required) */
    image: string;
    /** Multiple images — enables photo pagination (e.g. all-facility) */
    images?: string[];
    description?: string;
    /** Optional extra meta shown below description */
    date?: string;
    onClose: () => void;
}

const ModalCard: React.FC<ModalCardProps> = ({
    title,
    image,
    images,
    description,
    date,
    onClose,
}) => {
    // Build the photo list: prefer `images`, fall back to single `image`
    const photos: string[] = images && images.length > 0 ? images : [image];
    const hasMultiplePhotos = photos.length > 1;

    const [activeIndex, setActiveIndex] = useState<number>(0);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent): void => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowLeft' && hasMultiplePhotos) {
                setActiveIndex((prev) => Math.max(0, prev - 1));
            } else if (e.key === 'ArrowRight' && hasMultiplePhotos) {
                setActiveIndex((prev) => Math.min(photos.length - 1, prev + 1));
            }
        };

        document.addEventListener('keydown', handleKey);
        // Prevent body scroll while modal is open
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose, hasMultiplePhotos, photos.length]);

    // Reset active photo when the modal's photo list changes
    useEffect(() => {
        setActiveIndex(0);
    }, [image, images]);

    const goPrev = useCallback((): void => {
        setActiveIndex((prev) => Math.max(0, prev - 1));
    }, []);

    const goNext = useCallback((): void => {
        setActiveIndex((prev) => Math.min(photos.length - 1, prev + 1));
    }, [photos.length]);

    const modal = (
        /* Backdrop */
        <div
            className="fixed inset-0 z-200000 flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            {/* ── Modal card ── */}
            <div className="relative flex max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl">

                {/* ── Close button ── */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Tutup modal"
                    type="button"
                >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* ══════════════════════
                    LEFT — Photo viewer
                ══════════════════════ */}
                <div className="flex w-[55%] flex-col bg-black">
                    {/* Image wrapper — padded so photo doesn't bleed to edges */}
                    <div className="flex flex-1 items-center justify-center p-8 pb-4">
                        <div className="relative w-full overflow-hidden rounded-xl bg-zinc-900 shadow-lg">
                            <img
                                key={activeIndex}
                                src={photos[activeIndex]}
                                alt={`${title} — foto ${activeIndex + 1}`}
                                className="aspect-4/3 w-full object-cover"
                            />

                            {/* Arrow nav */}
                            {hasMultiplePhotos && (
                                <>
                                    <button
                                        onClick={goPrev}
                                        disabled={activeIndex === 0}
                                        className={`absolute top-1/2 left-3 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80 focus:outline-none ${activeIndex === 0 ? 'cursor-not-allowed opacity-25' : 'cursor-pointer'}`}
                                        aria-label="Foto sebelumnya"
                                        type="button"
                                    >
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={goNext}
                                        disabled={activeIndex === photos.length - 1}
                                        className={`absolute top-1/2 right-3 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80 focus:outline-none ${activeIndex === photos.length - 1 ? 'cursor-not-allowed opacity-25' : 'cursor-pointer'}`}
                                        aria-label="Foto berikutnya"
                                        type="button"
                                    >
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>

                                    {/* Counter */}
                                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                                        {activeIndex + 1} / {photos.length}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Thumbnail strip */}
                    {hasMultiplePhotos && (
                        <div
                            className="flex gap-2 overflow-x-auto px-8 pb-6"
                            style={{ scrollbarWidth: 'none' }}
                        >
                            {photos.map((src, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`h-12 w-12 flex-none overflow-hidden rounded-lg border-2 transition-all focus:outline-none ${
                                        i === activeIndex
                                            ? 'border-[#2ECC71] opacity-100'
                                            : 'border-transparent opacity-40 hover:opacity-70'
                                    }`}
                                    aria-label={`Lihat foto ${i + 1}`}
                                    aria-pressed={i === activeIndex}
                                    type="button"
                                >
                                    <img src={src} alt={`Thumbnail ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* ══════════════════════
                    RIGHT — Text content
                ══════════════════════ */}
                <div className="flex w-[45%] flex-col overflow-y-auto bg-zinc-950 px-8 py-8">
                    {/* Top: title + divider + description */}
                    <div className="flex flex-1 flex-col gap-5">
                        <h2 className="text-xl font-bold leading-snug tracking-tight text-white">
                            {title}
                        </h2>

                        <div className="h-px w-full bg-white/10" />

                        {description && (
                            <p className="text-sm leading-relaxed text-zinc-400">
                                {description}
                            </p>
                        )}

                        {/* Meta chips */}
                        <div className="flex flex-col gap-2">
                            {date && (
                                <div className="flex items-center gap-2 text-xs text-zinc-500">
                                    <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                    </svg>
                                    {new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </div>
                            )}

                            {hasMultiplePhotos && (
                                <div className="flex items-center gap-2 text-xs text-[#2ECC71]">
                                    <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    {photos.length} foto tersedia
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

    // Render into document.body via portal so it overlays everything
    return createPortal(modal, document.body);
};

export default ModalCard;
