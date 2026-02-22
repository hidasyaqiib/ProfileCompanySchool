import React from 'react';
import { Search } from 'lucide-react';

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
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearchSubmit();
        }
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950 py-24 md:py-32">
            {/* Background blobs */}
            <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-emerald-600/10 blur-3xl" />
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-3xl" />

            <div className="container relative z-10 mx-auto px-5">
                <div className="mx-auto max-w-2xl text-center">
                    {/* Badge */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Pusat Informasi & Berita
                    </div>

                    {/* Title */}
                    <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Informasi{' '}
                        <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                            Terkini
                        </span>{' '}
                        &{' '}
                        <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                            Berita
                        </span>
                    </h1>
                    <p className="mb-8 text-base text-gray-400 md:text-lg">
                        Ikuti perkembangan dan update terbaru seputar kegiatan dan prestasi SMK Telkom Sidoarjo
                    </p>

                    {/* Search */}
                    <div className="relative mx-auto max-w-xl">
                        <div className="flex items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-md transition-all duration-300 focus-within:border-emerald-500/50 focus-within:bg-white/8 focus-within:shadow-emerald-500/10">
                            <Search className="ml-4 h-5 w-5 shrink-0 text-gray-400" />
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => onSearchChange(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Cari berita..."
                                className="flex-1 bg-transparent px-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none"
                            />
                            <button
                                onClick={onSearchSubmit}
                                className="m-1.5 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-400 active:scale-95"
                            >
                                Cari
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    {totalNews !== undefined && (
                        <p className="mt-5 text-sm text-gray-500">
                            Menampilkan{' '}
                            <span className="font-semibold text-emerald-400">{totalNews}</span>{' '}
                            berita tersedia
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroNews;