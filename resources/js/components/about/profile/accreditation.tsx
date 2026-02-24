import React from "react";
import { FaEye } from "react-icons/fa";

const Accreditation: React.FC = () => {
    return (
        <section className="bg-gray-50" aria-label="Akreditasi Sekolah">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Image Column */}
                    <div className="flex justify-center items-center order-2 lg:order-1">
                        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                            <img
                                src="/assets/image/accreditation.webp"
                                alt="Sertifikat Akreditasi A MI NU 02 Situwangi dari BAN-S/M"
                                className="w-sm h-auto object-contain"
                                loading="lazy"
                                width="400"
                                height="600"
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex flex-col justify-center space-y-6 order-1 lg:order-2">
                        {/* Main Heading */}
                        <header>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-poppins leading-tight">
                                Terakreditasi <span className="text-[#27ae60]">A</span>
                            </h2>
                        </header>

                        {/* Accreditation Details */}
                        <div className="prose prose-gray max-w-none">
                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-poppins">
                                Berdasarkan Keputusan Badan Akreditasi Nasional Sekolah/Madrasah
                                Nomor: <strong className="text-gray-800">036/BAN-PDM/SK/2023</strong>, menyatakan bahwa MI NU 02 Situwangi
                                <span className="font-semibold text-[#27ae60]"> Terakreditasi A (UNGGUL)</span>
                                {' '}dengan nilai <strong className="text-[#27ae60]">92</strong>.
                                Akreditasi ini berlaku hingga <strong className="text-gray-800">29 Agustus 2028</strong>.
                            </p>
                        </div>

                        {/* Call to Action */}
                        <div className="pt-2">
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#27ae60] text-white font-semibold font-poppins rounded-md shadow-md hover:bg-[#2ecc71] focus:outline-none focus:ring-2 focus:ring-[#27ae60] focus:ring-offset-2 transition-colors duration-300 text-sm sm:text-base"
                                aria-label="Lihat sertifikat akreditasi lengkap"
                            >
                                <FaEye className="w-4 h-4" aria-hidden="true" />
                                Lihat Sertifikat
                            </button>
                        </div>

                        {/* Additional Info */}
                        <aside className="text-xs sm:text-sm text-gray-500 font-poppins">
                            <p>Akreditasi merupakan pengakuan mutu dari Badan Akreditasi Nasional terhadap kualitas pendidikan di madrasah.</p>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accreditation;
