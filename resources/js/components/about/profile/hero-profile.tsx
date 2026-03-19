import { motion } from 'framer-motion';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { MdArrowForward } from 'react-icons/md';

interface HeroProfileProps {
    description?: string;
    heroImage?: string;
}

const HeroProfile: React.FC<HeroProfileProps> = ({
    description,
    heroImage,
}) => {
    return (
        <section
            className="relative overflow-hidden bg-gray-100"
            aria-label="School Profile Hero Section"
        >
            <div className="mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-24 lg:px-8 lg:pt-32 lg:pb-32">
                <div className="grid min-h-[500px] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    {/* Content Column — LEFT */}
                    <motion.div
                        className="flex flex-col justify-center space-y-2"
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        {/* Breadcrumb Navigation */}
                        <nav
                            aria-label="Breadcrumb"
                            className="text-sm sm:text-base"
                        >
                            <ol className="font-poppins flex items-center text-gray-500">
                                <li>Tentang kami</li>
                                <li className="mx-2" aria-hidden="true">
                                    <IoIosArrowForward className="inline-block" />
                                </li>
                                <li
                                    className="font-medium text-gray-800"
                                    aria-current="page"
                                >
                                    Profil Sekolah
                                </li>
                            </ol>
                        </nav>

                        {/* Main Heading */}
                        <header>
                            <h1 className="font-poppins text-2xl leading-tight font-semibold text-black sm:text-4xl lg:text-5xl xl:text-6xl">
                                Madrasah Ibtidaiyah{' '}
                                <span className="text-[#2ECC71]">
                                    NU 02 Situwangi
                                </span>
                            </h1>
                        </header>

                        {/* Description */}
                        <div className="prose max-w-none prose-gray">
                            {description ? (
                                <p className="font-poppins text-justify text-sm leading-relaxed font-medium text-gray-700 sm:text-base lg:text-lg">
                                    {description}
                                </p>
                            ) : (
                                <p className="font-poppins inline-flex items-center gap-1.5 rounded-md border border-yellow-200 bg-yellow-50 px-3 py-2 text-sm text-yellow-700">
                                    <svg
                                        className="h-4 w-4 shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z"
                                        />
                                    </svg>
                                    Konten profil belum diisi. Silakan tambahkan
                                    melalui panel admin.
                                </p>
                            )}
                        </div>

                        {/* Call to Action */}
                        <div className="pt-0">
                            <button
                                type="button"
                                className="font-poppins inline-flex items-center gap-2 rounded-md bg-[#27ae60] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors duration-300 hover:bg-[#2ecc71] sm:text-base"
                                aria-label="Jelajahi lebih lanjut tentang profil sekolah"
                                onClick={() =>
                                    document
                                        .getElementById('visi-misi')
                                        ?.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start',
                                        })
                                }
                            >
                                Jelajahi
                                <MdArrowForward
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </motion.div>

                    {/* Image Column — RIGHT (hidden on mobile) */}
                    <motion.div
                        className="hidden lg:flex lg:justify-end"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: 'easeOut',
                            delay: 0.15,
                        }}
                    >
                        <div className="relative w-full max-w-md">
                            {heroImage ? (
                                <img
                                    src={heroImage}
                                    alt="Siswa MI NU 02 Situwangi dalam seragam tradisional"
                                    className="h-auto w-full object-cover"
                                    loading="lazy"
                                    width="400"
                                    height="600"
                                />
                            ) : (
                                <div className="flex h-64 w-full items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
                                    <div className="text-center">
                                        <svg
                                            className="mx-auto mb-2 h-10 w-10 text-gray-300"
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
                                        <p className="text-sm text-gray-400">
                                            Gambar belum diatur
                                        </p>
                                    </div>
                                </div>
                            )}
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
                        fill="#F9FAFB"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HeroProfile;
