import React from "react";
import { FiEye } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";

const VisiMission: React.FC = () => {
    return (
        <section className="grid grid-cols-2 gap-8 px-16 py-16 bg-white">
            {/* left column */}
            <div className="flex flex-col justify-center">
                <h1 className="text-[#2ECC71] font-poppins text-4xl font-semibold">
                    Visi <span className="text-black">&</span> Misi <span className="text-black">Sekolah</span>
                </h1>

                {/* visi */}
                <div className="mt-8 flex items-start gap-4">
                    {/* Icon bulat hijau visi (eye/vision) */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2ECC71] flex items-center justify-center">
                        {/* Eye icon (vision) */}
                       <FiEye className="text-white w-6 h-6"/>
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
                        <HiOutlineClipboardList className="text-white w-6 h-6"
                        />
                    </div>
                    <div className="flex-1">
                        <h2 className="font-poppins text-2xl text-black font-semibold mb-4">Misi Sekolah</h2>
                        <ol className="font-poppins text-gray-700 space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 font-bold text-lg min-w-[24px]">1.</span>
                                <span>Menyelenggarakan proses pembelajaran yang inovatif dan berpusat pada siswa.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 font-bold text-lg min-w-[24px]">2.</span>
                                <span>Mengembangkan karakter dan nilai-nilai moral pada setiap siswa.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 font-bold text-lg min-w-[24px]">3.</span>
                                <span>Menyediakan fasilitas pendidikan yang mendukung pembelajaran efektif.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 font-bold text-lg min-w-[24px]">4.</span>
                                <span>Mendorong partisipasi aktif dari komunitas sekolah, termasuk orang tua dan masyarakat.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 font-bold text-lg min-w-[24px]">5.</span>
                                <span>Mempersiapkan siswa untuk menghadapi tantangan global melalui penguasaan teknologi dan bahasa asing.</span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="mt-6 text-gray-600 font-poppins text-sm">
                    Visi dan misi ini menjadi arah langkah MI NU 02 Situwangi dalam mencetak generasi unggul.
                </div>
            </div>

            {/* right column */}
            <div className="flex justify-center items-center">
                <img src="/assets/image/visi-mission.webp" alt="Visi Mission" className="w-full h-auto max-w-md rounded-lg shadow-lg" />
            </div>
        </section>
    )
}

export default VisiMission;
