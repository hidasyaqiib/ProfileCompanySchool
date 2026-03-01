import React from 'react';
import { FiEye } from 'react-icons/fi';
import { HiOutlineClipboardList } from 'react-icons/hi';

const VisiMission: React.FC = () => {
    return (
        <section className="bg-white" aria-label="Visi dan Misi Sekolah">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    {/* Content Column */}
                    <div className="flex flex-col justify-center space-y-8">
                        {/* Section Header */}
                        <header>
                            <h2 className="font-poppins text-2xl font-semibold sm:text-3xl lg:text-4xl">
                                <span className="text-[#2ECC71]">Visi</span>
                                <span className="text-black"> & Misi </span>
                                <span className="text-black">Sekolah</span>
                            </h2>
                        </header>

                        {/* Vision Section */}
                        <article
                            className="flex items-start gap-4"
                            aria-labelledby="vision-heading"
                        >
                            <div
                                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#2ECC71] sm:h-12 sm:w-12"
                                aria-hidden="true"
                            >
                                <FiEye className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                            </div>
                            <div className="flex-1 space-y-2">
                                <h3
                                    id="vision-heading"
                                    className="font-poppins text-xl font-semibold text-black sm:text-2xl"
                                >
                                    Visi Sekolah
                                </h3>
                                <p className="font-poppins text-sm leading-relaxed text-gray-700 sm:text-base">
                                    Menjadi institusi pendidikan unggulan yang
                                    menghasilkan lulusan berkarakter, berwawasan
                                    global, dan siap menghadapi tantangan masa
                                    depan melalui pembelajaran inovatif dan
                                    lingkungan yang mendukung.
                                </p>
                            </div>
                        </article>

                        {/* Mission Section */}
                        <article
                            className="flex items-start gap-4"
                            aria-labelledby="mission-heading"
                        >
                            <div
                                className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#2ECC71] sm:h-12 sm:w-12"
                                aria-hidden="true"
                            >
                                <HiOutlineClipboardList className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                            </div>
                            <div className="flex-1 space-y-4">
                                <h3
                                    id="mission-heading"
                                    className="font-poppins text-xl font-semibold text-black sm:text-2xl"
                                >
                                    Misi Sekolah
                                </h3>
                                <ol
                                    className="font-poppins space-y-3 text-sm text-gray-700 sm:text-base"
                                    role="list"
                                >
                                    {[
                                        'Menyelenggarakan proses pembelajaran yang inovatif dan berpusat pada siswa.',
                                        'Mengembangkan karakter dan nilai-nilai moral pada setiap siswa.',
                                        'Menyediakan fasilitas pendidikan yang mendukung pembelajaran efektif.',
                                        'Mendorong partisipasi aktif dari komunitas sekolah, termasuk orang tua dan masyarakat.',
                                        'Mempersiapkan siswa untuk menghadapi tantangan global melalui penguasaan teknologi dan bahasa asing.',
                                    ].map((mission, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3"
                                            role="listitem"
                                        >
                                            <span
                                                className="min-w-[24px] flex-shrink-0 text-base font-bold text-[#2ECC71] sm:text-lg"
                                                aria-label={`Misi nomor ${index + 1}`}
                                            >
                                                {index + 1}.
                                            </span>
                                            <span className="leading-relaxed">
                                                {mission}
                                            </span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </article>

                        {/* Footer Note */}
                        <footer className="font-poppins text-xs leading-relaxed text-gray-600 sm:text-sm">
                            Visi dan misi ini menjadi arah langkah MI NU 02
                            Situwangi dalam mencetak generasi unggul.
                        </footer>
                    </div>

                    {/* Image Column */}
                    <div className="order-first flex items-center justify-center lg:order-last">
                        <div className="w-full max-w-sm sm:max-w-md">
                            <img
                                src="/assets/image/model-profile-dummy.webp"
                                alt="Siswa MI NU 02 Situwangi menunjukkan semangat belajar dan karakter unggul"
                                className="h-auto w-full object-cover"
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
