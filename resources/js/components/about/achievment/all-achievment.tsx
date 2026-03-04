import React, { useState } from 'react';
import FacilityCard from '../../components/facility/facility-card';

export interface AchievementItem {
    id: number;
    title: string;
    category: string;
    year: string;
    level: string;
    description: string;
    image?: string;
    award?: string;
}

interface AllAchievementProps {
    achievements?: AchievementItem[];
    title?: string;
    subtitle?: string;
    className?: string;
    itemsPerPage?: number;
}

const AllAchievement: React.FC<AllAchievementProps> = ({
    achievements = [],
    title = 'Semua Prestasi',
    subtitle = 'Bangga dengan pencapaian siswa-siswi SMK Telkom Sidoarjo dalam berbagai kompetisi dan kegiatan',
    className = '',
    itemsPerPage = 8,
}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const achievementsData = achievements;

    // Pagination
    const totalPages = Math.ceil(achievementsData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = achievementsData.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        document.querySelector('#all-achievements')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <section
            id="all-achievements"
            className={`bg-white py-16 lg:py-24 ${className}`}
            aria-labelledby="all-achievements-title"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <h2
                        id="all-achievements-title"
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
                        <div className="h-1 w-24 rounded-full bg-linear-to-r from-[#2ECC71] to-[#27ae60]" />
                    </div>
                </div>

                {/* Achievement Grid */}
                <div className="transition-opacity duration-300">
                    {paginatedItems.length > 0 ? (
                        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {paginatedItems.map((achievement) => (
                                <article
                                    key={achievement.id}
                                    className="group transform transition-all duration-300"
                                >
                                    <FacilityCard
                                        title={achievement.title}
                                        image={achievement.image || '/images/achievements/default.jpg'}
                                        description={`${achievement.category} • ${achievement.year} • ${achievement.level}${achievement.award ? ` • ${achievement.award}` : ''} — ${achievement.description}`}
                                        date={`${achievement.year}-01-01`}
                                        className="mb-0 h-80"
                                    />
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 py-20 text-center">
                            <svg className="mx-auto mb-4 h-14 w-14 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <h3 className="mb-2 text-lg font-semibold text-gray-700">Belum Ada Prestasi</h3>
                            <p className="inline-flex items-center gap-1.5 rounded-md border border-yellow-200 bg-yellow-50 px-3 py-2 text-sm text-yellow-700">
                                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
                                </svg>
                                Data prestasi belum diisi. Silakan tambahkan melalui panel admin.
                            </p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <nav
                        className="mt-4 mb-12 flex items-center justify-center space-x-2"
                        aria-label="Achievement pagination"
                    >
                        <button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className={`rounded-lg px-4 py-2 font-medium transition-colors duration-300 ${
                                currentPage === 1
                                    ? 'cursor-not-allowed bg-gray-200 text-gray-400'
                                    : 'bg-white text-gray-700 shadow-sm hover:bg-green-50 hover:text-[#2ECC71]'
                            }`}
                            aria-label="Previous page"
                        >
                            ‹ Sebelumnya
                        </button>

                        <div className="flex space-x-1">
                            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                                const pageNum = i + 1;
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => handlePageChange(pageNum)}
                                        className={`h-10 w-10 rounded-lg font-medium transition-all duration-300 ${
                                            currentPage === pageNum
                                                ? 'bg-[#2ECC71] text-white shadow-md'
                                                : 'bg-white text-gray-700 shadow-sm hover:bg-green-50 hover:text-[#2ECC71]'
                                        }`}
                                        aria-label={`Go to page ${pageNum}`}
                                        aria-current={currentPage === pageNum ? 'page' : undefined}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className={`rounded-lg px-4 py-2 font-medium transition-colors duration-300 ${
                                currentPage === totalPages
                                    ? 'cursor-not-allowed bg-gray-200 text-gray-400'
                                    : 'bg-white text-gray-700 shadow-sm hover:bg-green-50 hover:text-[#2ECC71]'
                            }`}
                            aria-label="Next page"
                        >
                            Selanjutnya ›
                        </button>
                    </nav>
                )}

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <div className="rounded-2xl bg-none p-8 lg:p-12">
                        <h3 className="mb-4 text-2xl font-bold text-gray-900">
                            Ingin Meraih Prestasi Seperti Mereka?
                        </h3>
                        <p className="mx-auto mb-6 max-w-2xl text-gray-600">
                            Bergabunglah dengan SMK Telkom Sidoarjo dan
                            kembangkan potensi terbaikmu dalam bidang teknologi
                            informasi dan komunikasi.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <a
                                href="/contact"
                                className="inline-flex transform items-center justify-center rounded-xl bg-[#2ECC71] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#27ae60] hover:shadow-xl focus:ring-4 focus:ring-green-500/25 focus:outline-none"
                            >
                                Daftar Sekarang
                            </a>
                            <a
                                href="/profil"
                                className="inline-flex transform items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-8 py-3 font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:bg-gray-50 hover:shadow-xl focus:ring-4 focus:ring-gray-500/25 focus:outline-none"
                            >
                                Pelajari Lebih Lanjut
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllAchievement;
