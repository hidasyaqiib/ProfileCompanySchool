import React, { useMemo } from 'react';
import type { FacilityItem } from '../../components/facility/facility-carousel';
import FacilityCarousel from '../../components/facility/facility-carousel';

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
}

const AllAchievement: React.FC<AllAchievementProps> = ({
    achievements = [],
    title = 'Semua Prestasi',
    subtitle = 'Bangga dengan pencapaian siswa-siswi SMK Telkom Sidoarjo dalam berbagai kompetisi dan kegiatan',
    className = '',
}) => {
    // Default achievements data if none provided
    const defaultAchievements: AchievementItem[] = useMemo(
        () => [
            {
                id: 1,
                title: 'Juara 1 Lomba Web Design',
                category: 'Teknologi Informasi',
                year: '2024',
                level: 'Nasional',
                description:
                    'Meraih juara pertama dalam kompetisi web design tingkat nasional dengan tema "Digital Innovation for Education"',
                image: '/images/achievements/web-design.jpg',
                award: 'Emas',
            },
            {
                id: 2,
                title: 'Juara 2 Kompetisi Jaringan',
                category: 'Teknik Komputer Jaringan',
                year: '2024',
                level: 'Provinsi',
                description:
                    'Berhasil meraih peringkat kedua dalam lomba konfigurasi jaringan tingkat Jawa Timur',
                image: '/images/achievements/network.jpg',
                award: 'Perak',
            },
            {
                id: 3,
                title: 'Juara 1 Mobile App Development',
                category: 'Rekayasa Perangkat Lunak',
                year: '2024',
                level: 'Regional',
                description:
                    'Aplikasi mobile untuk edukasi lingkungan meraih juara pertama se-Jawa Timur',
                image: '/images/achievements/mobile-app.jpg',
                award: 'Emas',
            },
            {
                id: 4,
                title: 'Juara 3 Robotika',
                category: 'Teknik Otomasi Industri',
                year: '2023',
                level: 'Nasional',
                description:
                    'Tim robotika berhasil masuk 3 besar dalam kompetisi robot line follower nasional',
                image: '/images/achievements/robotics.jpg',
                award: 'Perunggu',
            },
            {
                id: 5,
                title: 'Best Innovation Award',
                category: 'Multimedia',
                year: '2023',
                level: 'Internasional',
                description:
                    'Proyek video dokumenter meraih penghargaan inovasi terbaik di festival film pelajar ASEAN',
                image: '/images/achievements/multimedia.jpg',
                award: 'Khusus',
            },
            {
                id: 6,
                title: 'Juara 1 Cyber Security',
                category: 'Keamanan Siber',
                year: '2023',
                level: 'Nasional',
                description:
                    'Tim cyber security menjadi champion dalam kompetisi ethical hacking tingkat nasional',
                image: '/images/achievements/cybersec.jpg',
                award: 'Emas',
            },
        ],
        [],
    );

    const achievementsData =
        achievements.length > 0 ? achievements : defaultAchievements;

    // Convert achievement data to facility format for carousel
    const facilityFormattedData: FacilityItem[] = useMemo(
        () =>
            achievementsData.map((achievement) => ({
                id: achievement.id,
                title: achievement.title,
                image: achievement.image || '/images/achievements/default.jpg',
                description: `${achievement.category} • ${achievement.year} • ${achievement.level} • ${achievement.award || 'Prestasi'} - ${achievement.description}`,
            })),
        [achievementsData],
    );

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

                {/* Statistics Bar */}
                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#2ECC71] mb-2">50+</div>
                        <div className="text-sm text-gray-600 font-medium">Total Prestasi</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#2ECC71] mb-2">15+</div>
                        <div className="text-sm text-gray-600 font-medium">Kompetisi Nasional</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#2ECC71] mb-2">5+</div>
                        <div className="text-sm text-gray-600 font-medium">Tingkat Internasional</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#2ECC71] mb-2">25+</div>
                        <div className="text-sm text-gray-600 font-medium">Juara Pertama</div>
                    </div>
                </div> */}

                {/* Achievement Carousel */}
                <div className="relative">
                    <FacilityCarousel
                        facilities={facilityFormattedData}
                        itemsPerPage={4}
                        showNavigation={true}
                        showPagination={true}
                        className="mb-8"
                        ariaLabel="Galeri prestasi SMK Telkom Sidoarjo"
                    />
                </div>

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
