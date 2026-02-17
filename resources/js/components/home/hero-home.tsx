import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="relative h-screen flex items-start justify-center px-16 pt-26 overflow-visible">

            {/* Background layer */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/image/hero-home.webp')" }}
            />

            {/* Content layer */}
            <div className="relative z-10 p-8 text-center">
                <p className="font-poppins text-gray-200 text-lg font-medium mb-4">
                    Selamat Datang di <span className="text-[#AEFF00] font-semibold">MI NU 2 Situwangi!</span>
                </p>
                <h1 className="font-poppins text-white text-5xl font-medium">
                    Generasi Berilmu, Berakhlak, <br />
                    <span className="text-[#AEFF00] font-semibold leading-tight">& Berprestasi</span>
                </h1>
            </div>
            {/* image asset */}
            <img
                src="/assets/image/model-hero-dua.webp"
                alt="Hero"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-xl h-auto object-contain"
            />

            {/* information card */}

            <div className="grid grid-cols-3 absolute w-2xl h-32 bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#2ECC71] to-[#27ae60] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-lg p-6 space-x-8 z-50">
                <div className="flex flex-col items-center justify-center">
                    <span className="text-white font-bold text-2xl">500+</span>
                    <span className="text-white font-medium text-sm">Siswa Aktif</span>
                </div>
                <div className="flex flex-col items-center justify-center border-x border-white px-8">
                    <span className="text-white font-bold text-2xl">30+</span>
                    <span className="text-white font-medium text-sm">Tenaga Pendidik</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="text-white font-bold text-2xl">20+</span>
                    <span className="text-white font-medium text-sm">Prestasi Tahun Ini</span>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
