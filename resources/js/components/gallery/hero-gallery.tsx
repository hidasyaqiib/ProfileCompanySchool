import { motion } from 'framer-motion';
import React from 'react';

interface HeroGalleryProps {
    breadcrumbs?: Array<{ label: string; href?: string }>;
    title?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
    heroImage?: string;
    className?: string;
    totalImages?: number;
    categories?: string[];
}

const HeroGallery: React.FC<HeroGalleryProps> = ({
    breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Galeri' }],
    title = 'Galeri MI NU 02 Situwangi',
    description = 'Jelajahi momen-momen terbaik, kegiatan sekolah, prestasi siswa, dan fasilitas modern MI NU 02 Situwangi melalui dokumentasi visual yang menginspirasi. Saksikan perjalanan pendidikan teknologi informasi terdepan.',
    ctaText = 'Jelajahi Galeri',
    ctaLink = '#gallery-showcase',
    heroImage = '/images/gallery-hero.jpg',
    className = '',
    totalImages = 150,
    categories = ['Kegiatan Sekolah', 'Fasilitas', 'Prestasi', 'Pembelajaran'],
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Cpath d='M20 4a16 16 0 100 32 16 16 0 000-32zm0 2a14 14 0 110 28 14 14 0 010-28z'/%3E%3Cpath d='M20 10a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 pt-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    {/* Content Column */}
                    <motion.div
                        className="mt-8 lg:mt-24 space-y-6 lg:pr-8"
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
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
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                    {crumb.href ? (
                                        <a
                                            href={crumb.href}
                                            className="text-gray-500 transition-colors hover:text-gray-700"
                                        >
                                            {crumb.label}
                                        </a>
                                    ) : (
                                        <span
                                            className={
                                                index === breadcrumbs.length - 1
                                                    ? 'font-medium text-[#2ECC71]'
                                                    : 'text-gray-500'
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

                        {/* Gallery Stats */}
                        {/* <div className="grid grid-cols-2 gap-6 py-4">
                            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                                <div className="text-2xl font-bold text-blue-600 mb-1">{totalImages}+</div>
                                <div className="text-sm text-gray-600 font-medium">Total Foto</div>
                            </div>
                            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                                <div className="text-2xl font-bold text-blue-600 mb-1">{categories?.length}+</div>
                                <div className="text-sm text-gray-600 font-medium">Kategori</div>
                            </div>
                        </div> */}

                        {/* Categories Tags */}
                        {/* <div className="flex flex-wrap gap-2">
                            {categories?.map((category, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                                >
                                    {category}
                                </span>
                            ))}
                        </div> */}

                        {/* CTA Button */}
                        <div>
                            <a
                                href={ctaLink}
                                onClick={handleCtaClick}
                                className="inline-flex transform items-center rounded-lg
                   bg-[#2ECC71]
                   px-5 py-3 text-sm
                   sm:px-6 sm:py-4 sm:text-base
                   md:px-8 md:py-4 md:text-sm
                   font-semibold text-white shadow-lg
                   transition-all duration-300 hover:bg-[#27AE60]"
                                aria-label={`${ctaText} - Lihat semua galeri`}
                            >
                                <span>{ctaText}</span>
                                <svg
                                    className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300"
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
                    </motion.div>

                    {/* Image Column */}
                    <motion.div
                        className="relative mt-12 lg:mt-0 order-first lg:order-last"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                    >
                        {/* 3D Perspective Container */}
                        <div className="perspective-1000 relative rotate-y-12 transform">
                            {/* Main Gallery Image */}
                            <div className="relative z-10">
                                <img
                                    src="/assets/image/hero-achievement.png"
                                    alt="Galeri MI NU 02 Situwangi - Dokumentasi kegiatan dan fasilitas sekolah"
                                    className="mx-auto h-auto w-full max-w-lg object-cover"
                                    loading="eager"
                                    fetchPriority="high"
                                />
                                {/* Camera Icon Overlay */}
                                {/* <div className="absolute top-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2h-5L9 1H4zm5 5a3 3 0 106 0 3 3 0 00-6 0z" clipRule="evenodd" />
                                    </svg>
                                </div> */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Wave Separator */}
            <div className="absolute right-0 bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    className="relative block h-16 w-full md:h-24 lg:h-32"
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0,60 C400,-20 1000,90 1440,20 L1440,80 L0,80 Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HeroGallery;
