<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class AchievementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $defaultDate = Carbon::create(2025, 6, 1)->format('Y-m-d'); // Set default tanggal ke pertengahan 2025

        $achievements = [
            [
                'title_achievement' => 'Juara 1 Pidato B.Inggris Porseni',
                'description' => 'Porseni 2025 Tingkat Kecamatan',
                'level_achievement' => 'District',
            ],
            [
                'title_achievement' => 'Juara 2 Pidato B. Indonesia Putra Porseni',
                'description' => 'Porseni 2025 Tingkat Kecamatan',
                'level_achievement' => 'District',
            ],
            [
                'title_achievement' => 'Juara 2 Lompat Tinggi Putri Porseni',
                'description' => 'Porseni 2025 Tingkat Kecamatan',
                'level_achievement' => 'District',
            ],
            [
                'title_achievement' => 'Juara 2 Lari 60m Putri Porseni',
                'description' => 'Porseni 2025 Tingkat Kecamatan',
                'level_achievement' => 'District',
            ],
            [
                'title_achievement' => 'Juara 2 Volly Putri Porseni',
                'description' => 'Porseni 2025 Tingkat Kecamatan',
                'level_achievement' => 'District',
            ],
            [
                'title_achievement' => 'Juara 3 Volly Putra Porseni',
                'description' => 'Porseni 2025 Tingkat Kecamatan',
                'level_achievement' => 'District',
            ],
            [
                'title_achievement' => 'Juara harapan 1 Pidato B.Indonesia Putri Porseni',
                'description' => 'Porseni 2025 Tingkat Kecamatan',
                'level_achievement' => 'District',
            ],
            [
                'title_achievement' => 'Juara harapan 2 Pidato B. Arab Porseni',
                'description' => 'Porseni 2025 Tingkat Kecamatan',
                'level_achievement' => 'District',
            ],
            [
                'title_achievement' => 'Juara harapan 3 Lompat Jauh Putra Porseni',
                'description' => 'Porseni 2025 Tingkat Kecamatan',
                'level_achievement' => 'District',
            ],
            [
                'title_achievement' => 'Juara harapan 2 lomba Pramuka Garuda Berprestasi',
                'description' => 'Kwarcab Banjarnegara Tahun 2025',
                'level_achievement' => 'Regency', // Kwarcab = Kabupaten
            ],
            [
                'title_achievement' => 'Juara 1 Volly Putri',
                'description' => 'Ikut tim kec. Rakit Porseni 2025 Tingkat Kabupaten',
                'level_achievement' => 'Regency',
            ],
            [
                'title_achievement' => 'Juara Harapan 2 Pidato B. Inggris Porseni',
                'description' => 'Porseni 2025 Tingkat Kabupaten',
                'level_achievement' => 'Regency',
            ],
            [
                'title_achievement' => 'Juara 1 Volly Putri',
                'description' => 'Ikut tim Kab Porseni 2025 Tingkat Provinsi',
                'level_achievement' => 'Provincial', // Tk Prop
            ],
            [
                'title_achievement' => 'Juara 1 Cerdas Cermat KKN Unsoed SD/MI',
                'description' => 'Tingkat Desa Situwangi',
                'level_achievement' => 'District', // Desa masuk ke level terendah di enum (Kecamatan/District)
            ],
            [
                'title_achievement' => 'Juara 1 Pidato B Inggris Porsema',
                'description' => 'Porsema 2025 Tingkat Kabupaten',
                'level_achievement' => 'Regency',
            ],
            [
                'title_achievement' => 'Juara 1 Cipta n Baca Puisi Putra Porsema',
                'description' => 'Porsema 2025 Tingkat Kabupaten',
                'level_achievement' => 'Regency',
            ],
            [
                'title_achievement' => 'Juara 3 Cipta n Baca Puisi Putri Porsema',
                'description' => 'Porsema 2025 Tingkat Kabupaten',
                'level_achievement' => 'Regency',
            ],
            [
                'title_achievement' => 'Juara 3 Pidato B. Jawa Porsema',
                'description' => 'Porsema 2025 Tingkat Kabupaten',
                'level_achievement' => 'Regency',
            ],
            [
                'title_achievement' => 'Juara 3 Catur Putra Porsema',
                'description' => 'Porsema 2025 Tingkat Kabupaten',
                'level_achievement' => 'Regency',
            ],
            [
                'title_achievement' => 'Juara 3 Lari Sprint Putri Porsema',
                'description' => 'Porsema 2025 Tingkat Kabupaten',
                'level_achievement' => 'Regency',
            ]
        ];

        // Tambahkan field default yang nullable/mandatory ke setiap array
        $dataToInsert = array_map(function ($item) use ($defaultDate) {
            return [
                'title_achievement' => $item['title_achievement'],
                'name_student' => null, // Diisi null karena data nama siswa belum spesifik
                'description' => $item['description'],
                'date_achievement' => $defaultDate,
                'level_achievement' => $item['level_achievement'],
                'image' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }, $achievements);

        // Insert ke database
        DB::table('achievement')->insert($dataToInsert);
    }
}
