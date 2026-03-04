import { Head, usePage } from '@inertiajs/react';
import React from 'react';
import AllFacility from '@/components/about/facilitiy/all-facility';
import HeroFacility from '@/components/about/facilitiy/hero-facility';
import type { FacilityItem } from '@/components/components/facility/facility-carousel';
import MainLayout from '@/layouts/main-layout';

interface FacilityPageProps {
    facilities: FacilityItem[];
    meta?: {
        title?: string;
        description?: string;
        keywords?: string;
    };
    [key: string]: unknown;
}

const Facility: React.FC = () => {
    const { facilities = [], meta = {} } = usePage<FacilityPageProps>().props;

    const {
        title = 'Fasilitas - SMK Telkom Sidoarjo',
        description = 'Jelajahi fasilitas modern SMK Telkom Sidoarjo yang lengkap untuk mendukung pembelajaran Teknologi dan Informatika. Lab Komputer, Jaringan, Telekomunikasi dengan standar industri.',
        keywords = 'fasilitas sekolah, SMK Telkom Sidoarjo, laboratorium komputer, lab jaringan, telekomunikasi, teknologi informasi, pendidikan vokasi',
    } = meta as { title?: string; description?: string; keywords?: string };

    return (
        <MainLayout>
            <Head title={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            <HeroFacility />
            <AllFacility facilities={facilities} />
        </MainLayout>
    );
};

export default Facility;
