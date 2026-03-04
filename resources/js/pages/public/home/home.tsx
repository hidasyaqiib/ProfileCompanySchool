import type { PageProps } from '@inertiajs/core';
import { Head, usePage } from '@inertiajs/react';
import React from 'react';
import FacilityInShort from '@/components/home/facility-in-short';
import HeroSection from '@/components/home/hero-home';
import NewsInShort from '@/components/home/news-in-short';
import SpeechSection from '@/components/home/speech';
import MainLayout from '@/layouts/main-layout';

interface HomeProps extends PageProps {
    latestNews: Array<{
        id: number;
        title: string;
        content: string;
        thumbnail: string | null;
        published_at: string;
        author: string;
        slug: string;
        status: 'Draft' | 'Published' | 'Archived';
    }>;
    featuredFacilities: Array<{
        id: number;
        name: string;
        image: string;
        description: string;
    }>;
    principal: {
        name: string;
        image_url: string | null;
        greeting_message: string;
    } | null;
}

const Home: React.FC = () => {
    const { latestNews, featuredFacilities, principal } = usePage<HomeProps>().props;

    const speechData = principal
        ? {
              title: 'Sambutan Kepala Madrasah',
              headmaster: {
                  name: principal.name,
                  position: 'Kepala Madrasah',
                  school: 'MI NU 02 Situwangi',
                  image: principal.image_url ?? '/assets/image/headmaster.webp',
              },
              speech: {
                  content: principal.greeting_message,
              },
          }
        : undefined;

    return (
        <MainLayout>
            <Head title="Home" />
            <HeroSection />
            <SpeechSection
                data={speechData}
                imagePosition="left"
                className="scroll-mt-16"
            />
            <FacilityInShort
                facilities={featuredFacilities.map((facility) => ({
                    id: facility.id,
                    title: facility.name,
                    image: facility.image, // perbaiki di sini
                    description: facility.description,
                }))}
            />
            <NewsInShort initialNews={latestNews || []} fetchFromApi={false} />
        </MainLayout>
    );
};

export default Home;
