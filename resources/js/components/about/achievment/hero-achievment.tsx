import React from 'react';

interface HeroAchievementProps {
    breadcrumbs?: Array<{ label: string; href?: string }>;
    title?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
    heroImage?: string;
    className?: string;
}

const HeroAchievement: React.FC<HeroAchievementProps> = ({
    breadcrumbs = [
        { label: 'Tentang Kami' },
        { label: 'Prestasi' }
    ],
    title = 'Prestasi',
    description = 'SMK Telkom Sidoarjo bangga dengan berbagai prestasi yang telah diraih siswa-siswi kami di bidang teknologi informasi, kompetisi akademik, dan kegiatan ekstrakurikuler. Prestasi ini membuktikan kualitas pendidikan dan dedikasi dalam mengembangkan potensi siswa untuk bersaing di tingkat lokal, nasional, maupun internasional.',
    ctaText = 'Lihat Prestasi',
    ctaLink = '#all-achievements',
    heroImage = '/images/achievement-hero.jpg',
    className = ''
}) => {
    const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (ctaLink?.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(ctaLink);
            element?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className={`relative min-h-screen bg-gray-50 overflow-hidden ${className}`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent" />
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232ECC71' fill-opacity='0.1'%3E%3Cpath d='M30 5l6.18 12.52L50 20l-10.82 10.54L42 44l-12-6.32L18 44l2.82-13.46L10 20l13.82-2.48z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content Column */}
                    <div className="mt-24 space-y-4 lg:pr-8">
                        {/* Breadcrumbs */}
                        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm">
                            {breadcrumbs.map((crumb, index) => (
                                <React.Fragment key={crumb.label}>
                                    {index > 0 && (
                                        <svg
                                            className="w-4 h-4 text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                    {crumb.href ? (
                                        <a
                                            href={crumb.href}
                                            className="text-gray-500 hover:text-gray-700 transition-colors"
                                        >
                                            {crumb.label}
                                        </a>
                                    ) : (
                                        <span className={index === breadcrumbs.length - 1 ? "text-[#2ECC71] font-medium" : "text-gray-500"}>
                                            {crumb.label}
                                        </span>
                                    )}
                                </React.Fragment>
                            ))}
                        </nav>

                        {/* Main Title */}
                        <div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                {title}
                            </h1>
                        </div>

                        {/* Description */}
                        <div className="prose prose-lg text-gray-700 leading-relaxed">
                            <p>{description}</p>
                        </div>

                        {/* CTA Button */}
                        <div>
                            <a
                                href={ctaLink}
                                onClick={handleCtaClick}
                                className="inline-flex items-center px-8 py-4 bg-[#2ECC71] hover:bg-[#27ae60] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                aria-label={`${ctaText} - Lihat semua prestasi`}
                            >
                                <span>{ctaText}</span>
                                <svg
                                    className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="relative lg:order-last">
                        {/* 3D Perspective Container */}
                        <div className="relative transform perspective-1000 rotate-y-12">
                            {/* Main Achievement Image */}
                            <div className="relative z-10">
                                <img
                                    src='/assets/image/logo.webp'
                                    alt="Prestasi SMK Telkom Sidoarjo - Pencapaian siswa dalam berbagai kompetisi"
                                    className="w-full h-auto max-w-lg mx-auto object-cover"
                                    loading="eager"
                                    fetchPriority="high"
                                />
                                {/* Achievement Trophy Overlay */}
                                {/* <div className="absolute top-4 right-4 bg-[#2ECC71] text-white p-3 rounded-full shadow-lg">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 2L7.5 7H2l4.5 3.5L5 16l5-3 5 3-1.5-5.5L18 7h-5.5L10 2z" clipRule="evenodd" />
                                    </svg>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave Separator */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
                </svg>
            </div>
        </section>
    );
};

export default HeroAchievement;
