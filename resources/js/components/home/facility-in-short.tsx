import React from 'react';
import type { FacilityItem } from '../components/facility/facility-carousel';
import FacilityCarousel from '../components/facility/facility-carousel';

interface FacilityInShortProps {
    facilities?: FacilityItem[];
}

const DEFAULT_FACILITIES: FacilityItem[] = [
    {
        id: 1,
        title: 'Blake Star',
        image: '/assets/image/hero-home.webp',
        description:
            'State-of-the-art library with digital resources and quiet study areas for enhanced learning.',
    },
    {
        id: 2,
        title: 'David Gilmore',
        image: '/assets/image/hero-home.webp',
        description:
            'Fully equipped laboratory for chemistry, physics, and biology experiments.',
    },
    {
        id: 3,
        title: 'Gerard White',
        image: '/assets/image/hero-home.webp',
        description:
            'Comprehensive sports facilities including gymnasium, swimming pool, and outdoor courts.',
    },
    {
        id: 4,
        title: 'Computer Center',
        image: '/assets/image/hero-home.webp',
        description:
            'Advanced computing lab with latest technology for programming and digital literacy.',
    },
    {
        id: 5,
        title: 'Art Studio',
        image: '/assets/image/hero-home.webp',
        description:
            'Creative space for visual arts with professional-grade equipment and materials.',
    },
    {
        id: 6,
        title: 'Music Room',
        image: '/assets/image/hero-home.webp',
        description:
            'Soundproof music practice rooms with various instruments and recording equipment.',
    },
];

const FacilityInShortSection: React.FC<FacilityInShortProps> = ({
    facilities = [],
}) => {
    const displayFacilities =
        facilities.length > 0 ? facilities : DEFAULT_FACILITIES;

    return (
        <section className="overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <header className="mb-16 text-center">
                    <h2 className="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-5xl">
                        Fasilitas
                        <span className="bg-gradient-to-r from-[#2ECC71] to-[#27ae60] bg-clip-text text-transparent">
                            {' '}
                            Unggulan{' '}
                        </span>
                        Kami
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
                        Kami menyediakan fasilitas terbaik untuk mendukung
                        proses belajar mengajar yang efektif dan menyenangkan
                        bagi seluruh siswa.
                    </p>
                </header>

                {/* Facilities Carousel */}
                <FacilityCarousel
                    facilities={displayFacilities}
                    itemsPerPage={4}
                    showNavigation={displayFacilities.length > 4}
                    showPagination={displayFacilities.length > 4}
                    ariaLabel="School facilities showcase"
                    className="facility-carousel"
                />
            </div>
        </section>
    );
};

export default FacilityInShortSection;
