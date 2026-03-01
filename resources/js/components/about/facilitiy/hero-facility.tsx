import React from 'react';

interface HeroFacilityProps {
    breadcrumbs?: Array<{ label: string; href?: string }>;
    title?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
    heroImage?: string;
    className?: string;
}

const HeroFacility: React.FC<HeroFacilityProps> = ({
    breadcrumbs = [{ label: 'Tentang Kami' }, { label: 'Fasilitas' }],
    title = 'Fasilitas',
    description = 'SMK Telkom Sidoarjo menyediakan fasilitas modern yang lengkap untuk mendukung pembelajaran Teknologi dan Informatika (TI). Kami memiliki Laboratorium (Lab) praktik up-to-date (Lab Komputer, Jaringan, Telekomunikasi) dengan perangkat standar industri. Fasilitas ini memastikan siswa mendapat pengalaman praktikal maksimal, membuat lulusan siap kerja dan unggul dalam keterampilan teknis.',
    ctaText = 'Jelajahi',
    ctaLink = '#all-facilities',
    heroImage = '/images/facility-hero.jpg',
    className = '',
}) => {
    const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (ctaLink?.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(ctaLink);
            element?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <section
            className={`relative min-h-screen overflow-hidden bg-gray-50 ${className}`}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent" />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Content Column */}
                    <div className="mt-24 space-y-4 lg:pr-8">
                        {/* Breadcrumbs */}
                        <nav
                            aria-label="Breadcrumb"
                            className="flex items-center space-x-2 text-sm"
                        >
                            {breadcrumbs.map((crumb, index) => (
                                <React.Fragment key={crumb.label}>
                                    {index > 0 && (
                                        <svg
                                            className="h-4 w-4 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    )}
                                    {crumb.href ? (
                                        <a
                                            href={crumb.href}
                                            className="text-gray-600 transition-colors duration-200 hover:text-gray-900"
                                        >
                                            {crumb.label}
                                        </a>
                                    ) : (
                                        <span
                                            className={
                                                index === breadcrumbs.length - 1
                                                    ? 'font-medium text-gray-900'
                                                    : 'text-gray-600'
                                            }
                                        >
                                            {crumb.label}
                                        </span>
                                    )}
                                </React.Fragment>
                            ))}
                        </nav>

                        {/* Main Title */}
                        <div>
                            <h1 className="text-4xl leading-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                                {title}
                            </h1>
                        </div>

                        {/* Description */}
                        <div className="prose prose-lg leading-relaxed text-gray-700">
                            <p>{description}</p>
                        </div>

                        {/* CTA Button */}
                        <div>
                            <a
                                href={ctaLink}
                                onClick={handleCtaClick}
                                className="inline-flex transform items-center rounded-xl bg-[#2ECC71] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#27ae60] hover:shadow-xl"
                                aria-label={`${ctaText} - Jelajahi semua fasilitas`}
                            >
                                <span>{ctaText}</span>
                                <svg
                                    className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="relative lg:order-last">
                        {/* 3D Perspective Container */}
                        <div className="perspective-1000 relative rotate-y-12 transform">
                            {/* Red Base Platform */}
                            {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-16 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-3xl shadow-2xl"
                                 style={{
                                     clipPath: 'polygon(10% 0%, 90% 0%, 95% 100%, 5% 100%)',
                                     transform: 'rotateX(75deg) translateZ(-20px)'
                                 }}> */}
                            {/* Platform shine effect */}
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-3xl" /> */}
                            {/* </div> */}

                            {/* Main Building Image */}
                            <div className="relative z-10">
                                <img
                                    src="/assets/image/logo.webp"
                                    alt="Fasilitas SMK Telkom Sidoarjo - Gedung sekolah modern dengan laboratorium lengkap"
                                    className="mx-auto h-auto w-full max-w-lg object-cover"
                                    loading="eager"
                                    fetchPriority="high"
                                />

                                {/* Image overlay for depth */}
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl" /> */}
                            </div>
                        </div>

                        {/* Background Glow Effect */}
                        {/* <div className="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-transparent blur-3xl transform scale-150" /> */}
                    </div>
                </div>
            </div>

            {/* Bottom Wave Separator */}
            <div className="absolute right-0 bottom-0 left-0">
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-auto w-full"
                >
                    <path
                        d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HeroFacility;
