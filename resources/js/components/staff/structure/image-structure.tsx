import React from 'react';
import { motion } from 'framer-motion';
import { Info, Network } from 'lucide-react';

interface Structure {
    id: number;
    name: string;
    photo: string;
    created_at: string;
}

interface ImageStructureProps {
    structures: Structure[];
}

const ImageStructure: React.FC<ImageStructureProps> = ({ structures }) => {
    if (structures.length === 0) {
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
                            <Network className="h-10 w-10 text-gray-300" />
                        </div>

                        {/* Title */}
                        <p className="font-poppins mb-4 text-base font-semibold text-gray-500">
                            Struktur Organisasi Belum Tersedia
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
            {/* Wave Transition dari Hero (bg abu-abu) ke section ini (bg putih) */}
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

            <div className="mx-auto max-w-[1800px] px-12 pt-16 pb-24">
                <div className="space-y-24">
                    {structures.map((structure, index) => (
                        <motion.div
                            key={structure.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="w-full"
                        >
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="font-poppins mb-12 text-center text-4xl font-bold text-gray-900 md:text-4xl lg:text-5xl"
                            >
                                {structure.name}
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.92 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className="relative w-full overflow-hidden rounded-2xl bg-white p-6 shadow-[0_0_20px_rgba(0,0,0,0.12)]"
                            >
                                <div className="w-full">
                                    <img
                                        src={`/storage/${structure.photo}`}
                                        alt={structure.name}
                                        className="h-auto w-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageStructure;
