import { Head, usePage } from '@inertiajs/react';
import React from 'react';
import Accreditation from '@/components/about/profile/accreditation';
import HeroProfile from '@/components/about/profile/hero-profile';
import VisiMission from '@/components/about/profile/visi-mission';
import MainLayout from '@/layouts/main-layout';

interface ProfileData {
    content: string;
    image_url: string | null;
}

interface Props {
    profile: ProfileData | null;
    [key: string]: unknown;
}

const Profile: React.FC = () => {
    const { profile } = usePage<Props>().props;

    return (
        <MainLayout>
            <head title="Profil Sekolah" />
            <HeroProfile
                description={profile?.content}
                heroImage={profile?.image_url ?? undefined}
            />
            <VisiMission />
            <Accreditation />
        </MainLayout>
    );
};

export default Profile;
