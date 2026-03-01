import React, { useMemo } from 'react';
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
    const defaultFacilities: FacilityItem[] = useMemo(
        () => [
            {
                id: 1,
                title: 'Laboratorium Komputer',
                image: '/images/facilities/lab-komputer.jpg',
                description:
                    'Lab komputer dengan perangkat modern untuk pembelajaran programming dan desain',
            },
            {
                id: 2,
                title: 'Laboratorium Jaringan',
                image: '/images/facilities/lab-jaringan.jpg',
                description:
                    'Fasilitas lengkap untuk praktik jaringan komputer dan administrasi sistem',
            },
            {
                id: 3,
                title: 'Laboratorium Telekomunikasi',
                image: '/images/facilities/lab-telekomunikasi.jpg',
                description:
                    'Perangkat telekomunikasi terkini untuk pembelajaran teknologi komunikasi',
            },
            {
                id: 4,
                title: 'Ruang Multimedia',
                image: '/images/facilities/multimedia.jpg',
                description:
                    'Studio multimedia lengkap untuk produksi konten digital dan broadcasting',
            },
            {
                id: 5,
                title: 'Perpustakaan Digital',
                image: '/images/facilities/perpustakaan.jpg',
                description:
                    'Koleksi buku dan referensi digital dengan akses internet berkecepatan tinggi',
            },
            {
                id: 6,
                title: 'Aula Serbaguna',
                image: '/images/facilities/aula.jpg',
                description:
                    'Ruang serbaguna untuk berbagai kegiatan sekolah dan acara besar',
            },
            {
                id: 7,
                title: 'Laboratorium Robotika',
                image: '/images/facilities/lab-robotika.jpg',
                description:
                    'Fasilitas untuk pengembangan dan pembelajaran teknologi robotika',
            },
            {
                id: 8,
                title: 'Ruang Server',
                image: '/images/facilities/server-room.jpg',
                description:
                    'Infrastruktur server untuk mendukung sistem informasi sekolah',
            },
        ],
        [],
    );

    const facilitiesData =
        facilities.length > 0 ? facilities : defaultFacilities;

    return (
        <section
            id="all-facilities"
            className={`bg-white py-16 lg:py-24 ${className}`}
            aria-labelledby="all-facilities-title"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
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
                </div>

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
                </div> */}

                {/* Facility Carousel */}
                <div className="relative">
                    <FacilityCarousel
                        facilities={facilitiesData}
                        itemsPerPage={4}
                        showNavigation={true}
                        showPagination={true}
                        className="mb-8"
                        ariaLabel="Galeri fasilitas SMK Telkom Sidoarjo"
                    />
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
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
                </div>
            </div>
        </section>
    );
};

export default AllFacility;
