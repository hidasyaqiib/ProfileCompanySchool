import React, { useState, useMemo } from 'react';
import FacilityCard from '../components/facility/facility-card';
import type { GalleryItem } from './gallery-showcase';

interface GalleryGridProps {
    galleryItems?: GalleryItem[];
    title?: string;
    subtitle?: string;
    className?: string;
    itemsPerPage?: number;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({
    galleryItems = [],
    title = 'Koleksi Lengkap',
    subtitle = 'Semua dokumentasi kegiatan, prestasi, dan fasilitas MI NU 02 Situwangi dalam satu tempat',
    className = '',
    itemsPerPage = 8
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const [isLoading, setIsLoading] = useState(false);

    // Extended gallery data
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
            description: 'Tim MI NU 02 Situwangi meraih juara 1 dalam kompetisi web design tingkat nasional',
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
            description: 'Tim cyber security MI NU 02 Situwangi berhasil menjadi juara dalam kompetisi ethical hacking',
            category: 'Prestasi',
            date: '2024-01-25'
        },
        {
            id: 9,
            title: 'Kelas Programming',
            image: '/images/gallery/programming-class.jpg',
            description: 'Suasana pembelajaran programming dengan metode project-based learning yang interaktif',
            category: 'Pembelajaran',
            date: '2024-02-12'
        },
        {
            id: 10,
            title: 'Lab Server Room',
            image: '/images/gallery/server-room.jpg',
            description: 'Ruang server dengan infrastruktur IT terdepan untuk mendukung sistem informasi sekolah',
            category: 'Fasilitas',
            date: '2024-01-15'
        },
        {
            id: 11,
            title: 'Pelatihan Industri 4.0',
            image: '/images/gallery/industry-training.jpg',
            description: 'Program pelatihan teknologi industri 4.0 bekerjasama dengan perusahaan teknologi ternama',
            category: 'Pembelajaran',
            date: '2024-01-10'
        },
        {
            id: 12,
            title: 'Student Innovation Expo',
            image: '/images/gallery/innovation-expo.jpg',
            description: 'Pameran inovasi siswa menampilkan berbagai project teknologi dan startup digital',
            category: 'Kegiatan Sekolah',
            date: '2023-12-20'
        }
    ], []);

    const galleryData = galleryItems.length > 0 ? galleryItems : defaultGalleryItems;

    // Get unique categories
    const categories = useMemo(() => {
        const cats = ['Semua', ...Array.from(new Set(galleryData.map(item => item.category)))];
        return cats;
    }, [galleryData]);

    // Filter items by category
    const filteredItems = useMemo(() => {
        return selectedCategory === 'Semua'
            ? galleryData
            : galleryData.filter(item => item.category === selectedCategory);
    }, [galleryData, selectedCategory]);

    // Pagination calculations
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

    const handleCategoryChange = (category: string) => {
        setIsLoading(true);
        setSelectedCategory(category);
        setCurrentPage(1);

        // Simulate loading for smoother UX
        setTimeout(() => setIsLoading(false), 300);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll to top of grid
        document.querySelector('#gallery-grid')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <section
            id="gallery-grid"
            className={`py-16 lg:py-24 bg-gray-50 ${className}`}
            aria-labelledby="gallery-grid-title"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <header className="text-center mb-12 max-w-3xl mx-auto">
                    <h2
                        id="gallery-grid-title"
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
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2ECC71] to-[#27AE60] rounded-full" />
                    </div>
                </header>

                {/* Category Filter */}
                <div className="mb-12">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`
                                    px-6 py-3 rounded-full font-medium transition-all duration-300
                                    ${selectedCategory === category
                                        ? 'bg-[#2ECC71] text-white shadow-lg transform scale-105'
                                        : 'bg-white text-gray-700 hover:bg-green-50 hover:text-[#2ECC71] shadow-md hover:shadow-lg'
                                    }
                                `}
                                aria-pressed={selectedCategory === category}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Info */}
                <div className="text-center mb-8">
                    <p className="text-gray-600">
                        Menampilkan <span className="font-semibold">{filteredItems.length}</span> foto
                        {selectedCategory !== 'Semua' && (
                            <span> dalam kategori <span className="font-semibold">{selectedCategory}</span></span>
                        )}
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
                    {paginatedItems.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
                            {paginatedItems.map((item) => (
                                <div
                                    key={item.id}
                                    // className="transform transition-all duration-300 hover:scale-105"
                                >
                                    <FacilityCard
                                        title={item.title}
                                        image={item.image}
                                        description={`${item.category} • ${item.date || '2024'}`}
                                        className="h-80"
                                    />

                                    {/* Additional Info Overlay */}
                                    <div className="mt-4 p-4 bg-white rounded-xl shadow-sm">
                                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 line-clamp-2">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center justify-between mt-3">
                                            <span className="inline-block px-3 py-1 bg-green-100 text-[#2ECC71] text-xs font-medium rounded-full">
                                                {item.category}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {item.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="text-gray-500 mb-4">
                                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p className="text-lg font-medium">Belum ada foto dalam kategori ini</p>
                                <p className="text-sm">Coba pilih kategori lain atau kembali ke semua foto</p>
                            </div>
                            <button
                                onClick={() => handleCategoryChange('Semua')}
                                className="px-6 py-3 bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold rounded-xl transition-colors duration-300"
                            >
                                Lihat Semua Foto
                            </button>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <nav
                        className="flex justify-center items-center space-x-2"
                        aria-label="Gallery pagination"
                    >
                        {/* Previous Button */}
                        <button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className={`
                                px-4 py-2 rounded-lg font-medium transition-colors duration-300
                                ${currentPage === 1
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-[#2ECC71] shadow-sm'
                                }
                            `}
                            aria-label="Previous page"
                        >
                            ‹ Sebelumnya
                        </button>

                        {/* Page Numbers */}
                        <div className="flex space-x-1">
                            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                                const pageNum = i + 1;
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => handlePageChange(pageNum)}
                                        className={`
                                            w-10 h-10 rounded-lg font-medium transition-all duration-300
                                            ${currentPage === pageNum
                                                ? 'bg-[#2ECC71] text-white shadow-md'
                                                : 'bg-white text-gray-700 hover:bg-green-50 hover:text-[#2ECC71] shadow-sm'
                                            }
                                        `}
                                        aria-label={`Go to page ${pageNum}`}
                                        aria-current={currentPage === pageNum ? 'page' : undefined}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className={`
                                px-4 py-2 rounded-lg font-medium transition-colors duration-300
                                ${currentPage === totalPages
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-[#2ECC71] shadow-sm'
                                }
                            `}
                            aria-label="Next page"
                        >
                            Selanjutnya ›
                        </button>
                    </nav>
                )}
            </div>
        </section>
    );
};

export default GalleryGrid;
