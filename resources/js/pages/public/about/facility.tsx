import React from 'react';
import { Head } from '@inertiajs/react';
import HeroFacility from '@/components/about/facilitiy/hero-facility';
import AllFacility from '@/components/about/facilitiy/all-facility';
import MainLayout from '@/layouts/main-layout';
import { FacilityItem } from '@/components/components/facility/facility-carousel';

interface FacilityPageProps {
    facilities?: FacilityItem[];
    meta?: {
        title?: string;
        description?: string;
        keywords?: string;
    };
}

const Facility: React.FC<FacilityPageProps> = ({
    facilities = [],
    meta = {}
}) => {
    const {
        title = 'Fasilitas - SMK Telkom Sidoarjo',
        description = 'Jelajahi fasilitas modern SMK Telkom Sidoarjo yang lengkap untuk mendukung pembelajaran Teknologi dan Informatika. Lab Komputer, Jaringan, Telekomunikasi dengan standar industri.',
        keywords = 'fasilitas sekolah, SMK Telkom Sidoarjo, laboratorium komputer, lab jaringan, telekomunikasi, teknologi informasi, pendidikan vokasi'
    } = meta;

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
