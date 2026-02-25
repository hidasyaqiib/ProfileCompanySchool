<?php

namespace App\Http\Controllers;

class GalleryController extends Controller
{
    public function index()
    {
        // Sample gallery data - you can replace this with database query
        $galleryItems = [
            [
                'id' => 1,
                'title' => 'Upacara Bendera Hari Senin',
                'image' => '/images/gallery/upacara.jpg',
                'description' => 'Kegiatan upacara bendera rutin setiap hari Senin yang diikuti seluruh siswa dan guru dengan khidmat',
                'category' => 'Kegiatan Sekolah',
                'date' => '2024-02-19',
            ],
            [
                'id' => 2,
                'title' => 'Praktikum Jaringan Komputer',
                'image' => '/images/gallery/praktikum-jaringan.jpg',
                'description' => 'Siswa sedang melakukan praktikum konfigurasi jaringan di laboratorium yang dilengkapi perangkat modern',
                'category' => 'Pembelajaran',
                'date' => '2024-02-15',
            ],
            [
                'id' => 3,
                'title' => 'Lomba Web Design Tingkat Nasional',
                'image' => '/images/gallery/lomba-webdesign.jpg',
                'description' => 'Tim SMK Telkom Sidoarjo meraih juara 1 dalam kompetisi web design tingkat nasional',
                'category' => 'Prestasi',
                'date' => '2024-01-20',
            ],
            [
                'id' => 4,
                'title' => 'Laboratorium Multimedia',
                'image' => '/images/gallery/lab-multimedia.jpg',
                'description' => 'Fasilitas studio multimedia lengkap dengan perangkat editing video dan audio profesional',
                'category' => 'Fasilitas',
                'date' => '2024-02-10',
            ],
            [
                'id' => 5,
                'title' => 'Workshop Robotika',
                'image' => '/images/gallery/workshop-robotika.jpg',
                'description' => 'Kegiatan workshop robotika dengan instruktur ahli dari industri teknologi terkemuka',
                'category' => 'Pembelajaran',
                'date' => '2024-02-05',
            ],
            [
                'id' => 6,
                'title' => 'Wisuda Angkatan 2023',
                'image' => '/images/gallery/wisuda.jpg',
                'description' => 'Momen kelulusan siswa angkatan 2023 yang telah siap memasuki dunia kerja dan perguruan tinggi',
                'category' => 'Kegiatan Sekolah',
                'date' => '2023-12-15',
            ],
            [
                'id' => 7,
                'title' => 'Perpustakaan Digital',
                'image' => '/images/gallery/perpustakaan-digital.jpg',
                'description' => 'Area belajar modern dengan akses digital library dan zona diskusi yang nyaman',
                'category' => 'Fasilitas',
                'date' => '2024-01-30',
            ],
            [
                'id' => 8,
                'title' => 'Kompetisi Cyber Security',
                'image' => '/images/gallery/cyber-security.jpg',
                'description' => 'Tim cyber security SMK Telkom Sidoarjo berhasil menjadi juara dalam kompetisi ethical hacking',
                'category' => 'Prestasi',
                'date' => '2024-01-25',
            ],
            [
                'id' => 9,
                'title' => 'Kelas Programming',
                'image' => '/images/gallery/programming-class.jpg',
                'description' => 'Suasana pembelajaran programming dengan metode project-based learning yang interaktif',
                'category' => 'Pembelajaran',
                'date' => '2024-02-12',
            ],
            [
                'id' => 10,
                'title' => 'Lab Server Room',
                'image' => '/images/gallery/server-room.jpg',
                'description' => 'Ruang server dengan infrastruktur IT terdepan untuk mendukung sistem informasi sekolah',
                'category' => 'Fasilitas',
                'date' => '2024-01-15',
            ],
            [
                'id' => 11,
                'title' => 'Pelatihan Industri 4.0',
                'image' => '/images/gallery/industry-training.jpg',
                'description' => 'Program pelatihan teknologi industri 4.0 bekerjasama dengan perusahaan teknologi ternama',
                'category' => 'Pembelajaran',
                'date' => '2024-01-10',
            ],
            [
                'id' => 12,
                'title' => 'Student Innovation Expo',
                'image' => '/images/gallery/innovation-expo.jpg',
                'description' => 'Pameran inovasi siswa menampilkan berbagai project teknologi dan startup digital',
                'category' => 'Kegiatan Sekolah',
                'date' => '2023-12-20',
            ],
        ];

        $meta = [
            'title' => 'Galeri - SMK Telkom Sidoarjo',
            'description' => 'Jelajahi dokumentasi visual kegiatan sekolah, prestasi siswa, dan fasilitas modern SMK Telkom Sidoarjo. Koleksi foto dan video terlengkap dari berbagai momen bersejarah institusi pendidikan teknologi terdepan.',
            'keywords' => 'galeri sekolah, SMK Telkom Sidoarjo, dokumentasi kegiatan, foto sekolah, video kegiatan, prestasi siswa, fasilitas sekolah, teknologi informasi, pendidikan vokasi, gallery',
        ];

        return inertia('public/gallery/gallery', [
            'galleryItems' => $galleryItems,
            'meta' => $meta,
        ]);
    }
}
