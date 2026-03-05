import React from 'react';
import { motion } from 'framer-motion';

const HeroStructure: React.FC = () => {
    return (
        <section className="lg:item-center flex h-150 flex-col bg-gray-100 px-4 pt-32 md:grid md:grid-cols-2 md:px-16 lg:justify-center">
            {/* left column */}
            <motion.div
                className="relative hidden px-4 py-2 md:block md:px-16"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <motion.img
                    src="/assets/image/model-profile-dummy.webp"
                    alt="Hero Profile"
                    className="absolute bottom-20 left-25 hidden h-auto w-md rounded-lg lg:block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                />
            </motion.div>

            {/* right column */}
            <motion.div
                className="px-4 py-5 md:px-16"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <motion.p
                    className="font-poppins mb-4 text-sm text-gray-500 md:text-base"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Kepegawaian <span className="mx-2 text-gray-500">&gt;</span>{' '}
                    <span className="text-gray-800">Struktur Organisasi</span>
                </motion.p>

                <motion.h1
                    className="font-poppins text-3xl font-semibold text-black md:text-5xl lg:text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    Struktur Organisasi{' '}
                    <span className="text-[#2ECC71]">MI NU 02 Situwangi</span>
                </motion.h1>

                <motion.p
                    className="font-poppins mt-4 text-justify text-sm leading-relaxed font-medium text-gray-700 md:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    Diagram ini menyajikan Struktur Organisasi resmi MI NU 02
                    Situwangi, yang merinci pembagian tugas dan tanggung jawab
                    unit kerja. Struktur ini berfungsi sebagai kerangka formal
                    untuk memastikan koordinasi, efisiensi operasional, dan
                    pencapaian target mutu sekolah.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default HeroStructure;
