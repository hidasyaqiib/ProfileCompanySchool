import React from "react";

const SpeechSection: React.FC = () => {
    return (
        <section className="flex grid grid-cols-2 item-center justify-center h-150 px-16 pt-32 bg-gray-100">
            {/* left column */}
            <div className="px-16 py-2">
                <img src="/assets/image/hero-profile.webp" alt="Hero Profile" className="w-full h-auto rounded-lg shadow-lg" />
            </div>

            {/* right column */}
            <div className="px-16 py-2">
                <p className="text-gray-500 mb-4 font-poppins">
                    Tentang kami <span className="mx-2 text-gray-500">&gt;</span> <span className="text-gray-800">Profil Sekolah</span>
                </p>
                <h1 className="text-black font-poppins text-6xl font-semibold">
                    Profil <span className="text-teal-700">Sekolah</span>
                </h1>
                <p>
                    
                </p>
            </div>
        </section>
    )
}

export default SpeechSection;


