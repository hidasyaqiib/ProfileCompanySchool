import React from 'react';
import { Head } from '@inertiajs/react';
import HeroAchievement from '@/components/about/achievment/hero-achievment';
import AllAchievement from '@/components/about/achievment/all-achievment';
import MainLayout from '@/layouts/main-layout';
import { AchievementItem } from '@/components/about/achievment/all-achievment';

interface AchievementPageProps {
    achievements?: AchievementItem[];
    meta?: {
        title?: string;
        description?: string;
        keywords?: string;
    };
}

const Achievement: React.FC<AchievementPageProps> = ({
    achievements = [],
    meta = {}
}) => {
    const {
        title = 'Prestasi - SMK Telkom Sidoarjo',
        description = 'Jelajahi berbagai prestasi yang telah diraih siswa-siswi SMK Telkom Sidoarjo dalam kompetisi teknologi informasi, akademik, dan ekstrakurikuler tingkat lokal, nasional, hingga internasional.',
        keywords = 'prestasi sekolah, SMK Telkom Sidoarjo, kompetisi IT, juara lomba, prestasi siswa, teknologi informasi, pendidikan vokasi, achievement'
    } = meta;

    return (
        <MainLayout>
            <Head title={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            <HeroAchievement />
            <AllAchievement achievements={achievements} />
        </MainLayout>
    );
};

export default Achievement;
