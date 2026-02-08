import React from "react";
import {Head} from "@inertiajs/react";
import HeroProfile from "@/components/about/profile/hero-profile";
import MainLayout from "@/layouts/main-layout";

const Profile: React.FC = () => {
    return (
        <MainLayout>
            <head title="Profil Sekolah" />
            <HeroProfile />
        </MainLayout>
    )
};

export default Profile;
