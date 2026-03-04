import { Head, usePage } from '@inertiajs/react';
import React from 'react';
import GalleryGrid from '@/components/gallery/gallery-grid';
import HeroGallery from '@/components/gallery/hero-gallery';
import MainLayout from '@/layouts/main-layout';

export interface GalleryItem {
    id: number;
    title: string;
    image: string;
    description: string;
    date?: string;
}

interface GalleryPageProps {
    galleryItems: GalleryItem[];
    meta?: {
        title?: string;
        description?: string;
        keywords?: string;
    };
    [key: string]: unknown;
}

const Gallery: React.FC = () => {
    const { galleryItems = [], meta = {} } = usePage<GalleryPageProps>().props;

    const {
        title = 'Galeri - SMK Telkom Sidoarjo',
        description = 'Jelajahi dokumentasi visual kegiatan sekolah, prestasi siswa, dan fasilitas modern SMK Telkom Sidoarjo. Koleksi foto dan video terlengkap dari berbagai momen bersejarah institusi pendidikan teknologi terdepan.',
        keywords = 'galeri sekolah, SMK Telkom Sidoarjo, dokumentasi kegiatan, foto sekolah, video kegiatan, prestasi siswa, fasilitas sekolah, teknologi informasi, pendidikan vokasi, gallery',
    } = meta as { title?: string; description?: string; keywords?: string };

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
            <GalleryGrid galleryItems={galleryItems} />
        </MainLayout>
    );
};

export default Gallery;
