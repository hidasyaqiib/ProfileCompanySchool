import React, { useState, useEffect } from 'react';
import { Head, usePage, } from '@inertiajs/react';
import { PageProps } from '@inertiajs/core';
import HeroSection from '@/components/home/hero-home';
import MainLayout from '@/layouts/main-layout';
import SpeechSection from '@/components/home/speech';
import FacilityInShort from '@/components/home/facility-in-short';
import NewsInShort from '@/components/home/news-in-short';
import facilities from '@/routes/filament/admin/resources/facilities';

interface SpeechData {
    title: string;
    headmaster: {
        name: string;
        position: string;
        school: string;
        image: string;
    };
    speech: {
        greeting: string;
        content: string[];
        closing: string;
    };
}

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
}

const Home: React.FC = () => {
    const { latestNews, featuredFacilities } = usePage<HomeProps>().props;
    const [speechData, setSpeechData] = useState<SpeechData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSpeechData = async () => {
            try {
                const response = await fetch('/data/speechsection.json');
                if (response.ok) {
                    const data: SpeechData = await response.json();
                    setSpeechData(data);
                }
            } catch (error) {
                console.error('Failed to load speech data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSpeechData();
    }, []);

    return (
        <MainLayout>
            <Head title="Home" />
            <HeroSection />
            {!loading && (
                <SpeechSection
                    data={speechData || undefined}
                    imagePosition="left"
                    className="scroll-mt-16"
                />
            )}
            <FacilityInShort
                facilities={featuredFacilities.map(facility => ({
                    id: facility.id,
                    title: facility.name,
                    image: facility.image, // perbaiki di sini
                    description: facility.description,
                }))}
            />
            <NewsInShort
                initialNews={latestNews || []}
                fetchFromApi={false}
            />
        </MainLayout>
    );
};

export default Home;
