import React from "react";

const VisiMission: React.FC = () => {
    return (
        <section className="flex grid grid-cols-2 item-center justify-center h-150 px-16 pt-32 bg-gray-100">
            {/* left column */}
            <div className="px-16 py-2">
                <h1 className="text-[#2ECC71] font-poppins text-4xl font-semibold">
                    Visi <span className="text-black">&</span> Misi <span className="text-black">Sekolah</span>
                </h1>
                <p className="mt-4 text-gray-700 font-medium font-poppins text-justify leading-relaxed">
                    Visi MI NU 02 Situwangi adalah "Terwujudnya peserta didik yang berilmu, berakhlakul karimah, dan terampil." Misi madrasah ini meliputi: 1) Menyelenggarakan pendidikan Islam yang terpadu untuk mengembangkan potensi akademik dan keagamaan siswa. 2) Membangun karakter peserta didik melalui pembinaan akhlak mulia sesuai ajaran Ahlussunnah wal Jama'ah. 3) Meningkatkan keterampilan siswa dalam berbagai bidang untuk mempersiapkan mereka menghadapi tantangan masa depan. 4) Menciptakan lingkungan belajar yang kondusif dan mendukung perkembangan holistik peserta didik.
                </p>
            </div>

            {/* right column */}
            <div className="px-16 py-2">
                <img src="/assets/image/visi-mission.webp" alt="Visi Mission" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
        </section>
    )
}

export default VisiMission;
