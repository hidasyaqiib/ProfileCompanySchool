import React from "react";
import { FiEye } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";

const VisiMission: React.FC = () => {
    return (
        <section className="bg-white" aria-label="Visi dan Misi Sekolah">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Content Column */}
                    <div className="flex flex-col justify-center space-y-8">
                        {/* Section Header */}
                        <header>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-poppins">
                                <span className="text-[#2ECC71]">Visi</span>
                                <span className="text-black"> & Misi </span>
                                <span className="text-black">Sekolah</span>
                            </h2>
                        </header>

                        {/* Vision Section */}
                        <article className="flex items-start gap-4" aria-labelledby="vision-heading">
                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2ECC71] flex items-center justify-center" aria-hidden="true">
                                <FiEye className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="flex-1 space-y-2">
                                <h3 id="vision-heading" className="font-poppins text-xl sm:text-2xl text-black font-semibold">
                                    Visi Sekolah
                                </h3>
                                <p className="font-poppins text-gray-700 text-sm sm:text-base leading-relaxed">
                                    Menjadi institusi pendidikan unggulan yang menghasilkan lulusan berkarakter, berwawasan global, dan siap menghadapi tantangan masa depan melalui pembelajaran inovatif dan lingkungan yang mendukung.
                                </p>
                            </div>
                        </article>

                        {/* Mission Section */}
                        <article className="flex items-start gap-4" aria-labelledby="mission-heading">
                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2ECC71] flex items-center justify-center mt-1" aria-hidden="true">
                                <HiOutlineClipboardList className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="flex-1 space-y-4">
                                <h3 id="mission-heading" className="font-poppins text-xl sm:text-2xl text-black font-semibold">
                                    Misi Sekolah
                                </h3>
                                <ol className="font-poppins text-gray-700 space-y-3 text-sm sm:text-base" role="list">
                                    {[
                                        "Menyelenggarakan proses pembelajaran yang inovatif dan berpusat pada siswa.",
                                        "Mengembangkan karakter dan nilai-nilai moral pada setiap siswa.",
                                        "Menyediakan fasilitas pendidikan yang mendukung pembelajaran efektif.",
                                        "Mendorong partisipasi aktif dari komunitas sekolah, termasuk orang tua dan masyarakat.",
                                        "Mempersiapkan siswa untuk menghadapi tantangan global melalui penguasaan teknologi dan bahasa asing."
                                    ].map((mission, index) => (
                                        <li key={index} className="flex items-start gap-3" role="listitem">
                                            <span className="text-[#2ECC71] font-bold text-base sm:text-lg min-w-[24px] flex-shrink-0" aria-label={`Misi nomor ${index + 1}`}>
                                                {index + 1}.
                                            </span>
                                            <span className="leading-relaxed">{mission}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </article>

                        {/* Footer Note */}
                        <footer className="text-gray-600 font-poppins text-xs sm:text-sm leading-relaxed">
                            Visi dan misi ini menjadi arah langkah MI NU 02 Situwangi dalam mencetak generasi unggul.
                        </footer>
                    </div>

                    {/* Image Column */}
                    <div className="flex justify-center items-center order-first lg:order-last">
                        <div className="w-full max-w-sm sm:max-w-md">
                            <img
                                src="/assets/image/model-profile-dummy.webp"
                                alt="Siswa MI NU 02 Situwangi menunjukkan semangat belajar dan karakter unggul"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                                width="400"
                                height="500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisiMission;
