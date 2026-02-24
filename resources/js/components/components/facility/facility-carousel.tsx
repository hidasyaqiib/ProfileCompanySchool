import React, { useState, useCallback, useRef, useEffect } from 'react';
import FacilityCard from './facility-card';

export interface FacilityItem {
    id: number;
    title: string;
    image: string;
    description: string;
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
    ariaLabel = 'Facility carousel'
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const maxIndex = Math.max(0, facilities.length - itemsPerPage);
    const totalPages = Math.ceil(facilities.length / itemsPerPage);
    const hasMultipleSlides = facilities.length > itemsPerPage;

    const animateToIndex = useCallback((targetIndex: number): void => {
        if (!containerRef.current || isAnimating) return;

        const container = containerRef.current;
        const cardWidth = container.scrollWidth / facilities.length;
        const targetScrollLeft = targetIndex * cardWidth;

        setIsAnimating(true);

        const startScrollLeft = container.scrollLeft;
        const scrollDistance = targetScrollLeft - startScrollLeft;
        const startTime = performance.now();

        const animateScroll = (currentTime: number): void => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);

            container.scrollLeft = startScrollLeft + (scrollDistance * easeOutCubic);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            } else {
                setIsAnimating(false);
            }
        };

        requestAnimationFrame(animateScroll);
    }, [facilities.length, isAnimating]);

    const goToPrevious = useCallback((): void => {
        const newIndex = Math.max(0, currentIndex - 1);
        setCurrentIndex(newIndex);
        animateToIndex(newIndex);
    }, [currentIndex, animateToIndex]);

    const goToNext = useCallback((): void => {
        const newIndex = Math.min(maxIndex, currentIndex + 1);
        setCurrentIndex(newIndex);
        animateToIndex(newIndex);
    }, [currentIndex, maxIndex, animateToIndex]);

    const goToPage = useCallback((pageIndex: number): void => {
        const newIndex = pageIndex * itemsPerPage;
        const clampedIndex = Math.min(newIndex, maxIndex);
        setCurrentIndex(clampedIndex);
        animateToIndex(clampedIndex);
    }, [itemsPerPage, maxIndex, animateToIndex]);

    const getCurrentPage = useCallback((): number => {
        return Math.floor(currentIndex / itemsPerPage);
    }, [currentIndex, itemsPerPage]);

    const handleKeyDown = useCallback((event: React.KeyboardEvent, action: () => void): void => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            action();
        }
    }, []);

    // Keyboard navigation for entire carousel
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
            <div className="text-center py-8" role="alert">
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
                        className={`
                            absolute bottom-[-1rem] left-4 z-20 w-12 h-12 rounded-xl shadow-lg
                            transition-all duration-300 flex items-center justify-center
                            ${currentIndex === 0 || isAnimating
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-[#2ECC71] hover:bg-[#27ae60] hover:shadow-xl cursor-pointer'
                            }
                        `}
                        aria-label={`Previous slide. Currently showing slide ${currentIndex + 1}`}
                        type="button"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={goToNext}
                        onKeyDown={(e) => handleKeyDown(e, goToNext)}
                        disabled={currentIndex >= maxIndex || isAnimating}
                        className={`
                            absolute bottom-[-1rem] right-4 z-20 w-12 h-12 rounded-xl shadow-lg
                            transition-all duration-300 flex items-center justify-center
                            ${currentIndex >= maxIndex || isAnimating
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-[#2ECC71] hover:bg-[#27ae60] hover:shadow-xl cursor-pointer'
                            }
                        `}
                        aria-label={`Next slide. Currently showing slide ${currentIndex + 1}`}
                        type="button"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}

            {/* Pagination Dots */}
            {showPagination && hasMultipleSlides && (
                <div
                    className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 flex items-center gap-2 z-20"
                    role="tablist"
                    aria-label={`Page navigation. ${totalPages} pages total`}
                >
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={`page-${index}`}
                            onClick={() => goToPage(index)}
                            onKeyDown={(e) => handleKeyDown(e, () => goToPage(index))}
                            disabled={isAnimating}
                            className={`
                                w-3 h-3 rounded-full transition-all duration-300
                                ${getCurrentPage() === index
                                    ? 'bg-[#27ae60] scale-110'
                                    : 'bg-gray-400 hover:bg-gray-500'
                                }
                                ${isAnimating ? 'cursor-not-allowed' : 'cursor-pointer'}
                            `}
                            aria-label={`Go to page ${index + 1}`}
                            aria-current={getCurrentPage() === index ? 'page' : undefined}
                            role="tab"
                            type="button"
                        />
                    ))}
                </div>
            )}

            {/* Facilities Container */}
            <div className="overflow-hidden py-4 px-8">
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
                            className="flex-none"
                            style={{ width: `calc((100% - ${(itemsPerPage - 1) * 24}px) / ${itemsPerPage})` }}
                        >
                            <FacilityCard
                                title={facility.title}
                                image={facility.image}
                                description={facility.description}
                                className={cardClassName}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Screen Reader Information */}
            <div className="sr-only" aria-live="polite">
                Showing slide {currentIndex + 1} to {Math.min(currentIndex + itemsPerPage, facilities.length)} of {facilities.length} facilities.
                {hasMultipleSlides && `Page ${getCurrentPage() + 1} of ${totalPages}.`}
            </div>
        </div>
    );
};

export default FacilityCarousel;
