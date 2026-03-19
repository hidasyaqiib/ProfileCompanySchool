<?php

namespace Database\Seeders;

use App\Models\News;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $newsItems = [
            [
                'title' => 'Peringatan Hari Santri Nasional 2024 di MI NU 02 Situwangi',
                'content' => '<p>MI NU 02 Situwangi dengan penuh khidmat memperingati Hari Santri Nasional yang jatuh pada tanggal 22 Oktober 2024. Kegiatan ini diselenggarakan untuk mengenang jasa para santri dalam perjuangan kemerdekaan Indonesia.</p>

<p>Acara dimulai dengan upacara bendera yang diikuti oleh seluruh siswa, guru, dan staf sekolah. Dalam sambutan kepala sekolah, beliau menekankan pentingnya nilai-nilai kesantrian dalam membentuk karakter siswa yang berakhlak mulia.</p>

<p>Rangkaian kegiatan meliputi:</p>
<ul>
<li>Upacara bendera khusus Hari Santri</li>
<li>Pembacaan sejarah perjuangan santri</li>
<li>Lomba karya tulis tentang kesantrian</li>
<li>Pentas seni islami</li>
<li>Doa bersama untuk kemajuan bangsa</li>
</ul>

<p>Kepala sekolah berharap melalui kegiatan ini, para siswa semakin memahami dan mengamalkan nilai-nilai luhur yang diajarkan dalam tradisi pesantren, sehingga dapat menjadi generasi yang cerdas, berkarakter, dan bermanfaat bagi masyarakat.</p>',
                'author' => 'Kepala Sekolah MI NU 02 Situwangi',
                'published_at' => Carbon::now()->subDays(2),
                'slug' => 'peringatan-hari-santri-nasional-2024',
                'status' => 'Published',
            ],
            [
                'title' => 'Prestasi Membanggakan: Juara 1 Lomba Tahfidz Tingkat Kecamatan',
                'content' => '<p>Siswa MI NU 02 Situwangi kembali mengukir prestasi membanggakan dengan meraih juara 1 dalam Lomba Tahfidz Al-Quran tingkat kecamatan yang diselenggarakan oleh Kementerian Agama Kabupaten.</p>

<p>Muhammad Faiz Ramadhan, siswa kelas 6, berhasil mengalahkan 25 peserta dari berbagai madrasah di kecamatan. Faiz menunjukkan kemampuan luar biasa dalam menghafal dan membaca Al-Quran dengan tajwid yang sempurna.</p>

<p>"Saya sangat bangga dengan prestasi Faiz. Ini adalah hasil dari konsistensi latihan dan dukungan penuh dari keluarga serta guru-guru di sekolah," ujar Ustadz Ahmad Ridwan, pembina tahfidz di MI NU 02 Situwangi.</p>

<p>Program tahfidz di MI NU 02 Situwangi telah berjalan selama 5 tahun dengan metode pembelajaran yang menyenangkan. Setiap hari, siswa mendapat bimbingan khusus dari ustadz yang berpengalaman dalam bidang tahfidz.</p>

<p>Prestasi ini semakin memperkuat reputasi MI NU 02 Situwangi sebagai lembaga pendidikan yang tidak hanya unggul dalam akademik, tetapi juga dalam pembinaan spiritual dan akhlak mulia.</p>',
                'author' => 'Tim Redaksi MI NU 02',
                'published_at' => Carbon::now()->subDays(5),
                'slug' => 'juara-1-lomba-tahfidz-tingkat-kecamatan',
                'status' => 'Published',
            ],
            [
                'title' => 'Program Literasi Digital untuk Siswa Kelas 4-6',
                'content' => '<p>MI NU 02 Situwangi meluncurkan program literasi digital terbaru yang ditujukan untuk siswa kelas 4, 5, dan 6. Program ini bertujuan mempersiapkan siswa menghadapi era digital dengan bijak dan bertanggung jawab.</p>

<p>Pembelajaran literasi digital meliputi:</p>
<ul>
<li>Pengenalan teknologi informasi dasar</li>
<li>Cara menggunakan internet dengan aman</li>
<li>Etika berkomunikasi di dunia maya</li>
<li>Mengenal hoaks dan cara menghindarinya</li>
<li>Penggunaan aplikasi edukatif</li>
</ul>

<p>"Program ini sangat penting di era digital saat ini. Kami ingin siswa tidak hanya pandai menggunakan teknologi, tetapi juga memahami dampak positif dan negatifnya," ungkap Ibu Siti Aminah, koordinator program literasi digital.</p>

<p>Fasilitas yang mendukung program ini antara lain laboratorium komputer dengan 20 unit PC, akses internet fiber optik, dan software edukatif berlisensi. Setiap siswa akan mendapat 2 jam pelajaran literasi digital per minggu.</p>

<p>Antusiasme siswa terhadap program ini sangat tinggi. Mereka dengan semangat mengikuti setiap sesi pembelajaran dan menunjukkan kemajuan yang signifikan dalam memahami teknologi digital.</p>',
                'author' => 'Siti Aminah, S.Pd',
                'published_at' => Carbon::now()->subDays(7),
                'slug' => 'program-literasi-digital-siswa-kelas-4-6',
                'status' => 'Published',
            ],
            [
                'title' => 'Kegiatan Bakti Sosial Ramadhan 1445 H',
                'content' => '<p>Menyambut bulan suci Ramadhan 1445 H, MI NU 02 Situwangi mengadakan kegiatan bakti sosial yang melibatkan seluruh civitas sekolah. Kegiatan ini merupakan wujud kepedulian terhadap masyarakat sekitar.</p>

<p>Rangkaian kegiatan bakti sosial meliputi:</p>
<ul>
<li>Pembagian takjil gratis untuk masyarakat</li>
<li>Santunan anak yatim dan dhuafa</li>
<li>Pembersihan masjid dan fasilitas umum</li>
<li>Kajian ramadhan untuk orang tua siswa</li>
<li>Berbagi sembako untuk keluarga kurang mampu</li>
</ul>

<p>Dana kegiatan ini berasal dari infaq para guru, karyawan, dan donasi wali murid yang terkumpul sebesar Rp 15.000.000. Sebanyak 100 paket sembako dan 500 takjil berhasil dibagikan kepada masyarakat.</p>

<p>"Kegiatan ini mengajarkan siswa tentang pentingnya berbagi dan peduli sesama. Nilai-nilai ini sejalan dengan misi sekolah dalam membentuk karakter islami," jelas Ustadz Muhammad Hasan, koordinator kegiatan.</p>

<p>Antusiasme masyarakat sangat tinggi dan memberikan apresiasi positif terhadap kepedulian MI NU 02 Situwangi. Kegiatan seperti ini akan terus dilakukan secara rutin untuk mempererat hubungan sekolah dengan masyarakat.</p>',
                'author' => 'Muhammad Hasan, S.Pd.I',
                'published_at' => Carbon::now()->subDays(10),
                'slug' => 'kegiatan-bakti-sosial-ramadhan-1445-h',
                'status' => 'Published',
            ],
            [
                'title' => 'Penerimaan Siswa Baru Tahun Ajaran 2024/2025',
                'content' => '<p>MI NU 02 Situwangi membuka pendaftaran siswa baru untuk tahun ajaran 2024/2025. Pendaftaran dibuka mulai tanggal 1 Februari hingga 30 April 2024 dengan kuota terbatas 120 siswa.</p>

<h3>Persyaratan Pendaftaran:</h3>
<ul>
<li>Usia minimal 6 tahun per 1 Juli 2024</li>
<li>Fotokopi akta kelahiran</li>
<li>Fotokopi kartu keluarga</li>
<li>Pas foto berwarna 3x4 sebanyak 4 lembar</li>
<li>Surat keterangan sehat dari dokter</li>
<li>Surat keterangan kelakuan baik (bagi pindahan)</li>
</ul>

<h3>Jalur Penerimaan:</h3>
<ul>
<li>Prestasi akademik (10 kursi)</li>
<li>Prestasi non-akademik (10 kursi)</li>
<li>Reguler (100 kursi)</li>
</ul>

<p>Biaya pendaftaran Rp 150.000 sudah termasuk tes masuk dan administrasi. Calon siswa akan mengikuti tes tulis, wawancara, dan tes baca Al-Quran.</p>

<p>"Kami mengundang putra-putri terbaik untuk bergabung di MI NU 02 Situwangi. Sekolah kami berkomitmen memberikan pendidikan berkualitas dengan nilai-nilai islami," kata Kepala Sekolah dalam keterangan resmi.</p>

<p>Informasi lebih lanjut dapat menghubungi kantor sekolah di Jl. Raya Situwangi No. 123 atau melalui telepon (0231) 123456.</p>',
                'author' => 'Panitia PPDB 2024/2025',
                'published_at' => Carbon::now()->subDays(15),
                'slug' => 'penerimaan-siswa-baru-tahun-ajaran-2024-2025',
                'status' => 'Published',
            ],
            [
                'title' => 'Implementasi Kurikulum Merdeka di MI NU 02 Situwangi',
                'content' => '<p>MI NU 02 Situwangi resmi menerapkan Kurikulum Merdeka untuk semua jenjang kelas mulai tahun ajaran 2024/2025. Implementasi ini merupakan upaya sekolah dalam meningkatkan kualitas pembelajaran yang lebih fleksibel dan sesuai dengan kebutuhan siswa.</p>

<p>Perubahan signifikan dalam penerapan Kurikulum Merdeka:</p>
<ul>
<li>Pembelajaran berbasis proyek (Project Based Learning)</li>
<li>Asesmen yang lebih komprehensif</li>
<li>Pengembangan profil pelajar Pancasila</li>
<li>Integrasi teknologi dalam pembelajaran</li>
<li>Penguatan karakter dan akhlak mulia</li>
</ul>

<p>Untuk mendukung implementasi ini, sekolah telah mempersiapkan berbagai fasilitas pembelajaran modern termasuk laboratorium sains, perpustakaan digital, dan ruang multimedia. Seluruh guru juga telah mengikuti pelatihan intensif Kurikulum Merdeka.</p>

<p>"Kurikulum Merdeka memberikan keleluasaan bagi guru untuk mengembangkan pembelajaran yang kreatif dan inovatif. Siswa dapat belajar sesuai dengan minat dan bakatnya," ungkap Ibu Nurul Hidayah, wakil kepala sekolah bidang kurikulum.</p>

<p>Dengan dukungan penuh dari yayasan dan antusiasme dari guru serta siswa, MI NU 02 Situwangi optimis dapat menghasilkan lulusan yang berkompeten, berkarakter, dan siap menghadapi tantangan masa depan.</p>',
                'author' => 'Nurul Hidayah, S.Pd',
                'published_at' => Carbon::now()->subDays(20),
                'slug' => 'implementasi-kurikulum-merdeka-mi-nu-02-situwangi',
                'status' => 'Published',
            ],
            [
                'title' => 'Workshop Parenting untuk Orang Tua Siswa',
                'content' => '<p>MI NU 02 Situwangi mengadakan workshop parenting bertema "Mendidik Anak di Era Digital" yang dihadiri oleh 150 orang tua siswa. Workshop ini bertujuan memberikan bekal kepada orang tua dalam mendampingi perkembangan anak di era teknologi modern.</p>

<p>Materi yang disampaikan dalam workshop:</p>
<ul>
<li>Komunikasi efektif dengan anak</li>
<li>Mengontrol penggunaan gadget anak</li>
<li>Mengenali potensi dan bakat anak</li>
<li>Kerjasama sekolah dan orang tua</li>
<li>Menciptakan lingkungan belajar kondusif di rumah</li>
</ul>

<p>Narasumber workshop adalah Dr. Ahmad Fauzi, M.Pd, seorang pakar pendidikan anak dari Universitas Islam Negeri. Beliau menyampaikan berbagai strategi praktis dalam mendidik anak dengan pendekatan islami yang sesuai zaman.</p>

<p>"Mendidik anak bukan hanya tugas sekolah, tetapi juga tanggung jawab orang tua. Kerjasama yang baik antara keduanya akan menghasilkan generasi yang berkualitas," tegas Dr. Ahmad Fauzi.</p>

<p>Para peserta workshop sangat antusias mengikuti sesi dan banyak yang bertanya terkait permasalahan pengasuhan anak. Sekolah berencana mengadakan workshop serupa secara rutin setiap semester.</p>

<p>Kegiatan ini merupakan bagian dari program sekolah dalam membangun komunikasi yang baik dengan orang tua siswa untuk mendukung perkembangan optimal anak didik.</p>',
                'author' => 'Tim Humas MI NU 02',
                'published_at' => Carbon::now()->subDays(25),
                'slug' => 'workshop-parenting-orang-tua-siswa',
                'status' => 'Published',
            ],
            [
                'title' => 'Renovasi Perpustakaan dengan Konsep Modern',
                'content' => '<p>Perpustakaan MI NU 02 Situwangi telah selesai direnovasi dengan konsep modern dan nyaman untuk mendukung minat baca siswa. Renovasi dilakukan selama 3 bulan dengan anggaran Rp 200.000.000 dari dana BOS dan sumbangan yayasan.</p>

<p>Fasilitas baru di perpustakaan:</p>
<ul>
<li>Area baca dengan 50 tempat duduk</li>
<li>Ruang diskusi kelompok</li>
<li>Sudut baca untuk anak</li>
<li>Komputer akses katalog digital</li>
<li>AC dan pencahayaan optimal</li>
<li>Koleksi buku terbaru 2.000 judul</li>
</ul>

<p>Koleksi perpustakaan kini mencapai 5.000 buku yang terdiri dari buku pelajaran, buku cerita anak, ensiklopedia, dan literatur islami. Sistem peminjaman juga telah terkomputerisasi untuk memudahkan pengelolaan.</p>

<p>"Perpustakaan yang nyaman akan meningkatkan minat baca siswa. Kami berharap fasilitas ini dapat mendukung prestasi akademik dan memperluas wawasan anak didik," kata Ibu Sari Dewi, kepala perpustakaan.</p>

<p>Selain untuk siswa, perpustakaan juga terbuka untuk masyarakat umum pada hari Sabtu dan Minggu. Hal ini sebagai bentuk kontribusi sekolah dalam mencerdaskan masyarakat sekitar.</p>

<p>Dengan adanya fasilitas perpustakaan yang memadai, MI NU 02 Situwangi semakin mantap dalam mewujudkan visi menjadi sekolah unggul yang mengutamakan prestasi dan akhlak mulia.</p>',
                'author' => 'Sari Dewi, S.Pd',
                'published_at' => Carbon::now()->subDays(30),
                'slug' => 'renovasi-perpustakaan-konsep-modern',
                'status' => 'Published',
            ],
        ];

        foreach ($newsItems as $item) {
            News::create($item);
        }
    }
}
