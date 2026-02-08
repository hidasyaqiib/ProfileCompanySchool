# Website Profile MI NU 2 Situwangi

Website profil sekolah untuk **MI NU 2 Situwangi** yang dibangun dengan teknologi modern.

## 🚀 Tech Stack

- **Backend**: Laravel 12
- **Frontend**: React TypeScript (TSX)
- **Routing**: Inertia.js
- **Styling**: Tailwind CSS
- **UI Components**: Custom components dengan Shadcn/UI

## ✨ Fitur

### Halaman yang Tersedia

1. **Beranda (Homepage)**
   - Hero section dengan tagline madrasah
   - Sambutan Kepala Madrasah
   - Keunggulan madrasah (6 keunggulan utama)
   - Program unggulan (4 program utama)
   - Berita & informasi terkini
   - Footer lengkap dengan informasi kontak

2. **Profil Madrasah**
   - Visi & Misi
   - Sejarah singkat
   - Struktur organisasi
   - Fasilitas madrasah

3. **Berita & Informasi**
   - Filter kategori berita
   - Berita utama (featured)
   - Daftar berita terbaru
   - Pagination

### Komponen Utama

- Navigation bar responsif
- Hero section dengan gradient dan animasi
- Card components untuk berbagai konten
- Badge untuk kategorisasi
- Button dengan berbagai varian
- Footer informatif

## 📦 Instalasi

### Prerequisites

- PHP 8.2 atau lebih tinggi
- Composer
- Node.js & NPM
- MySQL/PostgreSQL

### Langkah Instalasi

1. **Clone repository**
   ```bash
   cd ProfileCompanySchool
   ```

2. **Install dependencies PHP**
   ```bash
   composer install
   ```

3. **Install dependencies JavaScript**
   ```bash
   npm install
   ```

4. **Setup environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Konfigurasi database**
   Edit file `.env` dan sesuaikan konfigurasi database:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=minu2_situwangi
   DB_USERNAME=root
   DB_PASSWORD=
   ```

6. **Migrate database**
   ```bash
   php artisan migrate
   ```

7. **Build assets**
   ```bash
   npm run build
   ```

## 🎯 Development

### Menjalankan Development Server

1. **Start Laravel server**
   ```bash
   php artisan serve
   ```

2. **Start Vite dev server** (di terminal terpisah)
   ```bash
   npm run dev
   ```

3. **Akses aplikasi**
   Buka browser dan akses: `http://localhost:8000`

## 🎨 Customisasi

### Mengubah Informasi Sekolah

1. **Logo dan Nama**
   - Edit komponen navigation di setiap file page
   - Ganti icon/logo di bagian navigation

2. **Konten**
   - Homepage: `resources/js/pages/home/index.tsx`
   - Profil: `resources/js/pages/home/profile.tsx`
   - Berita: `resources/js/pages/home/news.tsx`

3. **Warna**
   - Primary color: Green (`green-600`)
   - Secondary color: Blue (`blue-600`)
   - Ubah di Tailwind config atau langsung di komponen

### Menambahkan Gambar

Letakkan gambar di folder `public/images/` dan referensikan dengan:
```tsx
<img src="/images/nama-file.jpg" alt="Deskripsi" />
```

## 📝 Struktur File

```
resources/
├── css/
│   └── app.css              # Styles utama
├── js/
│   ├── components/          # UI components
│   ├── layouts/            # Layout components
│   ├── pages/
│   │   └── home/
│   │       ├── index.tsx   # Homepage
│   │       ├── profile.tsx # Halaman profil
│   │       └── news.tsx    # Halaman berita
│   └── types/              # TypeScript types
routes/
└── web.php                 # Route definitions
```

## 🔧 Fitur yang Dapat Dikembangkan

- [ ] Sistem PPDB (Penerimaan Peserta Didik Baru)
- [ ] Galeri foto dan video
- [ ] Download dokumen (brosur, formulir, dll)
- [ ] Prestasi siswa
- [ ] Jadwal kegiatan
- [ ] Portal siswa/orangtua
- [ ] Blog/artikel
- [ ] Kontak form
- [ ] Virtual tour 360°
- [ ] Testimoni alumni
- [ ] Dashboard admin untuk manage konten

## 📱 Responsive Design

Website ini fully responsive dan dapat diakses dengan baik di:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🎓 Konten yang Perlu Dilengkapi

Untuk deployment, lengkapi data berikut:

1. **Informasi Sekolah**
   - [ ] Logo sekolah (format PNG/SVG)
   - [ ] Foto kepala madrasah
   - [ ] Alamat lengkap
   - [ ] Nomor telepon
   - [ ] Email
   - [ ] Tahun berdiri

2. **Konten**
   - [ ] Visi & Misi yang lengkap
   - [ ] Sejarah sekolah
   - [ ] Struktur organisasi dengan nama
   - [ ] Foto-foto kegiatan
   - [ ] Berita terkini
   - [ ] Data prestasi

3. **Media**
   - [ ] Foto gedung/fasilitas
   - [ ] Foto kegiatan siswa
   - [ ] Foto guru dan staff
   - [ ] Logo partner/kerjasama

## 🚀 Deployment

### Production Build

```bash
npm run build
php artisan optimize
```

### Server Requirements

- PHP 8.2+
- MySQL 8.0+ / PostgreSQL 12+
- Composer
- Node.js 18+

## 📄 License

This project is built for MI NU 2 Situwangi.

## 👨‍💻 Support

Untuk bantuan atau pertanyaan, hubungi developer atau tim IT sekolah.

---

**Dibuat dengan ❤️ untuk MI NU 2 Situwangi**
