import React from 'react';
import { Head } from '@inertiajs/react';
import HeroGallery from '@/components/gallery/hero-gallery';
import GalleryShowcase from '@/components/gallery/gallery-showcase';
import GalleryGrid from '@/components/gallery/gallery-grid';
import MainLayout from '@/layouts/main-layout';
import { GalleryItem } from '@/components/gallery/gallery-showcase';

interface GalleryPageProps {
    galleryItems?: GalleryItem[];
    meta?: {
        title?: string;
        description?: string;
        keywords?: string;
    };
}

const Gallery: React.FC<GalleryPageProps> = ({
    galleryItems = [],
    meta = {}
}) => {
    const {
        title = 'Galeri - SMK Telkom Sidoarjo',
        description = 'Jelajahi dokumentasi visual kegiatan sekolah, prestasi siswa, dan fasilitas modern SMK Telkom Sidoarjo. Koleksi foto dan video terlengkap dari berbagai momen bersejarah institusi pendidikan teknologi terdepan.',
        keywords = 'galeri sekolah, SMK Telkom Sidoarjo, dokumentasi kegiatan, foto sekolah, video kegiatan, prestasi siswa, fasilitas sekolah, teknologi informasi, pendidikan vokasi, gallery'
    } = meta;

    return (
        <MainLayout>
            <Head title={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="/images/gallery-og.jpg" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="/images/gallery-og.jpg" />

            <HeroGallery />
            {/* <GalleryShowcase galleryItems={galleryItems} /> */}
            <GalleryGrid galleryItems={galleryItems} />
        </MainLayout>
    );
};

export default Gallery;
