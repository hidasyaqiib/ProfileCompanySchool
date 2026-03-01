import { Head } from '@inertiajs/react';
import React from 'react';
import AllAchievement from '@/components/about/achievment/all-achievment';
import type { AchievementItem } from '@/components/about/achievment/all-achievment';
import HeroAchievement from '@/components/about/achievment/hero-achievment';
import MainLayout from '@/layouts/main-layout';

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
    meta = {},
}) => {
    const {
        title = 'Prestasi - SMK Telkom Sidoarjo',
        description = 'Jelajahi berbagai prestasi yang telah diraih siswa-siswi SMK Telkom Sidoarjo dalam kompetisi teknologi informasi, akademik, dan ekstrakurikuler tingkat lokal, nasional, hingga internasional.',
        keywords = 'prestasi sekolah, SMK Telkom Sidoarjo, kompetisi IT, juara lomba, prestasi siswa, teknologi informasi, pendidikan vokasi, achievement',
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
