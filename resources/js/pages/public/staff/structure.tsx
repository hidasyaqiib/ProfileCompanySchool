import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/layouts/main-layout';
import HeroStructure from '@/components/staff/structure/hero-structure';
import ImageStructure from '@/components/staff/structure/image-structure';

interface Structure {
    id: number;
    name: string;
    photo: string;
    created_at: string;
}

interface StructureProps {
    structures: Structure[];
}

const Structure: React.FC<StructureProps> = ({ structures }) => {
    return (
        <MainLayout>
            <Head title="Struktur Organisasi - MI NU 02 Situwangi" />
            <HeroStructure />
            <ImageStructure structures={structures} />
        </MainLayout>
    );
};

export default Structure;
