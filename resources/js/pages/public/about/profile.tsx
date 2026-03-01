import { Head } from '@inertiajs/react';
import React from 'react';
import Accreditation from '@/components/about/profile/accreditation';
import HeroProfile from '@/components/about/profile/hero-profile';
import VisiMission from '@/components/about/profile/visi-mission';
import MainLayout from '@/layouts/main-layout';

const Profile: React.FC = () => {
    return (
        <MainLayout>
            <head title="Profil Sekolah" />
            <HeroProfile />
            <VisiMission />
            <Accreditation />
        </MainLayout>
    );
};

export default Profile;
