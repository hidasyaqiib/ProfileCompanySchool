import { motion } from 'framer-motion';
import React from 'react';
import type { FacilityItem } from '../components/facility/facility-carousel';
import FacilityCarousel from '../components/facility/facility-carousel';

interface FacilityInShortProps {
    facilities?: FacilityItem[];
}

const FacilityInShortSection: React.FC<FacilityInShortProps> = ({
    facilities = [],
}) => {
    const displayFacilities = facilities;

    return (
        <section className="overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.header
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-80px' }}
                >
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
                </motion.header>

                {/* Facilities Carousel / Empty State */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                    viewport={{ once: true, margin: '-60px' }}
                >
                {displayFacilities.length > 0 ? (
                    <FacilityCarousel
                        facilities={displayFacilities}
                        itemsPerPage={4}
                        showNavigation={displayFacilities.length > 4}
                        showPagination={displayFacilities.length > 4}
                        ariaLabel="School facilities showcase"
                        className="facility-carousel"
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-white/60 py-16 text-center">
                        <svg className="mx-auto mb-4 h-12 w-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <h3 className="mb-2 text-base font-semibold text-gray-600">Belum Ada Fasilitas Unggulan</h3>
                        <p className="inline-flex items-center gap-1.5 rounded-md border border-yellow-200 bg-yellow-50 px-3 py-2 text-sm text-yellow-700">
                            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
                            </svg>
                            Aktifkan toggle fasilitas unggulan melalui panel admin.
                        </p>
                    </div>
                )}
                </motion.div>
            </div>
        </section>
    );
};

export default FacilityInShortSection;
