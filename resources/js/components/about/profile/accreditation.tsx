import { motion } from 'framer-motion';
import React from 'react';
import { FaEye } from 'react-icons/fa';

const Accreditation: React.FC = () => {
    return (
        <section className="bg-gray-50" aria-label="Akreditasi Sekolah">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    {/* Image Column */}
                    <motion.div
                        className="order-2 flex items-center justify-center lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true, margin: '-80px' }}
                    >
                        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                            <img
                                src="/assets/image/accreditation.webp"
                                alt="Sertifikat Akreditasi A MI NU 02 Situwangi dari BAN-S/M"
                                className="h-auto w-sm object-contain"
                                loading="lazy"
                                width="400"
                                height="600"
                            />
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        className="order-1 flex flex-col justify-center space-y-6 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                        viewport={{ once: true, margin: '-80px' }}
                    >
                        {/* Main Heading */}
                        <header>
                            <h2 className="font-poppins text-3xl leading-tight font-bold text-black sm:text-4xl lg:text-5xl">
                                Terakreditasi{' '}
                                <span className="text-[#27ae60]">A</span>
                            </h2>
                        </header>

                        {/* Accreditation Details */}
                        <div className="prose prose-gray max-w-none">
                            <p className="font-poppins text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
                                Berdasarkan Keputusan Badan Akreditasi Nasional
                                Sekolah/Madrasah Nomor:{' '}
                                <strong className="text-gray-800">
                                    036/BAN-PDM/SK/2023
                                </strong>
                                , menyatakan bahwa MI NU 02 Situwangi
                                <span className="font-semibold text-[#27ae60]">
                                    {' '}
                                    Terakreditasi A (UNGGUL)
                                </span>{' '}
                                dengan nilai{' '}
                                <strong className="text-[#27ae60]">92</strong>.
                                Akreditasi ini berlaku hingga{' '}
                                <strong className="text-gray-800">
                                    29 Agustus 2028
                                </strong>
                                .
                            </p>
                        </div>

                        {/* Call to Action */}
                        <div className="pt-2">
                            <button
                                type="button"
                                className="font-poppins inline-flex items-center gap-2 rounded-md bg-[#27ae60] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors duration-300 hover:bg-[#2ecc71] focus:ring-2 focus:ring-[#27ae60] focus:ring-offset-2 focus:outline-none sm:text-base"
                                aria-label="Lihat sertifikat akreditasi lengkap"
                            >
                                <FaEye className="h-4 w-4" aria-hidden="true" />
                                Lihat Sertifikat
                            </button>
                        </div>

                        {/* Additional Info */}
                        <aside className="font-poppins text-xs text-gray-500 sm:text-sm">
                            <p>
                                Akreditasi merupakan pengakuan mutu dari Badan
                                Akreditasi Nasional terhadap kualitas pendidikan
                                di madrasah.
                            </p>
                        </aside>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Accreditation;
