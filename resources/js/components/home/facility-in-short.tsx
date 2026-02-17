import React, { useState, useEffect, useRef, useCallback } from 'react';
import FacilityCard from '../components/facility/facility-card';

interface Facility {
    id: number;
    title: string;
    image: string;
    description: string;
}

interface FacilityInShortProps {
    facilities?: Facility[];
}

const DEFAULT_FACILITIES: Facility[] = [
    {
        id: 1,
        title: "Blake Star",
        image: "/assets/image/hero-home.webp",
        description: "State-of-the-art library with digital resources and quiet study areas for enhanced learning.",
    },
    {
        id: 2,
        title: "David Gilmore",
        image: "/assets/image/hero-home.webp",
        description: "Fully equipped laboratory for chemistry, physics, and biology experiments.",
    },
    {
        id: 3,
        title: "Gerard White",
        image: "/assets/image/hero-home.webp",
        description: "Comprehensive sports facilities including gymnasium, swimming pool, and outdoor courts.",
    },
    {
        id: 4,
        title: "Computer Center",
        image: "/assets/image/hero-home.webp",
        description: "Advanced computing lab with latest technology for programming and digital literacy.",
    },
    {
        id: 5,
        title: "Art Studio",
        image: "/assets/image/hero-home.webp",
        description: "Creative space equipped with professional art supplies and digital design tools.",
    },
    {
        id: 6,
        title: "Music Hall",
        image: "/assets/image/hero-home.webp",
        description: "Professional music studio with high-quality instruments and recording equipment.",
    }
];

const SCROLL_AMOUNT = 340; // Card width + gap
const ANIMATION_DURATION = 300;
const SCROLL_RESET_DELAY = 150;

const FacilityInShortSection: React.FC<FacilityInShortProps> = ({ facilities = [] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const lastScrollLeft = useRef<number>(0);

    const [scrollDirection, setScrollDirection] = useState<'none' | 'left' | 'right'>('none');
    const [isScrolling, setIsScrolling] = useState<boolean>(false);

    const displayFacilities = facilities.length > 0 ? facilities : DEFAULT_FACILITIES;

    const resetScrollDirection = useCallback((): void => {
        setScrollDirection('none');
        setIsScrolling(false);
    }, []);

    const handleStep = useCallback((direction: -1 | 1): void => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const startScrollLeft = container.scrollLeft;
        const scrollAmount = direction * SCROLL_AMOUNT;
        const startTime = performance.now();

        const animateScroll = (currentTime: number): void => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / ANIMATION_DURATION, 1);

            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);

            container.scrollLeft = startScrollLeft + (scrollAmount * easeOutCubic);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    }, []);

    const handleScroll = useCallback((): void => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const currentScrollLeft = container.scrollLeft;

        // Clear existing timeout
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        setIsScrolling(true);

        // Determine scroll direction
        if (lastScrollLeft.current < currentScrollLeft) {
            setScrollDirection('right');
        } else if (lastScrollLeft.current > currentScrollLeft) {
            setScrollDirection('left');
        }

        lastScrollLeft.current = currentScrollLeft;

        // Reset scroll direction after scrolling stops
        scrollTimeoutRef.current = setTimeout(resetScrollDirection, SCROLL_RESET_DELAY);
    }, [resetScrollDirection]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            container.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [handleScroll]);

    const NavigationButton: React.FC<{
        direction: 'left' | 'right';
        onClick: () => void;
        'aria-label': string;
    }> = ({ direction, onClick, 'aria-label': ariaLabel }) => (
        <button
            onClick={onClick}
            className={`
                absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full
                shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-50
                flex items-center justify-center border border-gray-200
                ${direction === 'left' ? 'left-4' : 'right-4'}
            `}
            aria-label={ariaLabel}
        >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d={direction === 'left' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
                />
            </svg>
        </button>
    );

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <header className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Fasilitas
                        <span className="bg-gradient-to-r from-[#2ECC71] to-[#27ae60] bg-clip-text text-transparent"> Unggulan </span>
                        Kami
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                       Kami menyediakan fasilitas terbaik untuk mendukung proses belajar mengajar yang efektif dan menyenangkan bagi seluruh siswa.
                    </p>
                </header>

                {/* Cards Container with Navigation */}
                <section className="relative" aria-label="Facilities carousel">
                    {/* Navigation Buttons */}
                    <NavigationButton
                        direction="left"
                        onClick={() => handleStep(-1)}
                        aria-label="Previous facilities"
                    />

                    <NavigationButton
                        direction="right"
                        onClick={() => handleStep(1)}
                        aria-label="Next facilities"
                    />

                    {/* Horizontal Scrolling Container */}
                    <div
                        ref={containerRef}
                        className="flex gap-6 overflow-x-auto py-4 px-6 scroll-smooth scrollbar-none"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {displayFacilities.map((facility) => (
                            <FacilityCard
                                key={facility.id}
                                title={facility.title}
                                image={facility.image}
                                description={facility.description}
                                isMoving={scrollDirection}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FacilityInShortSection;


