import React, { useMemo } from 'react';
import FacilityCarousel, { FacilityItem } from '../components/facility/facility-carousel';

export interface GalleryItem {
    id: number;
    title: string;
    image: string;
    description: string;
    category: string;
    date?: string;
}

interface GalleryShowcaseProps {
    galleryItems?: GalleryItem[];
    title?: string;
    subtitle?: string;
    className?: string;
}

const GalleryShowcase: React.FC<GalleryShowcaseProps> = ({
    galleryItems = [],
    title = 'Galeri Pilihan',
    subtitle = 'Koleksi foto terbaik dari berbagai kegiatan dan momen bersejarah MI NU 02 Situwangi',
    className = ''
}) => {
    // Default gallery data if none provided
    const defaultGalleryItems: GalleryItem[] = useMemo(() => [
        {
            id: 1,
            title: 'Upacara Bendera Hari Senin',
            image: '/images/gallery/upacara.jpg',
            description: 'Kegiatan upacara bendera rutin setiap hari Senin yang diikuti seluruh siswa dan guru dengan khidmat',
            category: 'Kegiatan Sekolah',
            date: '2024-02-19'
        },
        {
            id: 2,
            title: 'Praktikum Jaringan Komputer',
            image: '/images/gallery/praktikum-jaringan.jpg',
            description: 'Siswa sedang melakukan praktikum konfigurasi jaringan di laboratorium yang dilengkapi perangkat modern',
            category: 'Pembelajaran',
            date: '2024-02-15'
        },
        {
            id: 3,
            title: 'Lomba Web Design Tingkat Nasional',
            image: '/images/gallery/lomba-webdesign.jpg',
            description: 'Tim SMK Telkom Sidoarjo meraih juara 1 dalam kompetisi web design tingkat nasional',
            category: 'Prestasi',
            date: '2024-01-20'
        },
        {
            id: 4,
            title: 'Laboratorium Multimedia',
            image: '/images/gallery/lab-multimedia.jpg',
            description: 'Fasilitas studio multimedia lengkap dengan perangkat editing video dan audio profesional',
            category: 'Fasilitas',
            date: '2024-02-10'
        },
        {
            id: 5,
            title: 'Workshop Robotika',
            image: '/images/gallery/workshop-robotika.jpg',
            description: 'Kegiatan workshop robotika dengan instruktur ahli dari industri teknologi terkemuka',
            category: 'Pembelajaran',
            date: '2024-02-05'
        },
        {
            id: 6,
            title: 'Wisuda Angkatan 2023',
            image: '/images/gallery/wisuda.jpg',
            description: 'Momen kelulusan siswa angkatan 2023 yang telah siap memasuki dunia kerja dan perguruan tinggi',
            category: 'Kegiatan Sekolah',
            date: '2023-12-15'
        },
        {
            id: 7,
            title: 'Perpustakaan Digital',
            image: '/images/gallery/perpustakaan-digital.jpg',
            description: 'Area belajar modern dengan akses digital library dan zona diskusi yang nyaman',
            category: 'Fasilitas',
            date: '2024-01-30'
        },
        {
            id: 8,
            title: 'Kompetisi Cyber Security',
            image: '/images/gallery/cyber-security.jpg',
            description: 'Tim cyber security SMK Telkom Sidoarjo berhasil menjadi juara dalam kompetisi ethical hacking',
            category: 'Prestasi',
            date: '2024-01-25'
        }
    ], []);

    const galleryData = galleryItems.length > 0 ? galleryItems : defaultGalleryItems;

    // Convert gallery data to facility format for carousel
    const facilityFormattedData: FacilityItem[] = useMemo(() =>
        galleryData.map(item => ({
            id: item.id,
            title: item.title,
            image: item.image,
            description: `${item.category} • ${item.date || '2024'} - ${item.description}`
        })), [galleryData]
    );

    return (
        <section
            id="gallery-showcase"
            className={`py-16 lg:py-24 bg-white ${className}`}
            aria-labelledby="gallery-showcase-title"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <header className="text-center mb-16 max-w-3xl mx-auto">
                    <h2
                        id="gallery-showcase-title"
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
                        <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-blue-700 rounded-full" />
                    </div>
                </header>

                {/* Gallery Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                        <div className="text-sm text-gray-600 font-medium">Total Dokumentasi</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                        <div className="text-sm text-gray-600 font-medium">Kategori Utama</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                        <div className="text-sm text-gray-600 font-medium">Event Terdokumentasi</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                        <div className="text-sm text-gray-600 font-medium">Kualitas HD</div>
                    </div>
                </div>

                {/* Gallery Carousel */}
                <div className="relative">
                    <FacilityCarousel
                        facilities={facilityFormattedData}
                        itemsPerPage={3}
                        showNavigation={true}
                        showPagination={true}
                        className="mb-8"
                        ariaLabel="Galeri foto kegiatan  MI NU 02 Situwangi"
                    />
                </div>

                {/* Call to Action */}
                {/* <div className="text-center mt-16">
                    <div className="bg-none rounded-2xl p-8 lg:p-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Lihat Lebih Banyak Dokumentasi
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Jelajahi koleksi lengkap foto dan video kegiatan sekolah kami.
                            Saksikan momen-momen berharga perjalanan pendidikan di SMK Telkom Sidoarjo.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#gallery-grid"
                                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500/25"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#gallery-grid')?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }}
                            >
                                Jelajahi Semua
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-500/25"
                            >
                                Hubungi Kami
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default GalleryShowcase;
