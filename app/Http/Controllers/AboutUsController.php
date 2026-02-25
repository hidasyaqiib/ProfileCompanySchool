<?php

namespace App\Http\Controllers;

class AboutUsController extends Controller
{
    public function profile()
    {
        return inertia('public/about/profile');
    }

    public function facility()
    {
        // Sample facility data - you can replace this with database query
        $facilities = [
            [
                'id' => 1,
                'title' => 'Laboratorium Komputer',
                'image' => '/images/facilities/lab-komputer.jpg',
                'description' => 'Lab komputer dengan perangkat modern untuk pembelajaran programming dan desain',
            ],
            [
                'id' => 2,
                'title' => 'Laboratorium Jaringan',
                'image' => '/images/facilities/lab-jaringan.jpg',
                'description' => 'Fasilitas lengkap untuk praktik jaringan komputer dan administrasi sistem',
            ],
            [
                'id' => 3,
                'title' => 'Laboratorium Telekomunikasi',
                'image' => '/images/facilities/lab-telekomunikasi.jpg',
                'description' => 'Perangkat telekomunikasi terkini untuk pembelajaran teknologi komunikasi',
            ],
            [
                'id' => 4,
                'title' => 'Ruang Multimedia',
                'image' => '/images/facilities/multimedia.jpg',
                'description' => 'Studio multimedia lengkap untuk produksi konten digital dan broadcasting',
            ],
            [
                'id' => 5,
                'title' => 'Perpustakaan Digital',
                'image' => '/images/facilities/perpustakaan.jpg',
                'description' => 'Koleksi buku dan referensi digital dengan akses internet berkecepatan tinggi',
            ],
            [
                'id' => 6,
                'title' => 'Aula Serbaguna',
                'image' => '/images/facilities/aula.jpg',
                'description' => 'Ruang serbaguna untuk berbagai kegiatan sekolah dan acara besar',
            ],
            [
                'id' => 7,
                'title' => 'Laboratorium Robotika',
                'image' => '/images/facilities/lab-robotika.jpg',
                'description' => 'Fasilitas untuk pengembangan dan pembelajaran teknologi robotika',
            ],
            [
                'id' => 8,
                'title' => 'Ruang Server',
                'image' => '/images/facilities/server-room.jpg',
                'description' => 'Infrastruktur server untuk mendukung sistem informasi sekolah',
            ],
        ];

        $meta = [
            'title' => 'Fasilitas - SMK Telkom Sidoarjo',
            'description' => 'Jelajahi fasilitas modern SMK Telkom Sidoarjo yang lengkap untuk mendukung pembelajaran Teknologi dan Informatika. Lab Komputer, Jaringan, Telekomunikasi dengan standar industri.',
            'keywords' => 'fasilitas sekolah, SMK Telkom Sidoarjo, laboratorium komputer, lab jaringan, telekomunikasi, teknologi informasi, pendidikan vokasi',
        ];

        return inertia('public/about/facility', [
            'facilities' => $facilities,
            'meta' => $meta,
        ]);
    }

    public function achievement()
    {
        // Sample achievement data - you can replace this with database query
        $achievements = [
            [
                'id' => 1,
                'title' => 'Juara 1 Lomba Web Design',
                'category' => 'Teknologi Informasi',
                'year' => '2024',
                'level' => 'Nasional',
                'description' => 'Meraih juara pertama dalam kompetisi web design tingkat nasional dengan tema "Digital Innovation for Education"',
                'image' => '/images/achievements/web-design.jpg',
                'award' => 'Emas',
            ],
            [
                'id' => 2,
                'title' => 'Juara 2 Kompetisi Jaringan',
                'category' => 'Teknik Komputer Jaringan',
                'year' => '2024',
                'level' => 'Provinsi',
                'description' => 'Berhasil meraih peringkat kedua dalam lomba konfigurasi jaringan tingkat Jawa Timur',
                'image' => '/images/achievements/network.jpg',
                'award' => 'Perak',
            ],
            [
                'id' => 3,
                'title' => 'Juara 1 Mobile App Development',
                'category' => 'Rekayasa Perangkat Lunak',
                'year' => '2024',
                'level' => 'Regional',
                'description' => 'Aplikasi mobile untuk edukasi lingkungan meraih juara pertama se-Jawa Timur',
                'image' => '/images/achievements/mobile-app.jpg',
                'award' => 'Emas',
            ],
            [
                'id' => 4,
                'title' => 'Juara 3 Robotika',
                'category' => 'Teknik Otomasi Industri',
                'year' => '2023',
                'level' => 'Nasional',
                'description' => 'Tim robotika berhasil masuk 3 besar dalam kompetisi robot line follower nasional',
                'image' => '/images/achievements/robotics.jpg',
                'award' => 'Perunggu',
            ],
            [
                'id' => 5,
                'title' => 'Best Innovation Award',
                'category' => 'Multimedia',
                'year' => '2023',
                'level' => 'Internasional',
                'description' => 'Proyek video dokumenter meraih penghargaan inovasi terbaik di festival film pelajar ASEAN',
                'image' => '/images/achievements/multimedia.jpg',
                'award' => 'Khusus',
            ],
            [
                'id' => 6,
                'title' => 'Juara 1 Cyber Security',
                'category' => 'Keamanan Siber',
                'year' => '2023',
                'level' => 'Nasional',
                'description' => 'Tim cyber security menjadi champion dalam kompetisi ethical hacking tingkat nasional',
                'image' => '/images/achievements/cybersec.jpg',
                'award' => 'Emas',
            ],
        ];

        $meta = [
            'title' => 'Prestasi - SMK Telkom Sidoarjo',
            'description' => 'Jelajahi berbagai prestasi yang telah diraih siswa-siswi SMK Telkom Sidoarjo dalam kompetisi teknologi informasi, akademik, dan ekstrakurikuler tingkat lokal, nasional, hingga internasional.',
            'keywords' => 'prestasi sekolah, SMK Telkom Sidoarjo, kompetisi IT, juara lomba, prestasi siswa, teknologi informasi, pendidikan vokasi, achievement',
        ];

        return inertia('public/about/achievment', [
            'achievements' => $achievements,
            'meta' => $meta,
        ]);
    }
}
