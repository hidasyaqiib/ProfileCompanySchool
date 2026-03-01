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
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-gray-100 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* School Info Section */}
                    <div className="lg:col-span-1">
                        <div className="mb-4 flex items-center">
                            <img
                                src="/assets/image/logo.webp"
                                alt="SMK Telkom Sidoarjo"
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

                        {/* Social Media */}
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

                    {/* Menu Utama */}
                    <div>
                        <h4 className="mb-4 font-semibold text-gray-900">
                            Menu Utama
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    Beranda
                                </Link>
                            </li>
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
                                    href="/jurusan"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    Profil Jurusan
                                </Link>
                            </li>
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
                                    href="/lab-tour"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    Lab Tour
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/trial-class"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    Trial Class
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

                    {/* Berita Sekolah */}
                    <div>
                        <h4 className="mb-4 font-semibold text-gray-900">
                            Berita Sekolah
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/kegiatan"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    Kegiatan Sekolah
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
                            <li>
                                <Link
                                    href="/pengumuman"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    Pengumuman
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/kemitraan"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    Kemitraan & Kerja Sama
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/karya-inovasi"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    Karya & Inovasi Siswa
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/artikel-edukasi"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    Artikel & Edukasi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/alumni"
                                    className="text-sm text-gray-600 transition-colors hover:text-teal-700"
                                >
                                    Alumni
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Lokasi & Statistik */}
                    <div>
                        <h4 className="mb-4 font-semibold text-gray-900">
                            Lokasi Sekolah
                        </h4>
                        <div className="mb-6">
                            <div className="mb-3 flex h-32 w-full items-center justify-center rounded-lg bg-gray-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.180845554333!2d109.50769207500157!3d-7.445234092565851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65533b7aaec265%3A0xb2390ac965f8546!2sMI%20NU%2002%20SITUWANGI!5e0!3m2!1sen!2sid!4v1770285610892!5m2!1sen!2sid"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Lokasi MI NU 02 Situwangi"
                                    className="h-full w-full rounded-lg"
                                />
                            </div>
                        </div>

                        <div>
                            <h4 className="mb-4 font-semibold text-gray-900">
                                Pengunjung Website
                            </h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex justify-between">
                                    <span>Pengunjung Hari ini :</span>
                                    <span className="font-medium">0</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Pengunjung Bulan ini :</span>
                                    <span className="font-medium">0</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Pengunjung Tahun ini :</span>
                                    <span className="font-medium">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
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
