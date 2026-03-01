import { Search } from 'lucide-react';
import React, { useState } from 'react';

interface HeroNewsProps {
    search: string;
    onSearchChange: (value: string) => void;
    onSearchSubmit: () => void;
    totalNews?: number;
}

const HeroNews: React.FC<HeroNewsProps> = ({
    search,
    onSearchChange,
    onSearchSubmit,
    totalNews,
}) => {
    const [activeFilter, setActiveFilter] = useState('Semua');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearchSubmit();
        }
    };

    return (
        <section className="bg-gray-50 py-16 md:py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="mb-2 text-4xl md:text-5xl font-bold text-gray-900">
                        <span className="text-emerald-600">Informasi Terkini</span>{' '}
                        dan{' '}
                        <span className="text-red-600">Berita</span>
                    </h1>
                    <p className="text-xl text-gray-700 font-medium">
                        Menarik MI NU 02 Situwangi
                    </p>

                    {totalNews !== undefined && totalNews > 0 && (
                        <p className="mt-2 text-sm text-gray-500">
                            {totalNews} berita tersedia
                        </p>
                    )}
                    {totalNews === 0 && (
                        <p className="mt-2 text-sm text-gray-500">
                            Tidak ada berita tersedia
                        </p>
                    )}
                </div>

                {/* Search Bar */}
                <div className="mb-8 mx-auto max-w-2xl">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => onSearchChange(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Cari berita..."
                            className="w-full rounded-full border border-gray-200 bg-white py-4 pl-12 pr-20 text-gray-900 placeholder-gray-500 shadow-sm transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
                        />
                        <button
                            onClick={onSearchSubmit}
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
                        >
                            Cari
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroNews;
