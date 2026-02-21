import React from 'react';
import { Link } from '@inertiajs/react';
import {
    Mail,
    Phone,
    MapPin,
    Globe,
    Instagram,
    Facebook,
    MessageCircle,
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
                                    informasi@minu02situwangi.sch.id
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
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 transition-colors hover:bg-teal-700"
                            >
                                <Globe className="h-4 w-4 text-white" />
                            </a>
                            <a
                                href="#"
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 transition-colors hover:bg-teal-700"
                            >
                                <Instagram className="h-4 w-4 text-white" />
                            </a>
                            <a
                                href="#"
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 transition-colors hover:bg-teal-700"
                            >
                                <Facebook className="h-4 w-4 text-white" />
                            </a>
                            <a
                                href="#"
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 transition-colors hover:bg-teal-700"
                            >
                                <MessageCircle className="h-4 w-4 text-white" />
                            </a>
                            <a
                                href="#"
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
                                    href="/lab-tour"
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
                        Copyright © 2025 All right reserved | MINU02
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
