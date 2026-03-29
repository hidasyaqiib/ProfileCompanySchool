import { motion } from 'framer-motion';
import React from 'react';

export interface ExtracurricularItem {
    id: number;
    name: string;
    description: string;
}

interface ListExtracuricularProps {
    extracurriculars?: ExtracurricularItem[];
}

const ListExtracuricular: React.FC<ListExtracuricularProps> = ({
    extracurriculars = [],
}) => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="mx-auto mb-12 max-w-3xl text-center"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-80px' }}
                >
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Kegiatan{' '}
                        <span className="text-[#2ECC71]">Ekstrakurikuler</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Pengembangan diri siswa melalui berbagai kegiatan
                        ekstrakurikuler
                    </p>
                    <div className="mt-6 flex justify-center">
                        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#2ECC71] to-[#27ae60]" />
                    </div>
                </motion.div>

                {/* Grid */}
                {extracurriculars.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {extracurriculars.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                className="group rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2ECC71]/50 hover:shadow-md"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.45,
                                    delay: idx * 0.04,
                                }}
                                viewport={{ once: true }}
                            >
                                {/* Icon */}
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
                                    <svg
                                        className="h-6 w-6 text-[#2ECC71]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.8}
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
                                </div>

                                <h3 className="mb-2 text-base leading-snug font-bold text-gray-900">
                                    {item.name}
                                </h3>
                                <p className="line-clamp-3 text-sm leading-relaxed text-gray-500">
                                    {item.description}
                                </p>

                                <div className="mt-4 border-t border-gray-100 pt-4">
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-[#27ae60]">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#2ECC71]" />
                                        Ekstrakurikuler
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 py-20 text-center">
                        <svg
                            className="mx-auto mb-4 h-14 w-14 text-gray-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                        </svg>
                        <h3 className="mb-2 text-lg font-semibold text-gray-700">
                            Belum Ada Ekstrakurikuler
                        </h3>
                        <p className="inline-flex items-center gap-1.5 rounded-md border border-yellow-200 bg-yellow-50 px-3 py-2 text-sm text-yellow-700">
                            Data ekstrakurikuler belum diisi. Silakan tambahkan
                            melalui panel admin.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ListExtracuricular;
