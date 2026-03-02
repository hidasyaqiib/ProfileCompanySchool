import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface Teacher {
    id: number;
    name: string;
    position: string;
    photo: string | null;
    type: 'Teacher' | 'Staff' | 'Chief';
    motto: string | null;
    last_education: string | null;
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
                        className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6"
                    >
                        <div className="flex items-start gap-3">
                            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
                            <div>
                                <h3 className="mb-1 font-semibold text-blue-900">
                                    Data Kepala Sekolah Belum Tersedia
                                </h3>
                                <p className="text-sm text-blue-800">
                                    Silakan hubungi administrator untuk
                                    informasi lebih lanjut.
                                </p>
                            </div>
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
                                            src={`/storage/${chief.photo}`}
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
