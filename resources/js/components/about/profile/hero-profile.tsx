import React from "react";

const SpeechSection: React.FC = () => {
    return (
        <section className="flex grid grid-cols-2 item-center justify-center h-150 px-16 pt-32 bg-gray-100">
            {/* left column */}
            <div className="px-16 py-2">
                <img src="/assets/image/model-profile-dummy.webp" alt="Hero Profile" className="w-md h-auto absolute bottom-64 left-40 rounded-lg " />
            </div>

            {/* right column */}
            <div className="px-16 py-2">
                <p className="text-gray-500 mb-4 font-poppins">
                    Tentang kami <span className="mx-2 text-gray-500">&gt;</span> <span className="text-gray-800">Profil Sekolah</span>
                </p>
                <h1 className="text-black font-poppins text-6xl font-semibold">
                    Profil <span className="text-[#2ECC71]">Sekolah</span>
                </h1>
                <p className="mt-4 text-gray-700 font-medium font-poppins text-justify leading-relaxed">
                    MI NU 02 Situwangi menerapkan pembelajaran umum dan pendidikan Islam secara terpadu, dengan fokus pada pengembangan akademik, akhlak, serta keterampilan keagamaan seperti membaca Al-Qur’an dan pengamalan ajaran Ahlussunnah wal Jama’ah. Melalui visi membentuk peserta didik yang berilmu, berakhlakul karimah, dan terampil, madrasah ini berkomitmen menyiapkan siswa agar siap melanjutkan pendidikan ke jenjang yang lebih tinggi serta mampu berperan positif di masyarakat.
                </p>

                <button className="mt-6 px-6 py-2 bg-[#2ECC71] text-white font-poppins font-semibold rounded-md shadow-md hover:bg-green-600 transition-colors duration-300">
                    Jelajahi
                </button>
            </div>
        </section>
    )
}

export default SpeechSection;


