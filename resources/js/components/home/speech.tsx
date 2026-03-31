import { motion } from 'framer-motion';
import React from 'react';

interface Headmaster {
    name: string;
    position: string;
    school: string;
    image: string;
}

interface Speech {
    content: string;
}

interface SpeechData {
    title: string;
    headmaster: Headmaster;
    speech: Speech;
}

interface SpeechSectionProps {
    data?: SpeechData;
    className?: string;
    imagePosition?: 'left' | 'right';
}

const SpeechSection: React.FC<SpeechSectionProps> = ({
    data,
    className = '',
    imagePosition = 'left',
}) => {
    if (!data) {
        return (
            <section
                className={`relative bg-gradient-to-br from-gray-50 to-white py-16 ${className}`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 py-20 text-center">
                        <svg
                            className="mx-auto mb-4 h-14 w-14 text-gray-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                        <h3 className="mb-2 text-lg font-semibold text-gray-700">
                            Sambutan Kepala Madrasah
                        </h3>
                        <p className="inline-flex items-center gap-1.5 rounded-md border border-yellow-200 bg-yellow-50 px-3 py-2 text-sm text-yellow-700">
                            <svg
                                className="h-4 w-4 shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z"
                                />
                            </svg>
                            Data sambutan belum diisi. Silakan tambahkan melalui
                            panel admin.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    const speechData = data;

    const ImageSection = () => (
        <div className="flex items-center justify-center p-4 lg:p-8">
            <div className="group relative">
                <div className="absolute inset-0 w-full min-w-full"></div>
                <img
                    src={speechData.headmaster.image}
                    alt={`${speechData.headmaster.name} - ${speechData.headmaster.position}`}
                    className="relative max-h-[50vh] w-full object-cover sm:max-h-[60vh] lg:max-h-[100vh]"
                    loading="lazy"
                />
            </div>
        </div>
    );

    const ContentSection = () => (
        <div className="flex items-center justify-center p-4 lg:p-8">
            <div className="max-w-2xl">
                <div className="mb-8">
                    <h2 className="font-poppins mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">
                        {speechData.title}
                    </h2>
                </div>

                <div className="space-y-6">
                    <div
                        className="font-poppins prose prose-sm max-w-none text-justify text-[12px] leading-relaxed text-gray-700 lg:text-[16px] [&_p]:mb-3"
                        dangerouslySetInnerHTML={{
                            __html: speechData.speech.content,
                        }}
                    />

                    <div className="mt-8 border-t border-gray-200 pt-6">
                        <div className="text-left">
                            <p className="font-poppins text-lg font-semibold text-gray-800">
                                {speechData.headmaster.name}
                            </p>
                            <p className="font-poppins text-sm text-gray-600">
                                {speechData.headmaster.position}
                            </p>
                            <p className="font-poppins text-sm text-gray-600">
                                {speechData.headmaster.school}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const imageFrom = imagePosition === 'right' ? 60 : -60;

    return (
        <section
            className={`relative min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 pt-24 lg:py-24 ${className} overflow-visible`}
        >
            <div className="container mx-auto px-4">
                <div
                    className={`grid grid-cols-1 items-center gap-2 lg:grid-cols-2 lg:gap-12 ${
                        imagePosition === 'right'
                            ? 'lg:grid-flow-col-dense'
                            : ''
                    }`}
                >
                    <motion.div
                        initial={{ opacity: 0, x: imageFrom }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true, margin: '-80px' }}
                        className={
                            imagePosition === 'right' ? 'lg:col-start-2' : ''
                        }
                    >
                        <ImageSection />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            ease: 'easeOut',
                            delay: 0.15,
                        }}
                        viewport={{ once: true, margin: '-80px' }}
                        className={
                            imagePosition === 'right' ? 'lg:col-start-1' : ''
                        }
                    >
                        <ContentSection />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SpeechSection;
