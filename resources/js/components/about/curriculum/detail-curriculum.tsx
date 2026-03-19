import { motion } from 'framer-motion';
import React from 'react';

export interface CurriculumItem {
    id: number;
    name: string;
    description: string;
}

interface DetailCurriculumProps {
    curricula?: CurriculumItem[];
}

const DetailCurriculum: React.FC<DetailCurriculumProps> = ({
    curricula = [],
}) => {
    const curriculum = curricula[0];

    return (
        <section className="bg-gray-50 py-16 lg:py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="mx-auto mb-12 max-w-3xl text-center"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-80px' }}
                >
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Detail <span className="text-[#2ECC71]">Kurikulum</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Kurikulum yang diterapkan di MI NU 02 Situwangi
                    </p>
                    <div className="mt-6 flex justify-center">
                        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#2ECC71] to-[#27ae60]" />
                    </div>
                </motion.div>

                {curriculum ? (
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: 'easeOut',
                            delay: 0.1,
                        }}
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        <span className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-[#27ae60]">
                            <span className="h-2 w-2 rounded-full bg-[#2ECC71]" />
                            Kurikulum Aktif
                        </span>

                        <h3 className="mt-5 mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                            {curriculum.name}
                        </h3>

                        <div
                            className="mx-auto prose prose-lg max-w-3xl text-left leading-relaxed text-gray-600 prose-gray"
                            dangerouslySetInnerHTML={{
                                __html: curriculum.description,
                            }}
                        />
                    </motion.div>
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-white py-20 text-center">
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
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        <h3 className="mb-2 text-lg font-semibold text-gray-700">
                            Belum Ada Detail Kurikulum
                        </h3>
                        <p className="inline-flex items-center gap-1.5 rounded-md border border-yellow-200 bg-yellow-50 px-3 py-2 text-sm text-yellow-700">
                            Data kurikulum belum diisi. Silakan tambahkan
                            melalui panel admin.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default DetailCurriculum;
