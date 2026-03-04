import React, { useState } from 'react';
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

    const galleryData = galleryItems;

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
                {galleryData.length > 0 && (
                <div className="mb-12 text-center">
                    <p className="text-lg text-gray-600">
                        Menampilkan{' '}
                        <span className="font-semibold text-[#2ECC71]">
                            {galleryData.length}
                        </span>{' '}
                        dokumentasi terbaru
                    </p>
                </div>
                )}

                {/* Gallery Grid */}
                <div className="transition-opacity duration-300">
                    {paginatedItems.length > 0 ? (
                        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {paginatedItems.map((item, index) => (
                                <article
                                    key={item.id}
                                    className="group transform transition-all duration-300"
                                    itemScope
                                    itemType="https://schema.org/ImageObject"
                                >
                                    <FacilityCard
                                        title={item.title}
                                        image={item.image}
                                        description={item.description}
                                        date={item.date}
                                        className="mb-0 h-80"
                                    />
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 py-20 text-center">
                            <svg className="mx-auto mb-4 h-14 w-14 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <h3 className="mb-2 text-lg font-semibold text-gray-700">Belum Ada Dokumentasi</h3>
                            <p className="inline-flex items-center gap-1.5 rounded-md border border-yellow-200 bg-yellow-50 px-3 py-2 text-sm text-yellow-700">
                                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
                                </svg>
                                Data galeri belum diisi. Silakan tambahkan melalui panel admin.
                            </p>
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
