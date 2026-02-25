import React, { useMemo } from 'react';
import FacilityCarousel, { FacilityItem } from '../../components/facility/facility-carousel';

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
    className = ''
}) => {
    // Default facilities data if none provided
    const defaultFacilities: FacilityItem[] = useMemo(() => [
        {
            id: 1,
            title: 'Laboratorium Komputer',
            image: '/images/facilities/lab-komputer.jpg',
            description: 'Lab komputer dengan perangkat modern untuk pembelajaran programming dan desain'
        },
        {
            id: 2,
            title: 'Laboratorium Jaringan',
            image: '/images/facilities/lab-jaringan.jpg',
            description: 'Fasilitas lengkap untuk praktik jaringan komputer dan administrasi sistem'
        },
        {
            id: 3,
            title: 'Laboratorium Telekomunikasi',
            image: '/images/facilities/lab-telekomunikasi.jpg',
            description: 'Perangkat telekomunikasi terkini untuk pembelajaran teknologi komunikasi'
        },
        {
            id: 4,
            title: 'Ruang Multimedia',
            image: '/images/facilities/multimedia.jpg',
            description: 'Studio multimedia lengkap untuk produksi konten digital dan broadcasting'
        },
        {
            id: 5,
            title: 'Perpustakaan Digital',
            image: '/images/facilities/perpustakaan.jpg',
            description: 'Koleksi buku dan referensi digital dengan akses internet berkecepatan tinggi'
        },
        {
            id: 6,
            title: 'Aula Serbaguna',
            image: '/images/facilities/aula.jpg',
            description: 'Ruang serbaguna untuk berbagai kegiatan sekolah dan acara besar'
        },
        {
            id: 7,
            title: 'Laboratorium Robotika',
            image: '/images/facilities/lab-robotika.jpg',
            description: 'Fasilitas untuk pengembangan dan pembelajaran teknologi robotika'
        },
        {
            id: 8,
            title: 'Ruang Server',
            image: '/images/facilities/server-room.jpg',
            description: 'Infrastruktur server untuk mendukung sistem informasi sekolah'
        }
    ], []);

    const facilitiesData = facilities.length > 0 ? facilities : defaultFacilities;

    return (
        <section 
            id="all-facilities"
            className={`py-16 lg:py-24 bg-white ${className}`}
            aria-labelledby="all-facilities-title"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 
                        id="all-facilities-title"
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                    >
                        {title}
                    </h2>
                    
                    {subtitle && (
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {subtitle}
                        </p>
                    )}

                    {/* Decorative line */}
                    <div className="mt-8 flex justify-center">
                        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
                    </div>
                </div>

                {/* Statistics Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
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
                </div>

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
                <div className="text-center mt-16">
                    <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Ingin Melihat Fasilitas Secara Langsung?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Kunjungi sekolah kami untuk melihat langsung semua fasilitas modern 
                            yang akan mendukung perjalanan pendidikan Anda.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-red-500/25"
                            >
                                Hubungi Kami
                            </a>
                            <a
                                href="/virtual-tour"
                                className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-500/25"
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