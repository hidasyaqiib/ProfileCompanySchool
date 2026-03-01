import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="relative flex min-h-[60vh] items-start justify-center overflow-visible px-4 pt-20 sm:min-h-[70vh] sm:px-8 sm:pt-24 lg:h-screen lg:px-16 lg:pt-26">
            {/* Background layer */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/assets/image/hero-home.webp')",
                }}
            />

            {/* Content layer - Made larger for mobile */}
            <div className="relative z-10 mx-auto mt-8 max-w-5xl p-6 text-center sm:mt-0 sm:p-6 lg:p-8">
                <p className="font-poppins mb-4 text-base font-medium text-gray-200 sm:mb-3 sm:text-base lg:mb-4 lg:text-lg">
                    Selamat Datang di{' '}
                    <span className="font-semibold text-[#AEFF00]">
                        MI NU 2 Situwangi!
                    </span>
                </p>
                <h1 className="font-poppins text-3xl leading-tight font-medium text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    Generasi Berilmu, Berakhlak,{' '}
                    <br className="hidden sm:block" />
                    <span className="leading-tight font-semibold text-[#AEFF00]">
                        & Berprestasi
                    </span>
                </h1>
            </div>

            {/* Hero image - Made larger for mobile */}
            <img
                src="/assets/image/model-hero-dua.webp"
                alt="Hero"
                className="absolute bottom-0 left-1/2 h-auto w-80 -translate-x-1/2 transform object-contain sm:w-80 md:w-96 lg:w-xl"
            />

            {/* Information card - Column layout for mobile */}
            <div className="bg-opacity-90 absolute bottom-[-60px] left-1/2 z-50 grid h-auto w-[90%] max-w-sm -translate-x-1/2 transform grid-cols-3 gap-2 rounded-2xl bg-gradient-to-b from-[#2ECC71] to-[#27ae60] p-4 shadow-lg backdrop-blur-md sm:bottom-[-50px] sm:h-32 sm:max-w-2xl sm:gap-0 sm:space-x-8 sm:p-6">
                <div className="flex flex-col items-center justify-center py-3 sm:py-0">
                    <span className="text-xl font-bold text-white sm:text-2xl">
                        A
                    </span>
                    <span className="text-center text-xs font-medium text-white sm:text-sm">
                        Terakreditasi
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center border-x border-white px-3 py-3 sm:border-x sm:px-8 sm:py-0">
                    <span className="text-xl font-bold text-white sm:text-2xl">
                        30+
                    </span>
                    <span className="text-center text-xs font-medium text-white sm:text-sm">
                        Tenaga Pendidik
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center py-3 sm:py-0">
                    <span className="text-xl font-bold text-white sm:text-2xl">
                        20+
                    </span>
                    <span className="text-center text-xs font-medium text-white sm:text-sm">
                        Prestasi Tahun Ini
                    </span>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
