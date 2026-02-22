import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:h-screen flex items-start justify-center px-4 sm:px-8 lg:px-16 pt-20 sm:pt-24 lg:pt-26 overflow-visible">

            {/* Background layer */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/image/hero-home.webp')" }}
            />

            {/* Content layer - Made larger for mobile */}
            <div className="relative z-10 p-6 sm:p-6 lg:p-8 text-center max-w-5xl mx-auto mt-8 sm:mt-0">
                <p className="font-poppins text-gray-200 text-base sm:text-base lg:text-lg font-medium mb-4 sm:mb-3 lg:mb-4">
                    Selamat Datang di <span className="text-[#AEFF00] font-semibold">MI NU 2 Situwangi!</span>
                </p>
                <h1 className="font-poppins text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                    Generasi Berilmu, Berakhlak, <br className="hidden sm:block" />
                    <span className="text-[#AEFF00] font-semibold leading-tight">& Berprestasi</span>
                </h1>
            </div>

            {/* Hero image - Made larger for mobile */}
            <img
                src="/assets/image/model-hero-dua.webp"
                alt="Hero"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 sm:w-80 md:w-96 lg:w-xl h-auto object-contain"
            />

            {/* Information card - Column layout for mobile */}
            <div className="grid grid-cols-3 absolute w-[90%] max-w-sm sm:max-w-2xl h-auto sm:h-32 bottom-[-60px] sm:bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-[#2ECC71] to-[#27ae60] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-lg p-4 sm:p-6 gap-2 sm:gap-0 sm:space-x-8 z-50">
                <div className="flex flex-col items-center justify-center py-3 sm:py-0">
                    <span className="text-white font-bold text-xl sm:text-2xl">A</span>
                    <span className="text-white font-medium text-xs sm:text-sm text-center">Terakreditasi</span>
                </div>
                <div className="flex flex-col items-center justify-center py-3 sm:py-0 sm:border-x border-white sm:px-8 border-x px-3">
                    <span className="text-white font-bold text-xl sm:text-2xl">30+</span>
                    <span className="text-white font-medium text-xs sm:text-sm text-center">Tenaga Pendidik</span>
                </div>
                <div className="flex flex-col items-center justify-center py-3 sm:py-0">
                    <span className="text-white font-bold text-xl sm:text-2xl">20+</span>
                    <span className="text-white font-medium text-xs sm:text-sm text-center">Prestasi Tahun Ini</span>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
