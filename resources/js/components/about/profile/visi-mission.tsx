import React from "react";

const VisiMission: React.FC = () => {
    return (
        <section className="flex grid grid-cols-2 item-center justify-center h-150 px-16 pt-32 bg-white">
            {/* left column */}
            <div className="px-16 py-2">
                <h1 className="text-[#2ECC71] font-poppins text-4xl font-semibold">
                    Visi <span className="text-black">&</span> Misi <span className="text-black">Sekolah</span>
                </h1>

                {/* visi */}
                <div className="mt-8 flex items-start gap-4">
                    {/* Icon bulat hijau visi (eye/vision) */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2ECC71] flex items-center justify-center">
                        {/* Eye icon (vision) */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path d="M1.5 12s4-7 10.5-7 10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12Z" stroke="currentColor" strokeWidth="2" fill="none" />
                            <circle cx="12" cy="12" r="3" fill="white" stroke="currentColor" strokeWidth="2" />
                            <circle cx="12" cy="12" r="1.5" fill="#2ECC71" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <h2 className="font-poppins text-2xl text-black font-semibold mb-1">Visi Sekolah</h2>
                        <p className="font-poppins text-gray-700 text-justify">
                            Menjadi institusi pendidikan unggulan yang menghasilkan lulusan berkarakter, berwawasan global, dan siap menghadapi tantangan masa depan melalui pembelajaran inovatif dan lingkungan yang mendukung.
                        </p>
                    </div>
                </div>

                {/* misi */}
                <div className="mt-8 flex items-start gap-4">
                    {/* Icon bulat hijau misi (checklist) */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2ECC71] flex items-center justify-center mt-1">
                        {/* Checklist icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
                            <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <h2 className="font-poppins text-2xl text-black font-semibold mb-1">Misi Sekolah</h2>
                        <ul className="custom-green-list font-poppins text-gray-700">
                            <li>Menyelenggarakan proses pembelajaran yang inovatif dan berpusat pada siswa.</li>
                            <li>Mengembangkan karakter dan nilai-nilai moral pada setiap siswa.</li>
                            <li>Menyediakan fasilitas pendidikan yang mendukung pembelajaran efektif.</li>
                            <li>Mendorong partisipasi aktif dari komunitas sekolah, termasuk orang tua dan masyarakat.</li>
                            <li>Mempersiapkan siswa untuk menghadapi tantangan global melalui penguasaan teknologi dan bahasa asing.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* right column */}
            <div className="px-16 py-2">
                <img src="/assets/image/visi-mission.webp" alt="Visi Mission" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
        </section>
    )
}

export default VisiMission;
