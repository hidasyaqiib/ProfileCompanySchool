import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import HeroSection from '@/components/home/hero-home';
import MainLayout from '@/layouts/main-layout';
import SpeechSection from '@/components/home/speech';
import FacilityInShort from '@/components/home/facility-in-short';

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

const Home: React.FC = () => {
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
      <FacilityInShort />
    </MainLayout>
  );
};

export default Home;
