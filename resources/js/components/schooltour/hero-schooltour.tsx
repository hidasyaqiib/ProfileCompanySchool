import React from 'react';
import { motion } from 'framer-motion';

const HeroSchoolTour: React.FC = () => {
    return (
        <section
            className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden px-8 py-40 md:px-34"
            style={{
                backgroundImage: "url('/assets/image/hero-home.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Gradient Overlay — putih di tepi, transparan di tengah */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/100 via-white/50 to-white/30" />

            {/* Content */}
            <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
                {/* Breadcrumb */}
                <motion.p
                    className="font-poppins mb-4 text-sm text-black md:text-base"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Fasilitas <span className="mx-2 text-black">&gt;</span>{' '}
                    <span className="font-medium text-black">Tour Sekolah</span>
                </motion.p>

                {/* Title */}
                <motion.h1
                    className="font-poppins text-5xl leading-tight font-bold text-black md:text-6xl lg:text-7xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    Tour <span className="text-green-500">Sekolah</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="font-poppins mt-5 max-w-xl text-center text-sm leading-relaxed text-black md:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    Temukan berbagai fasilitas canggih dan ruang kreatif yang
                    dirancang untuk mengasah kemampuan teknologi dan inovasi
                    siswa MI NU 02 Situwangi.
                </motion.p>
            </div>
        </section>
    );
};

export default HeroSchoolTour;
