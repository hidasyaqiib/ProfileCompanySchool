import React, { useState, useMemo } from 'react';
import FacilityCard from '../components/facility/facility-card';

interface GalleryItem {
    id: number;
    title: string;
    image: string;
    description: string;
    date?: string;
}

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
    itemsPerPage = 8,
}) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Extended gallery data
    const defaultGalleryItems: GalleryItem[] = useMemo(
        () => [
            {
                id: 1,
                title: 'Upacara Bendera Hari Senin',
                image: '/images/gallery/upacara.jpg',
                description:
                    'Kegiatan upacara bendera rutin setiap hari Senin yang diikuti seluruh siswa dan guru dengan khidmat',
                date: '2024-02-19',
            },
            {
                id: 2,
                title: 'Praktikum Jaringan Komputer',
                image: '/images/gallery/praktikum-jaringan.jpg',
                description:
                    'Siswa sedang melakukan praktikum konfigurasi jaringan di laboratorium yang dilengkapi perangkat modern',
                date: '2024-02-15',
            },
            {
                id: 3,
                title: 'Lomba Web Design Tingkat Nasional',
                image: '/images/gallery/lomba-webdesign.jpg',
                description:
                    'Tim MI NU 02 Situwangi meraih juara 1 dalam kompetisi web design tingkat nasional',
                date: '2024-01-20',
            },
            {
                id: 4,
                title: 'Laboratorium Multimedia',
                image: '/images/gallery/lab-multimedia.jpg',
                description:
                    'Fasilitas studio multimedia lengkap dengan perangkat editing video dan audio profesional',
                date: '2024-02-10',
            },
            {
                id: 5,
                title: 'Workshop Robotika',
                image: '/images/gallery/workshop-robotika.jpg',
                description:
                    'Kegiatan workshop robotika dengan instruktur ahli dari industri teknologi terkemuka',
                date: '2024-02-05',
            },
            {
                id: 6,
                title: 'Wisuda Angkatan 2023',
                image: '/images/gallery/wisuda.jpg',
                description:
                    'Momen kelulusan siswa angkatan 2023 yang telah siap memasuki dunia kerja dan perguruan tinggi',
                date: '2023-12-15',
            },
            {
                id: 7,
                title: 'Perpustakaan Digital',
                image: '/images/gallery/perpustakaan-digital.jpg',
                description:
                    'Area belajar modern dengan akses digital library dan zona diskusi yang nyaman',
                date: '2024-01-30',
            },
            {
                id: 8,
                title: 'Kompetisi Cyber Security',
                image: '/images/gallery/cyber-security.jpg',
                description:
                    'Tim cyber security MI NU 02 Situwangi berhasil menjadi juara dalam kompetisi ethical hacking',
                date: '2024-01-25',
            },
            {
                id: 9,
                title: 'Kelas Programming',
                image: '/images/gallery/programming-class.jpg',
                description:
                    'Suasana pembelajaran programming dengan metode project-based learning yang interaktif',
                date: '2024-02-12',
            },
            {
                id: 10,
                title: 'Lab Server Room',
                image: '/images/gallery/server-room.jpg',
                description:
                    'Ruang server dengan infrastruktur IT terdepan untuk mendukung sistem informasi sekolah',
                date: '2024-01-15',
            },
            {
                id: 11,
                title: 'Pelatihan Industri 4.0',
                image: '/images/gallery/industry-training.jpg',
                description:
                    'Program pelatihan teknologi industri 4.0 bekerjasama dengan perusahaan teknologi ternama',
                date: '2024-01-10',
            },
            {
                id: 12,
                title: 'Student Innovation Expo',
                image: '/images/gallery/innovation-expo.jpg',
                description:
                    'Pameran inovasi siswa menampilkan berbagai project teknologi dan startup digital',
                date: '2023-12-20',
            },
        ],
        [],
    );

    const galleryData =
        galleryItems.length > 0 ? galleryItems : defaultGalleryItems;

    // Pagination calculations
    const totalPages = Math.ceil(galleryData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = galleryData.slice(
        startIndex,
        startIndex + itemsPerPage,
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll to top of grid
        document.querySelector('#gallery-grid')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <section
            id="gallery-grid"
            className={`bg-white py-16 lg:py-24 ${className}`}
            aria-labelledby="gallery-grid-title"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <header className="mx-auto mb-12 max-w-3xl text-center">
                    <h2
                        id="gallery-grid-title"
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
                        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#2ECC71] to-[#27AE60]" />
                    </div>
                </header>

                {/* Results Info */}
                <div className="mb-12 text-center">
                    <p className="text-lg text-gray-600">
                        Menampilkan{' '}
                        <span className="font-semibold text-[#2ECC71]">
                            {galleryData.length}
                        </span>{' '}
                        dokumentasi terbaru
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="transition-opacity duration-300">
                    {paginatedItems.length > 0 ? (
                        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {paginatedItems.map((item, index) => (
                                <article
                                    key={item.id}
                                    className="group transform transition-all duration-300 hover:scale-[1.02]"
                                    itemScope
                                    itemType="https://schema.org/ImageObject"
                                >
                                    <FacilityCard
                                        title={item.title}
                                        image={item.image}
                                        description={item.description}
                                        className="mb-0 h-80"
                                    />

                                    {/* Gallery Item Details */}
                                    <div className="mt-4 flex h-50 flex-col justify-between rounded-xl border border-gray-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-lg">
                                        <div className="flex-1 space-y-3">
                                            <h3
                                                className="line-clamp-2 min-h-[3.5rem] text-lg leading-snug font-bold text-gray-900"
                                                itemProp="name"
                                            >
                                                {item.title}
                                            </h3>
                                            <p
                                                className="line-clamp-3 min-h-[4rem] text-sm leading-relaxed text-gray-600"
                                                itemProp="description"
                                            >
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                                            <time
                                                className="flex items-center text-sm font-medium text-[#2ECC71]"
                                                dateTime={item.date}
                                                itemProp="dateCreated"
                                            >
                                                <svg
                                                    className="mr-2 h-4 w-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                                {item.date}
                                            </time>
                                            <span className="text-xs font-medium text-gray-400">
                                                #{index + 1 + startIndex}
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center">
                            <div className="mb-8 text-gray-500">
                                <div className="relative inline-block">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100/50 to-green-100/50 blur-xl"></div>
                                    <svg
                                        className="relative mx-auto mb-6 h-24 w-24 text-gray-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-gray-800">
                                    Belum Ada Dokumentasi
                                </h3>
                                <p className="mx-auto max-w-md text-lg text-gray-600">
                                    Dokumentasi gallery akan segera hadir.
                                    Silakan kembali lagi nanti.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <nav
                        className="flex items-center justify-center space-x-2"
                        aria-label="Gallery pagination"
                    >
                        {/* Previous Button */}
                        <button
                            onClick={() =>
                                handlePageChange(Math.max(1, currentPage - 1))
                            }
                            disabled={currentPage === 1}
                            className={`rounded-lg px-4 py-2 font-medium transition-colors duration-300 ${
                                currentPage === 1
                                    ? 'cursor-not-allowed bg-gray-200 text-gray-400'
                                    : 'bg-white text-gray-700 shadow-sm hover:bg-green-50 hover:text-[#2ECC71]'
                            } `}
                            aria-label="Previous page"
                        >
                            ‹ Sebelumnya
                        </button>

                        {/* Page Numbers */}
                        <div className="flex space-x-1">
                            {Array.from(
                                { length: Math.min(totalPages, 5) },
                                (_, i) => {
                                    const pageNum = i + 1;
                                    return (
                                        <button
                                            key={pageNum}
                                            onClick={() =>
                                                handlePageChange(pageNum)
                                            }
                                            className={`h-10 w-10 rounded-lg font-medium transition-all duration-300 ${
                                                currentPage === pageNum
                                                    ? 'bg-[#2ECC71] text-white shadow-md'
                                                    : 'bg-white text-gray-700 shadow-sm hover:bg-green-50 hover:text-[#2ECC71]'
                                            } `}
                                            aria-label={`Go to page ${pageNum}`}
                                            aria-current={
                                                currentPage === pageNum
                                                    ? 'page'
                                                    : undefined
                                            }
                                        >
                                            {pageNum}
                                        </button>
                                    );
                                },
                            )}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={() =>
                                handlePageChange(
                                    Math.min(totalPages, currentPage + 1),
                                )
                            }
                            disabled={currentPage === totalPages}
                            className={`rounded-lg px-4 py-2 font-medium transition-colors duration-300 ${
                                currentPage === totalPages
                                    ? 'cursor-not-allowed bg-gray-200 text-gray-400'
                                    : 'bg-white text-gray-700 shadow-sm hover:bg-green-50 hover:text-[#2ECC71]'
                            } `}
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
