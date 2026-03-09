import { motion } from 'framer-motion';
import React from 'react';
import {
    HiOutlineAcademicCap,
    HiOutlineBookOpen,
    HiOutlineCalculator,
    HiOutlineHeart,
    HiOutlineLightBulb,
    HiOutlineStar,
    HiOutlineUserGroup,
} from 'react-icons/hi';

const visiCards = [
    { icon: HiOutlineAcademicCap, label: 'Unggul Akademik & Nonakademik' },
    { icon: HiOutlineUserGroup, label: 'Santun & Berakhlak Mulia' },
];

const misiCategories = [
    {
        id: 'akademik',
        label: 'Akademik',
        categoryIcon: HiOutlineAcademicCap,
        items: [
            {
                icon: HiOutlineLightBulb,
                title: 'Pengembangan Potensi Siswa',
                description:
                    'Pembelajaran dan bimbingan untuk mengembangkan potensi secara optimal.',
            },
            {
                icon: HiOutlineBookOpen,
                title: 'Bekal Ilmu & Keterampilan',
                description:
                    'Membekali ilmu dan keterampilan untuk kehidupan hidup dan bermasyarakat.',
            },
            {
                icon: HiOutlineCalculator,
                title: 'Penguasaan Perkalian',
                description: 'Menguasai perkalian tanpa alat bantu.',
            },
            {
                icon: HiOutlineCalculator,
                title: 'Penguasaan Pembagian',
                description: 'Menguasai pembagian tanpa alat bantu.',
            },
        ],
    },
    {
        id: 'keagamaan',
        label: 'Keagamaan',
        categoryIcon: HiOutlineStar,
        items: [
            {
                icon: HiOutlineBookOpen,
                title: "Hafalan Juz 'Amma",
                description:
                    "Menghafal Juz 'Amma sebagai dasar pendidikan Al-Qur'an.",
            },
            {
                icon: HiOutlineHeart,
                title: "Pengamalan Ahlussunnah wal Jama'ah",
                description:
                    "Mengamalkan dan melestarikan ajaran Islam Ahlussunnah wal Jama'ah.",
            },
            {
                icon: HiOutlineBookOpen,
                title: "Kemampuan Membaca Al-Qur'an",
                description:
                    "Terampil membaca Al-Qur'an dengan baik dan benar.",
            },
        ],
    },
];

const VisiMission: React.FC = () => {
    return (
        <div id="visi-misi">
            {/* ── VISI ── */}
            <section
                className="bg-gray-50 py-16 sm:py-20 lg:py-24"
                aria-label="Visi Sekolah"
            >
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true, margin: '-80px' }}
                    >
                        {/* Badge */}
                        <span className="mb-8 inline-block rounded-full bg-[#e8f8ef] px-5 py-1.5 text-xs font-semibold tracking-widest text-[#27ae60] uppercase">
                            Visi
                        </span>

                        {/* Quote */}
                        <blockquote className="font-poppins mb-12 text-2xl leading-snug font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                            &ldquo;Membentuk Peserta Didik yang{' '}
                            <em className="font-bold text-[#2ECC71] italic">
                                Berilmu, Berakhlakul&nbsp;Karimah
                            </em>{' '}
                            dan Memiliki Keterampilan Membaca{' '}
                            <em className="font-bold text-[#2ECC71] italic">
                                Al-Qur&apos;an
                            </em>
                            &rdquo;
                        </blockquote>

                        {/* Value Cards */}
                        <div className="grid w-full grid-cols-2 gap-4">
                            {visiCards.map(({ icon: Icon, label }, i) => (
                                <motion.div
                                    key={i}
                                    className="flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-8 shadow-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f8ef]">
                                        <Icon className="h-6 w-6 text-[#27ae60]" />
                                    </div>
                                    <p className="font-poppins text-sm font-semibold text-gray-700 sm:text-base">
                                        {label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── MISI ── */}
            <section
                className="bg-white py-16 sm:py-20 lg:py-24"
                aria-label="Misi Sekolah"
            >
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true, margin: '-80px' }}
                    >
                        <h2 className="font-poppins mb-3 text-3xl font-black sm:text-4xl lg:text-5xl">
                            <span className="text-gray-900">MISI </span>
                            <span className="text-[#2ECC71]">MADRASAH</span>
                        </h2>
                        <p className="font-poppins max-w-md text-sm text-gray-500 sm:text-base">
                            Komitmen kami dalam membentuk generasi unggul dan
                            berakhlak mulia.
                        </p>
                    </motion.div>

                    <div className="space-y-10">
                        {misiCategories.map(
                            ({ id, label, categoryIcon: CatIcon, items }) => (
                                <div key={id}>
                                    {/* Category badge */}
                                    <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-[#2ECC71] px-3 py-1 text-xs font-semibold text-[#27ae60]">
                                        <CatIcon className="h-3.5 w-3.5" />
                                        {label}
                                    </div>

                                    {/* Mission cards grid */}
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        {items.map(
                                            (
                                                {
                                                    icon: Icon,
                                                    title,
                                                    description,
                                                },
                                                i,
                                            ) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                                                    initial={{
                                                        opacity: 0,
                                                        y: 20,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.4,
                                                        delay: i * 0.08,
                                                    }}
                                                    viewport={{ once: true }}
                                                >
                                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#e8f8ef]">
                                                        <Icon className="h-5 w-5 text-[#27ae60]" />
                                                    </div>
                                                    <div>
                                                        <p className="font-poppins mb-1 text-sm font-semibold text-gray-800 sm:text-base">
                                                            {title}
                                                        </p>
                                                        <p className="font-poppins text-xs leading-relaxed text-gray-500 sm:text-sm">
                                                            {description}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            ),
                                        )}
                                    </div>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisiMission;
