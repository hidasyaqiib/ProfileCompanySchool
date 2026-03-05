import React, { useState, useCallback, useRef, useEffect } from 'react';
import FacilityCard from './facility-card';

export interface FacilityItem {
    id: number;
    title: string;
    image: string;
    /** Multiple images — enables photo pagination in the modal (e.g. all-facility) */
    images?: string[];
    description: string;
    /** Optional date shown inside the modal */
    date?: string;
}

interface FacilityCarouselProps {
    facilities: FacilityItem[];
    itemsPerPage?: number;
    showNavigation?: boolean;
    showPagination?: boolean;
    className?: string;
    cardClassName?: string;
    ariaLabel?: string;
}

const ANIMATION_DURATION = 300;

const FacilityCarousel: React.FC<FacilityCarouselProps> = ({
    facilities,
    itemsPerPage = 4,
    showNavigation = true,
    showPagination = true,
    className = '',
    cardClassName = '',
    ariaLabel = 'Facility carousel',
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const isAnimatingRef = useRef<boolean>(false);

    // Responsive items per page: 1 on mobile, 2 on tablet, prop value on desktop
    const [effectiveItemsPerPage, setEffectiveItemsPerPage] = useState<number>(itemsPerPage);

    useEffect(() => {
        const updateItemsPerPage = (): void => {
            if (window.innerWidth < 640) {
                setEffectiveItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setEffectiveItemsPerPage(2);
            } else {
                setEffectiveItemsPerPage(itemsPerPage);
            }
        };
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, [itemsPerPage]);

    // Stable refs so callbacks never go stale without re-registering listeners
    const facilitiesLengthRef = useRef<number>(facilities.length);
    const maxIndexRef = useRef<number>(0);
    const itemsPerPageRef = useRef<number>(effectiveItemsPerPage);

    const maxIndex = Math.max(0, facilities.length - effectiveItemsPerPage);
    const totalPages = Math.ceil(facilities.length / effectiveItemsPerPage);
    const hasMultipleSlides = facilities.length > effectiveItemsPerPage;

    // Keep refs in sync
    useEffect(() => {
        facilitiesLengthRef.current = facilities.length;
        maxIndexRef.current = maxIndex;
        itemsPerPageRef.current = effectiveItemsPerPage;
    });

    // Reset to page 0 when facilities data changes
    useEffect(() => {
        setCurrentIndex(0);
        isAnimatingRef.current = false;
        setIsAnimating(false);
        if (containerRef.current) {
            containerRef.current.scrollLeft = 0;
        }
    }, [facilities.length]);

    const getCurrentPage = useCallback((): number => {
        return Math.floor(currentIndex / effectiveItemsPerPage);
    }, [currentIndex, effectiveItemsPerPage]);

    const animateToIndex = useCallback((targetIndex: number): void => {
        if (!containerRef.current || isAnimatingRef.current) return;

        const container = containerRef.current;
        const totalLength = facilitiesLengthRef.current;
        if (totalLength === 0) return;

        const cardWidth = container.scrollWidth / totalLength;
        const targetScrollLeft = targetIndex * cardWidth;

        isAnimatingRef.current = true;
        setIsAnimating(true);

        const startScrollLeft = container.scrollLeft;
        const scrollDistance = targetScrollLeft - startScrollLeft;
        const startTime = performance.now();

        const animateScroll = (currentTime: number): void => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);

            container.scrollLeft = startScrollLeft + scrollDistance * easeOutCubic;

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            } else {
                isAnimatingRef.current = false;
                setIsAnimating(false);
            }
        };

        requestAnimationFrame(animateScroll);
    }, []); // No dependencies — reads everything from refs

    // Register scroll listener once, forever — reads from refs only
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = (): void => {
            if (isAnimatingRef.current) return;
            const totalLength = facilitiesLengthRef.current;
            if (totalLength === 0) return;
            const cardWidth = container.scrollWidth / totalLength;
            if (cardWidth === 0) return;
            const nearestIndex = Math.round(container.scrollLeft / cardWidth);
            const clampedIndex = Math.max(0, Math.min(nearestIndex, maxIndexRef.current));
            setCurrentIndex(clampedIndex);
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, []); // Empty deps — listener never re-registers

    const goToPrevious = useCallback((): void => {
        setCurrentIndex((prev) => {
            const newIndex = Math.max(0, prev - itemsPerPageRef.current);
            animateToIndex(newIndex);
            return newIndex;
        });
    }, [animateToIndex]);

    const goToNext = useCallback((): void => {
        setCurrentIndex((prev) => {
            const newIndex = Math.min(maxIndexRef.current, prev + itemsPerPageRef.current);
            animateToIndex(newIndex);
            return newIndex;
        });
    }, [animateToIndex]);

    const goToPage = useCallback((pageIndex: number): void => {
        const newIndex = Math.min(pageIndex * itemsPerPageRef.current, maxIndexRef.current);
        setCurrentIndex(newIndex);
        animateToIndex(newIndex);
    }, [animateToIndex]);

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent, action: () => void): void => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                action();
            }
        },
        [],
    );

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent): void => {
            if (!hasMultipleSlides) return;
            switch (event.key) {
                case 'ArrowLeft':
                    event.preventDefault();
                    goToPrevious();
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    goToNext();
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [hasMultipleSlides, goToPrevious, goToNext]);

    if (facilities.length === 0) {
        return (
            <div className="py-8 text-center" role="alert">
                <p className="text-gray-500">No facilities available to display.</p>
            </div>
        );
    }

    return (
        <div className={`relative ${hasMultipleSlides ? 'pb-16' : ''} ${className}`}>
            {/* Navigation Buttons */}
            {showNavigation && hasMultipleSlides && (
                <>
                    <button
                        onClick={goToPrevious}
                        onKeyDown={(e) => handleKeyDown(e, goToPrevious)}
                        disabled={currentIndex === 0 || isAnimating}
                        className={`absolute bottom-[-1rem] left-4 z-20 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2ECC71] shadow-lg transition-all duration-300 ${
                            currentIndex === 0 || isAnimating
                                ? 'cursor-not-allowed opacity-40'
                                : 'cursor-pointer hover:bg-[#27ae60] hover:shadow-xl'
                        }`}
                        aria-label={`Previous slide. Currently showing slide ${getCurrentPage() + 1}`}
                        type="button"
                    >
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={goToNext}
                        onKeyDown={(e) => handleKeyDown(e, goToNext)}
                        disabled={currentIndex >= maxIndex || isAnimating}
                        className={`absolute right-4 bottom-[-1rem] z-20 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2ECC71] shadow-lg transition-all duration-300 ${
                            currentIndex >= maxIndex || isAnimating
                                ? 'cursor-not-allowed opacity-40'
                                : 'cursor-pointer hover:bg-[#27ae60] hover:shadow-xl'
                        }`}
                        aria-label={`Next slide. Currently showing slide ${getCurrentPage() + 1}`}
                        type="button"
                    >
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}

            {/* Pagination Dots */}
            {showPagination && hasMultipleSlides && (
                <div
                    className="absolute bottom-[-1rem] left-1/2 z-20 flex -translate-x-1/2 items-center gap-2"
                    role="tablist"
                    aria-label={`Page navigation. ${totalPages} pages total`}
                >
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={`page-${index}`}
                            onClick={() => goToPage(index)}
                            onKeyDown={(e) => handleKeyDown(e, () => goToPage(index))}
                            disabled={isAnimating}
                            className={`h-3 w-3 rounded-full transition-all duration-300 ${
                                getCurrentPage() === index
                                    ? 'scale-110 bg-[#27ae60]'
                                    : 'bg-gray-400 hover:bg-gray-500'
                            } ${isAnimating ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                            aria-label={`Go to page ${index + 1}`}
                            aria-current={getCurrentPage() === index ? 'page' : undefined}
                            role="tab"
                            type="button"
                        />
                    ))}
                </div>
            )}

            {/* Facilities Container */}
            <div className="overflow-hidden px-8 py-4">
                <div
                    ref={containerRef}
                    className="flex gap-6"
                    style={{
                        overflowX: 'hidden',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                    role="region"
                    aria-label={ariaLabel}
                    aria-live="polite"
                >
                    {facilities.map((facility) => (
                        <div
                            key={facility.id}
                            className="flex-none self-stretch"
                            style={{
                                width: `calc((100% - ${(effectiveItemsPerPage - 1) * 24}px) / ${effectiveItemsPerPage})`,
                            }}
                        >
                            <FacilityCard
                                title={facility.title}
                                image={facility.image}
                                images={facility.images}
                                description={facility.description}
                                date={facility.date}
                                className={cardClassName}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="sr-only" aria-live="polite">
                Showing slide {currentIndex + 1} to{' '}
                {Math.min(currentIndex + effectiveItemsPerPage, facilities.length)} of{' '}
                {facilities.length} facilities.
                {hasMultipleSlides && `Page ${getCurrentPage() + 1} of ${totalPages}.`}
            </div>
        </div>
    );
};

export default FacilityCarousel;
