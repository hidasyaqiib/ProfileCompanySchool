import { motion } from 'framer-motion';
import React, { useState } from 'react';

export interface SubjectItem {
    id: number;
    name: string;
    description: string;
    category: 'Pelajaran Agama' | 'Pelajaran Umum' | 'Muatan Lokal';
}

interface ListSubjectProps {
    subjects?: SubjectItem[];
}

const categoryConfig: Record<
    string,
    { color: string; bg: string; border: string; dot: string }
> = {
    'Pelajaran Agama': {
        color: 'text-purple-700',
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        dot: 'bg-purple-500',
    },
    'Pelajaran Umum': {
        color: 'text-blue-700',
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        dot: 'bg-blue-500',
    },
    'Muatan Lokal': {
        color: 'text-[#27ae60]',
        bg: 'bg-green-50',
        border: 'border-green-200',
        dot: 'bg-[#2ECC71]',
    },
};

const ALL_CATEGORIES = [
    'Semua',
    'Pelajaran Agama',
    'Pelajaran Umum',
    'Muatan Lokal',
];

const ListSubject: React.FC<ListSubjectProps> = ({ subjects = [] }) => {
    const [activeCategory, setActiveCategory] = useState('Semua');

    const filtered =
        activeCategory === 'Semua'
            ? subjects
            : subjects.filter((s) => s.category === activeCategory);

    return (
        <section className="bg-gray-50 py-16 lg:py-24">
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
                        Mata <span className="text-[#2ECC71]">Pelajaran</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Daftar mata pelajaran yang diajarkan di MI NU 02
                        Situwangi
                    </p>
                    <div className="mt-6 flex justify-center">
                        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#2ECC71] to-[#27ae60]" />
                    </div>
                </motion.div>

                {/* Filter Tabs */}
                <div className="mb-10 flex flex-wrap justify-center gap-3">
                    {ALL_CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                                activeCategory === cat
                                    ? 'bg-[#2ECC71] text-white shadow-md'
                                    : 'border border-gray-200 bg-white text-gray-600 hover:border-[#2ECC71] hover:text-[#2ECC71]'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filtered.map((subject, idx) => {
                            const cfg =
                                categoryConfig[subject.category] ??
                                categoryConfig['Pelajaran Umum'];
                            return (
                                <motion.div
                                    key={subject.id}
                                    className={`rounded-2xl border-2 ${cfg.border} bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.45,
                                        delay: idx * 0.04,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    {/* Icon */}
                                    <div
                                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${cfg.bg}`}
                                    >
                                        <svg
                                            className={`h-6 w-6 ${cfg.color}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.8}
                                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                            />
                                        </svg>
                                    </div>

                                    {/* Category Badge */}
                                    <span
                                        className={`mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${cfg.bg} ${cfg.color}`}
                                    >
                                        <span
                                            className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`}
                                        />
                                        {subject.category}
                                    </span>

                                    <h3 className="mb-2 text-base leading-snug font-bold text-gray-900">
                                        {subject.name}
                                    </h3>
                                    <p className="line-clamp-3 text-sm leading-relaxed text-gray-500">
                                        {subject.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
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
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                        </svg>
                        <h3 className="mb-2 text-lg font-semibold text-gray-700">
                            Belum Ada Mata Pelajaran
                        </h3>
                        <p className="inline-flex items-center gap-1.5 rounded-md border border-yellow-200 bg-yellow-50 px-3 py-2 text-sm text-yellow-700">
                            Data mata pelajaran belum diisi. Silakan tambahkan
                            melalui panel admin.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ListSubject;
