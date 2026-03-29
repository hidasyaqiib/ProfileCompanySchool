import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    BookOpen,
    BookMarked,
    Mic2,
    ScrollText,
    Sunrise,
    Sun,
    Shield,
    GraduationCap,
} from 'lucide-react';

interface Program {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const programs: Program[] = [
    {
        icon: <BookOpen size={24} />,
        title: 'Hafalan Asmaul Husna',
        description: 'Menghafal 99 nama-nama Allah beserta artinya.',
    },
    {
        icon: <BookMarked size={24} />,
        title: 'Hafalan Juz 30',
        description: "Menghafal Al-Qur'an Juz 30 secara tartil dan fasih.",
    },
    {
        icon: <Mic2 size={24} />,
        title: 'Murotal',
        description: "Membaca Al-Qur'an dengan lantunan yang merdu dan benar.",
    },
    {
        icon: <ScrollText size={24} />,
        title: 'Hafalan Hadits',
        description: 'Menghafal hadits-hadits pilihan Rasulullah SAW.',
    },
    {
        icon: <Sunrise size={24} />,
        title: 'Sholat Dhuha Berjamaah',
        description: 'Membiasakan sholat dhuha berjamaah setiap pagi.',
    },
    {
        icon: <Sun size={24} />,
        title: 'Sholat Dhuhur Berjamaah',
        description: 'Melaksanakan sholat dhuhur berjamaah setiap hari.',
    },
    {
        icon: <Shield size={24} />,
        title: 'Pramuka',
        description: 'Pembentukan karakter dan kedisiplinan melalui pramuka.',
    },
    {
        icon: <GraduationCap size={24} />,
        title: 'Bimbingan Mapel',
        description:
            'Bimbingan belajar mata pelajaran unggulan secara intensif.',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
};

const SchoolProgram: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-gray-50 px-4 py-20 md:px-16">
            {/* Decorative background blur */}
            <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#2ECC71]/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#2ECC71]/10 blur-3xl" />

            {/* Header */}
            <motion.div
                className="relative mb-14 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="font-poppins text-sm font-semibold tracking-widest text-[#2ECC71] uppercase">
                    Keunggulan Kami
                </span>
                <h2 className="font-poppins mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
                    Program Madrasah
                </h2>
                <p className="font-poppins mx-auto mt-3 max-w-2xl text-sm text-gray-500 md:text-base">
                    Berbagai program unggulan yang dirancang untuk membentuk
                    karakter islami dan prestasi akademik siswa MI NU 02
                    Situwangi.
                </p>

                {/* Divider */}
                <div className="mx-auto mt-6 flex items-center justify-center gap-2">
                    <div className="h-0.5 w-10 rounded-full bg-[#2ECC71]" />
                    <div className="h-2 w-2 rounded-full bg-[#2ECC71]" />
                    <div className="h-0.5 w-10 rounded-full bg-[#2ECC71]" />
                </div>
            </motion.div>

            {/* Grid Cards */}
            <motion.div
                className="relative mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
            >
                {programs.map((program, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{ y: -6 }}
                        className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#2ECC71]/40 hover:shadow-md"
                    >
                        {/* Number badge */}
                        <div className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 transition-colors duration-300 group-hover:bg-[#2ECC71]/10">
                            <span className="font-poppins text-xs font-bold text-gray-400 group-hover:text-[#2ECC71]">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                        </div>

                        {/* Icon */}
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2ECC71]/10 text-[#2ECC71] transition-all duration-300 group-hover:bg-[#2ECC71] group-hover:text-white">
                            {program.icon}
                        </div>

                        {/* Title */}
                        <h3 className="font-poppins mb-2 text-sm font-bold text-gray-900 md:text-base">
                            {program.title}
                        </h3>

                        {/* Description */}
                        <p className="font-poppins text-xs leading-relaxed text-gray-500">
                            {program.description}
                        </p>

                        {/* Accent line bottom */}
                        <div className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-[#2ECC71] transition-all duration-500 group-hover:w-full" />
                    </motion.div>
                ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
                className="relative mt-14 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <p className="font-poppins text-sm text-gray-500">
                    Tertarik bergabung?{' '}
                    <span className="font-semibold text-[#2ECC71]">
                        Daftarkan putra-putri Anda sekarang!
                    </span>
                </p>
            </motion.div>
        </section>
    );
};

export default SchoolProgram;
