import React from 'react';
import { motion } from 'framer-motion';

const HeroCurriculum: React.FC = () => {
    return (
        <section className="flex flex-col bg-gray-100">
            <div className="lg:item-center flex min-h-[37.5rem] flex-col px-4 pt-32 md:grid md:grid-cols-2 md:px-16 lg:justify-center">
                {/* left column */}
                <motion.div
                    className="relative hidden px-4 py-2 md:block md:px-16"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <motion.img
                        src="/assets/image/model-profile-dummy.webp"
                        alt="Kurikulum"
                        className="absolute bottom-20 left-25 hidden h-auto w-md rounded-lg lg:block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: 'easeOut',
                        }}
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
                        Tentang Kami{' '}
                        <span className="mx-2 text-gray-500">&gt;</span>{' '}
                        <span className="text-gray-800">Kurikulum</span>
                    </motion.p>

                    <motion.h1
                        className="font-poppins text-3xl font-semibold text-black md:text-5xl lg:text-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        Kurikulum{' '}
                        <span className="text-[#2ECC71]">Sekolah</span>
                    </motion.h1>

                    <motion.p
                        className="font-poppins mt-4 text-justify text-sm leading-relaxed font-medium text-gray-700 md:text-base"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        Kurikulum kami dirancang untuk membentuk generasi unggul
                        yang kompeten di bidang teknologi dan informatika,
                        sesuai dengan kebutuhan industri dan perkembangan zaman.
                    </motion.p>
                </motion.div>
            </div>

            {/* Wave Transition */}
            <div className="w-full overflow-hidden bg-white leading-none">
                <svg
                    className="relative block h-16 w-full md:h-24 lg:h-32"
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0,60 C400,0 1000,100 1440,40 L1440,0 L0,0 Z"
                        fill="#f3f4f6"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HeroCurriculum;
