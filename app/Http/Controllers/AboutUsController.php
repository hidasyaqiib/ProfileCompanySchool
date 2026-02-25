<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
                'description' => 'Lab komputer dengan perangkat modern untuk pembelajaran programming dan desain'
            ],
            [
                'id' => 2,
                'title' => 'Laboratorium Jaringan',
                'image' => '/images/facilities/lab-jaringan.jpg',
                'description' => 'Fasilitas lengkap untuk praktik jaringan komputer dan administrasi sistem'
            ],
            [
                'id' => 3,
                'title' => 'Laboratorium Telekomunikasi',
                'image' => '/images/facilities/lab-telekomunikasi.jpg',
                'description' => 'Perangkat telekomunikasi terkini untuk pembelajaran teknologi komunikasi'
            ],
            [
                'id' => 4,
                'title' => 'Ruang Multimedia',
                'image' => '/images/facilities/multimedia.jpg',
                'description' => 'Studio multimedia lengkap untuk produksi konten digital dan broadcasting'
            ],
            [
                'id' => 5,
                'title' => 'Perpustakaan Digital',
                'image' => '/images/facilities/perpustakaan.jpg',
                'description' => 'Koleksi buku dan referensi digital dengan akses internet berkecepatan tinggi'
            ],
            [
                'id' => 6,
                'title' => 'Aula Serbaguna',
                'image' => '/images/facilities/aula.jpg',
                'description' => 'Ruang serbaguna untuk berbagai kegiatan sekolah dan acara besar'
            ],
            [
                'id' => 7,
                'title' => 'Laboratorium Robotika',
                'image' => '/images/facilities/lab-robotika.jpg',
                'description' => 'Fasilitas untuk pengembangan dan pembelajaran teknologi robotika'
            ],
            [
                'id' => 8,
                'title' => 'Ruang Server',
                'image' => '/images/facilities/server-room.jpg',
                'description' => 'Infrastruktur server untuk mendukung sistem informasi sekolah'
            ]
        ];

        $meta = [
            'title' => 'Fasilitas - SMK Telkom Sidoarjo',
            'description' => 'Jelajahi fasilitas modern SMK Telkom Sidoarjo yang lengkap untuk mendukung pembelajaran Teknologi dan Informatika. Lab Komputer, Jaringan, Telekomunikasi dengan standar industri.',
            'keywords' => 'fasilitas sekolah, SMK Telkom Sidoarjo, laboratorium komputer, lab jaringan, telekomunikasi, teknologi informasi, pendidikan vokasi'
        ];

        return inertia('public/about/facility', [
            'facilities' => $facilities,
            'meta' => $meta
        ]);
    }
}
