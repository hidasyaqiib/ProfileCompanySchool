import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/layouts/main-layout';
import HeroSchoolTour from '@/components/schooltour/hero-schooltour';
import SchoolTourComponent from '@/components/schooltour/schooltour-component';

interface SchoolTourItem {
    id: number;
    title: string;
    description: string;
    cover_image: string;
    panorama_image: string;
}

interface Props {
    schooltours: SchoolTourItem[];
}

const SchoolTour: React.FC<Props> = ({ schooltours }) => {
    return (
        <MainLayout>
            <Head title="MI NU 02 Situwangi" />
            <HeroSchoolTour />
            <SchoolTourComponent schooltours={schooltours} />
        </MainLayout>
    );
};

export default SchoolTour;
