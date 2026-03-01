import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { MdArrowForward } from 'react-icons/md';

const HeroProfile: React.FC = () => {
    return (
        <section
            className="bg-gray-100"
            aria-label="School Profile Hero Section"
        >
            <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="grid min-h-[500px] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    {/* Image Column */}
                    <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
                        <div className="relative w-full max-w-md">
                            <img
                                src="/assets/image/model-profile-dummy.webp"
                                alt="Siswa MI NU 02 Situwangi dalam seragam tradisional"
                                className="h-auto w-full object-cover"
                                loading="lazy"
                                width="400"
                                height="600"
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="order-1 flex flex-col justify-center space-y-2 lg:order-2">
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
                                Profil{' '}
                                <span className="text-[#2ECC71]">Sekolah</span>
                            </h1>
                        </header>

                        {/* Description */}
                        <div className="prose prose-gray max-w-none">
                            <p className="font-poppins text-justify text-sm leading-relaxed font-medium text-gray-700 sm:text-base lg:text-lg">
                                MI NU 02 Situwangi menerapkan pembelajaran umum
                                dan pendidikan Islam secara terpadu dengan fokus
                                pada pengembangan akademik, akhlak, dan
                                keterampilan keagamaan seperti membaca Al-Qur'an
                                serta pengamalan Ahlussunnah wal Jama'ah.
                                Melalui visi membentuk peserta didik yang
                                berilmu, berakhlakul karimah, dan terampil,
                                madrasah ini berkomitmen menyiapkan siswa untuk
                                melanjutkan pendidikan ke jenjang lebih tinggi
                                dan berperan positif di masyarakat.
                            </p>
                        </div>

                        {/* Call to Action */}
                        <div className="pt-0">
                            <button
                                type="button"
                                className="font-poppins inline-flex items-center gap-2 rounded-md bg-[#27ae60] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors duration-300 hover:bg-[#2ecc71] focus:ring-2 focus:ring-[#27ae60] focus:ring-offset-2 focus:outline-none sm:text-base"
                                aria-label="Jelajahi lebih lanjut tentang profil sekolah"
                            >
                                Jelajahi
                                <MdArrowForward
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroProfile;
