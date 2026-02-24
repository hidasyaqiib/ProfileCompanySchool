import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowForward } from "react-icons/md";

const HeroProfile: React.FC = () => {
    return (
        <section className="bg-gray-100" aria-label="School Profile Hero Section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[500px]">
                    {/* Image Column */}
                    <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-md">
                            <img
                                src="/assets/image/model-profile-dummy.webp"
                                alt="Siswa MI NU 02 Situwangi dalam seragam tradisional"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                                width="400"
                                height="600"
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="order-1 lg:order-2 flex flex-col justify-center space-y-2">
                        {/* Breadcrumb Navigation */}
                        <nav aria-label="Breadcrumb" className="text-sm sm:text-base">
                            <ol className="flex items-center text-gray-500 font-poppins">
                                <li>Tentang kami</li>
                                <li className="mx-2" aria-hidden="true">
                                    <IoIosArrowForward className="inline-block" />
                                </li>
                                <li className="text-gray-800 font-medium" aria-current="page">
                                    Profil Sekolah
                                </li>
                            </ol>
                        </nav>

                        {/* Main Heading */}
                        <header>
                            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold font-poppins text-black leading-tight">
                                Profil <span className="text-[#2ECC71]">Sekolah</span>
                            </h1>
                        </header>

                        {/* Description */}
                        <div className="prose prose-gray max-w-none">
                            <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium font-poppins text-justify leading-relaxed">
                                MI NU 02 Situwangi menerapkan pembelajaran umum dan pendidikan Islam secara terpadu dengan fokus pada pengembangan akademik, akhlak, dan keterampilan keagamaan seperti membaca Al-Qur'an serta pengamalan Ahlussunnah wal Jama'ah. Melalui visi membentuk peserta didik yang berilmu, berakhlakul karimah, dan terampil, madrasah ini berkomitmen menyiapkan siswa untuk melanjutkan pendidikan ke jenjang lebih tinggi dan berperan positif di masyarakat.
                            </p>
                        </div>

                        {/* Call to Action */}
                        <div className="pt-0">
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#27ae60] text-white font-semibold font-poppins rounded-md shadow-md hover:bg-[#2ecc71] focus:outline-none focus:ring-2 focus:ring-[#27ae60] focus:ring-offset-2 transition-colors duration-300 text-sm sm:text-base"
                                aria-label="Jelajahi lebih lanjut tentang profil sekolah"
                            >
                                Jelajahi
                                <MdArrowForward className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroProfile;


