import React from 'react';
import { Link } from '@inertiajs/react';
import {
    Mail,
    Phone,
    MapPin,
    Instagram,
    Facebook,
    Youtube,
} from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-gray-100 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-12">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    {/* ── Kolom 1: Info Sekolah ── */}
                    <div>
                        <div className="mb-4 flex items-center">
                            <img
                                src="/assets/image/logo.webp"
                                alt="MI NU 02 Situwangi"
                                className="mr-3 h-12 w-32 object-contain"
                            />
                        </div>
                        <p className="mb-6 text-sm leading-relaxed text-gray-600">
                            Bersama MI NU 02 Situwangi, menjadi generasi
                            berilmu, berakhlak, dan berprestasi.
                        </p>
                        <div className="mb-6 space-y-3">
                            <div className="flex items-start gap-3">
                                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-700" />
                                <span className="text-sm text-gray-600">
                                    minu02situwangi@gmail.com
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-700" />
                                <span className="text-sm text-gray-600">
                                    +031-99711858
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-700" />
                                <span className="text-sm text-gray-600">
                                    Jl. Partawijaya No.2, Plalar, Situwangi,
                                    Kec. Rakit,
                                    <br />
                                    Banjarnegara, Jawa Tengah
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                target='_blank'
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 transition-colors hover:bg-teal-700"
                            >
                                <Instagram className="h-4 w-4 text-white" />
                            </a>
                            <a
                                href="#"
                                target='_blank'
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 transition-colors hover:bg-teal-700"
                            >
                                <Facebook className="h-4 w-4 text-white" />
                            </a>
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 transition-colors hover:bg-teal-700"
                            >
                                <svg
                                    className="h-4 w-4 fill-current text-white"
                                    viewBox="0 0 448 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                target='_blank'
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 transition-colors hover:bg-teal-700"
                            >
                                <Youtube className="h-4 w-4 text-white" />
                            </a>
                        </div>
                    </div>

                    {/* ── Kolom 2: Menu Utama (Tengah) ── */}
                    <div className="flex flex-col items-start md:items-center">
                        <h4 className="mb-4 font-semibold text-gray-900">
                            Menu Utama
                        </h4>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                            {/* Beranda */}
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    Beranda
                                </Link>
                            </li>
                            {/* Tentang Kami */}
                            <li>
                                <Link
                                    href="/profil"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    Profil Sekolah
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/fasilitas"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    Fasilitas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/prestasi"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    Prestasi
                                </Link>
                            </li>
                            {/* Kepegawaian */}
                            <li>
                                <Link
                                    href="/struktur-organisasi"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    Struktur Organisasi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/guru"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    Profil Guru
                                </Link>
                            </li>
                            {/* Lainnya */}
                            <li>
                                <Link
                                    href="/berita"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    Berita
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/galeri"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    Galeri
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/school-tour"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    Lab Tour
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/ppdb"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    PPDB
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* ── Kolom 3: Lokasi ── */}
                    <div className="flex flex-col">
                        <h4 className="mb-4 font-semibold text-gray-900">
                            Lokasi Sekolah
                        </h4>
                        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.180845554333!2d109.50769207531192!3d-7.4452340925658325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65533b7aaec265%3A0xb2390ac965f8546!2sMI%20NU%2002%20SITUWANGI!5e0!3m2!1sen!2sid!4v1771685384494!5m2!1sid!2sid"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi MI NU 02 Situwangi"
                                className="h-[220px] w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* ── Copyright ── */}
                <div className="mt-12 border-t border-gray-200 pt-6">
                    <p className="text-center text-sm text-gray-600">
                        Copyright © 2025 All right reserved | MI NU 02 SITUWANGI
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
