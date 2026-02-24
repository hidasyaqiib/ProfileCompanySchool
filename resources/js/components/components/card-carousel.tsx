import React, { useState, useEffect, useRef, useCallback } from 'react';

interface CardCarouselProps {
    children: React.ReactNode;
    itemsPerPage?: number;
    showNavigation?: boolean;
    showPageIndicator?: boolean;
    enableSliding?: boolean;
    className?: string;
}

const ANIMATION_DURATION = 300;
const SCROLL_RESET_DELAY = 150;

const CardCarousel: React.FC<CardCarouselProps> = ({
    children,
    itemsPerPage = 4,
    showNavigation = true,
    showPageIndicator = true,
    enableSliding = true,
    className = '',
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const lastScrollLeft = useRef<number>(0);

    const [scrollDirection, setScrollDirection] = useState<'none' | 'left' | 'right'>('none');
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(0);

    const childrenArray = React.Children.toArray(children);
    const totalPages = Math.ceil(childrenArray.length / itemsPerPage);
    const needsCarousel = enableSliding && childrenArray.length > itemsPerPage;

    const resetScrollDirection = useCallback((): void => {
        setScrollDirection('none');
        setIsScrolling(false);
    }, []);

    const animateScrollTo = useCallback((targetScrollLeft: number): void => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const startScrollLeft = container.scrollLeft;
        const scrollAmount = targetScrollLeft - startScrollLeft;
        const startTime = performance.now();

        const animateScroll = (currentTime: number): void => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            container.scrollLeft = startScrollLeft + (scrollAmount * easeOutCubic);
            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    }, []);

    const handleStep = useCallback((direction: -1 | 1): void => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const target = container.scrollLeft + direction * container.clientWidth;
        animateScrollTo(target);
    }, [animateScrollTo]);

    const goToPage = useCallback((index: number): void => {
        if (!containerRef.current) return;
        const target = index * containerRef.current.clientWidth;
        animateScrollTo(target);
        setCurrentPage(index);
    }, [animateScrollTo]);

    const handleScroll = useCallback((): void => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const currentScrollLeft = container.scrollLeft;

        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        setIsScrolling(true);

        if (lastScrollLeft.current < currentScrollLeft) {
            setScrollDirection('right');
        } else if (lastScrollLeft.current > currentScrollLeft) {
            setScrollDirection('left');
        }

        lastScrollLeft.current = currentScrollLeft;

        if (container.clientWidth > 0) {
            const page = Math.round(currentScrollLeft / container.clientWidth);
            setCurrentPage(page);
        }

        scrollTimeoutRef.current = setTimeout(resetScrollDirection, SCROLL_RESET_DELAY);
    }, [resetScrollDirection]);

    useEffect(() => {
        if (!needsCarousel) return;

        const container = containerRef.current;
        if (!container) return;

        container.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            container.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [handleScroll, needsCarousel]);

    // Clone children to inject isMoving prop when sliding is enabled
    const renderChildren = (): React.ReactNode => {
        if (!needsCarousel) {
            return childrenArray;
        }

        return childrenArray.map((child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child as React.ReactElement<{ isMoving?: string }>, {
                    isMoving: scrollDirection,
                });
            }
            return child;
        });
    };

    return (
        <div className={`relative ${needsCarousel ? 'pb-16' : ''} ${className}`}>
            {/* Navigation Buttons */}
            {showNavigation && needsCarousel && (
                <>
                    <button
                        onClick={() => handleStep(-1)}
                        className="absolute bottom-[-3rem] left-4 z-20 w-12 h-12 bg-[#991b1b] hover:bg-[#7f1d1d] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                        aria-label="Previous"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={() => handleStep(1)}
                        className="absolute bottom-[-3rem] right-4 z-20 w-12 h-12 bg-[#991b1b] hover:bg-[#7f1d1d] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                        aria-label="Next"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}

            {/* Page Indicator Dots */}
            {showPageIndicator && needsCarousel && (
                <div className="absolute bottom-[-3rem] left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToPage(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentPage === index
                                    ? 'bg-[#991b1b] scale-110'
                                    : 'bg-gray-400 hover:bg-gray-500'
                            }`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Cards Container */}
            <div
                ref={needsCarousel ? containerRef : undefined}
                className="flex gap-6 py-4 px-6"
                style={needsCarousel ? {
                    overflowX: 'hidden',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                } : undefined}
            >
                {renderChildren()}
            </div>
        </div>
    );
};

export default CardCarousel;