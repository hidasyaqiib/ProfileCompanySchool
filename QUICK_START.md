# 🎓 Website Profile MI NU 2 Situwangi - Quick Start

## ✅ Yang Sudah Dibuat

### 📄 Halaman

1. **Homepage** (`/`)
   - Hero section dengan tagline "Madrasah Islami, Berakhlak Mulia, & Berprestasi"
   - Statistik: 15+ Tahun, 500+ Siswa, 1000+ Alumni
   - Sambutan Kepala Madrasah
   - 6 Keunggulan madrasah
   - 4 Program unggulan (Tahfidz, Olimpiade, Akhlak, Digital)
   - Berita & informasi
   - Footer lengkap

2. **Profil Madrasah** (`/profil`)
   - Visi & Misi
   - Sejarah singkat
   - Struktur organisasi
   - Fasilitas (6 fasilitas utama)

3. **Berita & Informasi** (`/berita`)
   - Filter kategori (6 kategori)
   - Featured news
   - Grid berita dengan pagination

### 🎨 Design

Desain terinspirasi dari: https://semicolon.smktelkom-sda.sch.id/
- Warna utama: Hijau (Green) dan Biru (Blue)
- Modern, clean, dan professional
- Fully responsive (mobile, tablet, desktop)
- Smooth animations

### 🛠️ Tech Stack

- ✅ Laravel 12
- ✅ React TypeScript (TSX)
- ✅ Inertia.js
- ✅ Tailwind CSS
- ✅ Shadcn/UI Components

## 🚀 Cara Menjalankan

```bash
# 1. Install dependencies (sudah dilakukan)
npm install
composer install

# 2. Setup database
php artisan migrate

# 3. Development
php artisan serve        # Terminal 1
npm run dev             # Terminal 2

# 4. Akses website
http://localhost:8000
```

## 📝 Yang Perlu Dilengkapi

### 1. Konten
- [ ] Nama Kepala Madrasah
- [ ] Foto Kepala Madrasah
- [ ] Visi Misi lengkap
- [ ] Sejarah detail
- [ ] Nama-nama struktur organisasi
- [ ] Alamat lengkap sekolah
- [ ] Nomor telepon
- [ ] Email

### 2. Media
- [ ] Logo sekolah (ganti icon "MI" dengan logo asli)
- [ ] Foto gedung/fasilitas
- [ ] Foto kegiatan siswa
- [ ] Foto guru dan staff

### 3. Berita
- [ ] Input berita terbaru (bisa manual di code atau buat CMS)
- [ ] Foto-foto kegiatan untuk berita

## 📂 File Penting

```
resources/js/pages/home/
├── index.tsx      # Homepage - EDIT DISINI untuk ubah konten home
├── profile.tsx    # Profil - EDIT DISINI untuk ubah visi/misi/sejarah
└── news.tsx       # Berita - EDIT DISINI untuk ubah berita

routes/web.php     # Routes - sudah disetup untuk 3 halaman

resources/css/app.css  # Styling tambahan
```

## 🎯 Cara Edit Konten

### Mengubah Teks Homepage

Buka: `resources/js/pages/home/index.tsx`

```tsx
// Line ~50: Ubah tagline
<h1 className="text-5xl lg:text-6xl font-bold leading-tight">
    <span className="text-gray-900">Madrasah Islami,</span>
    <br />
    <span className="text-green-600">Berakhlak Mulia,</span>
    <br />
    <span className="text-blue-600">& Berprestasi</span>
</h1>

// Line ~60: Ubah deskripsi
<p className="text-lg text-gray-600 leading-relaxed">
    Selamat datang di MI NU 2 Situwangi...
</p>

// Line ~75: Ubah statistik
<div className="text-3xl font-bold text-green-600">15+</div>
<div className="text-sm text-gray-600">Tahun Berpengalaman</div>
```

### Mengubah Sambutan Kepala Madrasah

Buka: `resources/js/pages/home/index.tsx` (line ~125)

```tsx
<p className="text-gray-700 leading-relaxed text-lg">
    Assalamu'alaikum Warahmatullahi Wabarakatuh...
    [EDIT TEKS SAMBUTAN DISINI]
</p>

<p className="text-xl font-semibold text-gray-900">
    — [NAMA KEPALA MADRASAH]
</p>
```

### Menambahkan Logo

1. Simpan logo di `public/images/logo.png`
2. Edit semua navigation (ada di setiap halaman):

```tsx
// Ganti ini:
<div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
    <span className="text-white font-bold text-lg">MI</span>
</div>

// Dengan:
<img src="/images/logo.png" alt="MI NU 2 Situwangi" className="w-10 h-10" />
```

## 🔄 Fitur Lanjutan (Optional)

Bisa ditambahkan nanti:
- [ ] Admin Dashboard (untuk upload berita, galeri, dll)
- [ ] Database untuk berita dinamis
- [ ] Form PPDB online
- [ ] Galeri foto/video
- [ ] Download dokumen
- [ ] Testimoni alumni
- [ ] Virtual tour

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:
1. Baca file `README_MINU2.md` untuk dokumentasi lengkap
2. Cek folder `resources/js/pages/home/` untuk edit halaman
3. Semua warna hijau/biru bisa diubah di Tailwind classes

---

**Status**: ✅ Website siap digunakan!  
**Next Step**: Lengkapi konten dan media sesuai checklist di atas.
