import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

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
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-2xl"
                    >
                        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6 shadow-sm">
                            <div className="flex items-start">
                                <AlertCircle className="mt-0.5 mr-3 h-6 w-6 flex-shrink-0 text-blue-500" />
                                <div>
                                    <h3 className="mb-2 text-lg font-semibold text-blue-900">
                                        Struktur Organisasi Belum Tersedia
                                    </h3>
                                    <p className="text-sm leading-relaxed text-blue-800">
                                        Maaf, saat ini belum ada data struktur
                                        organisasi yang dapat ditampilkan.
                                        Silakan periksa kembali nanti atau
                                        hubungi administrator untuk informasi
                                        lebih lanjut.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-[1800px] px-12">
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
