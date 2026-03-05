import { motion } from 'framer-motion';
import React from 'react';
import type { FacilityItem } from '../../components/facility/facility-carousel';
import FacilityCarousel from '../../components/facility/facility-carousel';

interface AllFacilityProps {
    facilities?: FacilityItem[];
    title?: string;
    subtitle?: string;
    className?: string;
}

const AllFacility: React.FC<AllFacilityProps> = ({
    facilities = [],
    title = 'Semua Fasilitas',
    subtitle = 'Jelajahi berbagai fasilitas modern yang tersedia untuk mendukung pembelajaran dan pengembangan siswa',
    className = '',
}) => {
    // Default facilities data if none provided
    const facilitiesData = facilities;

    return (
        <section
            id="all-facilities"
            className={`bg-white py-16 lg:py-24 ${className}`}
            aria-labelledby="all-facilities-title"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="mx-auto mb-16 max-w-3xl text-center"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-80px' }}
                >
                    <h2
                        id="all-facilities-title"
                        className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl"
                    >
                        {title}
                    </h2>

                    {subtitle && (
                        <p className="text-lg leading-relaxed text-gray-600">
                            {subtitle}
                        </p>
                    )}

                    {/* Decorative line */}
                    <div className="mt-8 flex justify-center">
                        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#2ECC71] to-[#27ae60]" />
                    </div>
                </motion.div>

                {/* Statistics Bar */}
                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                        <div className="text-sm text-gray-600 font-medium">Laboratorium</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                        <div className="text-sm text-gray-600 font-medium">Komputer</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                        <div className="text-sm text-gray-600 font-medium">Ruang Kelas</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                        <div className="text-sm text-gray-600 font-medium">Berstandar Industri</div>
                    </div>
                </motion.div>

                {/* Facility Carousel / Empty State */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {facilitiesData.length > 0 ? (
                        <FacilityCarousel
                            facilities={facilitiesData}
                            itemsPerPage={4}
                            showNavigation={true}
                            showPagination={true}
                            className="mb-8"
                            ariaLabel="Galeri fasilitas SMK Telkom Sidoarjo"
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 py-20 text-center">
                            <svg className="mx-auto mb-4 h-14 w-14 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <h3 className="mb-2 text-lg font-semibold text-gray-700">Belum Ada Fasilitas</h3>
                            <p className="inline-flex items-center gap-1.5 rounded-md border border-yellow-200 bg-yellow-50 px-3 py-2 text-sm text-yellow-700">
                                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
                                </svg>
                                Data fasilitas belum diisi. Silakan tambahkan melalui panel admin.
                            </p>
                        </div>
                    )}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-60px' }}
                >
                    <div className="rounded-2xl bg-none p-8 lg:p-12">
                        <h3 className="mb-4 text-2xl font-bold text-gray-900">
                            Ingin Melihat Fasilitas Secara Langsung?
                        </h3>
                        <p className="mx-auto mb-6 max-w-2xl text-gray-600">
                            Kunjungi sekolah kami untuk melihat langsung semua
                            fasilitas modern yang akan mendukung perjalanan
                            pendidikan Anda.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <a
                                href="/contact"
                                className="inline-flex transform items-center justify-center rounded-xl bg-[#2ECC71] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#27ae60] hover:shadow-xl focus:ring-4 focus:ring-red-500/25 focus:outline-none"
                            >
                                Hubungi Kami
                            </a>
                            <a
                                href="/virtual-tour"
                                className="inline-flex transform items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-8 py-3 font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:bg-gray-50 hover:shadow-xl focus:ring-4 focus:ring-gray-500/25 focus:outline-none"
                            >
                                Tour Virtual
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AllFacility;
