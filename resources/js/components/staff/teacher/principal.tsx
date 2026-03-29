import React from 'react';
import { motion } from 'framer-motion';
import { Info, School } from 'lucide-react';

interface Teacher {
    id: number;
    name: string;
    position: string;
    photo: string | null;
    type: 'Teacher' | 'Staff' | 'Chief';
    motto: string | null;
    last_education: string | null;
    image_url?: string;
}

interface PrincipalProps {
    chiefs: Teacher[];
}

const Principal: React.FC<PrincipalProps> = ({ chiefs }) => {
    if (chiefs.length === 0) {
        return (
            <section className="relative bg-white">
                {/* Wave Transition */}
                <div className="w-full overflow-hidden leading-none">
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

                <div className="mx-auto max-w-2xl px-4 pt-8 pb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 px-10 py-14"
                    >
                        {/* Icon */}
                        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-100">
                            <School className="h-10 w-10 text-gray-300" />
                        </div>

                        {/* Title */}
                        <p className="font-poppins mb-4 text-base font-semibold text-gray-500">
                            Data Kepala Sekolah Belum Tersedia
                        </p>

                        {/* Bar Notifikasi */}
                        <div className="flex w-full items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2.5">
                            <Info className="h-4 w-4 flex-shrink-0 text-amber-500" />
                            <p className="font-poppins text-sm text-amber-700">
                                Silakan periksa kembali nanti atau hubungi
                                administrator.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="relative bg-white">
            {/* Wave Transition dari section sebelumnya */}
            <div className="w-full overflow-hidden leading-none">
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

            <div className="px-6 pt-8 pb-20 md:px-16">
                <div className="mx-auto max-w-6xl">
                    {chiefs.map((chief, index) => (
                        <motion.div
                            key={chief.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="flex flex-col items-center gap-12 md:flex-row md:items-start"
                        >
                            {/* Photo */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="w-full flex-shrink-0 md:w-80"
                            >
                                <div className="overflow-hidden rounded-2xl border border-dashed border-gray-300 bg-gray-50">
                                    {chief.photo ? (
                                        <img
                                            src={chief.image_url}
                                            alt={chief.name}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-96 items-center justify-center bg-gray-100">
                                            <span className="text-gray-400">
                                                Foto tidak tersedia
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>

                            {/* Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className="flex-1"
                            >
                                {/* Badge */}
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="font-poppins mb-2 text-lg text-gray-500"
                                >
                                    Kepala Madrasah{' '}
                                    <span className="font-semibold text-[#2ECC71]">
                                        MI NU 02 Situwangi
                                    </span>
                                </motion.p>

                                {/* Name */}
                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.45 }}
                                    className="font-poppins text-4xl font-bold text-gray-900 md:text-5xl"
                                >
                                    {chief.name}
                                </motion.h2>

                                {/* Divider */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.55 }}
                                    className="my-6 h-px origin-left bg-gray-200"
                                />

                                {/* Info Grid */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="grid grid-cols-1 gap-8 sm:grid-cols-2"
                                >
                                    {/* Jabatan */}
                                    <div>
                                        <p className="font-poppins text-lg font-semibold text-[#2ECC71]">
                                            Jabatan / Posisi
                                        </p>
                                        <p className="font-poppins mt-1 text-lg text-gray-700">
                                            {chief.position}
                                        </p>
                                    </div>

                                    {/* Pendidikan Terakhir */}
                                    <div>
                                        <p className="font-poppins text-lg font-semibold text-[#2ECC71]">
                                            Pendidikan Terakhir
                                        </p>
                                        <p className="font-poppins mt-1 text-lg text-gray-700">
                                            {chief.last_education ?? (
                                                <span className="text-gray-400 italic">
                                                    Tidak tersedia
                                                </span>
                                            )}
                                        </p>
                                    </div>

                                    {/* Tipe Kepegawaian */}
                                    <div>
                                        <p className="font-poppins text-lg font-semibold text-[#2ECC71]">
                                            Tipe Kepegawaian
                                        </p>
                                        <p className="font-poppins mt-1 text-lg text-gray-700">
                                            Kepala Madrasah
                                        </p>
                                    </div>

                                    {/* Motto */}
                                    <div>
                                        <p className="font-poppins text-lg font-semibold text-[#2ECC71]">
                                            Motto Hidup
                                        </p>
                                        <p className="font-poppins mt-1 text-lg text-gray-700">
                                            {chief.motto ? (
                                                <>"{chief.motto}"</>
                                            ) : (
                                                <span className="text-gray-400 not-italic">
                                                    Tidak tersedia
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Principal;
