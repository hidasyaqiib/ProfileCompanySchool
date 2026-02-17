import React from "react";

interface Headmaster {
    name: string;
    position: string;
    school: string;
    image: string;
}

interface Speech {
    greeting: string;
    content: string[];
    closing: string;
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
    className = "",
    imagePosition = 'left'
}) => {
    // Default data fallback
    const defaultData: SpeechData = {
        title: "Sambutan Kepala Madrasah",
        headmaster: {
            name: "Rahmawati, S.Pd.I., M.Pd.",
            position: "Kepala Madrasah",
            school: "MI NU 02 Situwangi",
            image: "/assets/image/headmaster.webp"
        },
        speech: {
            greeting: "Assalamu'alaikum warahmatullahi wabarakatuh",
            content: [
                "Alhamdulillahi robbil'alamiin, segala puji syukur kita panjatkan ke hadirat Alloh SWT karena atas rahmat dan karunia-Nya, website resmi MI NU 02 Situwangi ini dapat hadir sebagai sarana informasi, komunikasi, dan publikasi bagi seluruh warga madrasah/sekolah serta masyarakat luas.",
                "Website madrasah ini kami kembangkan sebagai wujud komitmen dalam meningkatkan layanan pendidikan yang transparan, informatif, dan adaptif terhadap perkembangan teknologi informasi. Melalui media ini, kami berharap berbagai informasi terkait kegiatan madrasah, prestasi peserta didik, tenaga pendidik, serta program-program unggulan madrasah dapat diakses dengan mudah dan cepat.",
                "MI NU 02 Situwangi senantiasa berupaya menciptakan lingkungan belajar yang rapi, bersih dan berkarakter, guna membentuk peserta didik yang berilmu, berakhlaklakul karimah, mampu membaca Al Quran, menguasai teknologi serta berwawasan lingkungan. Peran serta orang tua, alumni, dan masyarakat sangat kami harapkan demi kemajuan dan keberhasilan pendidikan di madrasah ini.",
                "Akhir kata, kami mengucapkan terima kasih kepada seluruh pihak yang telah berkontribusi dalam pengembangan website madrasah ini. Semoga dapat memberikan manfaat dan menjadi jembatan komunikasi yang efektif bagi kita semua."
            ],
            closing: "Wassalamu'alaikum warahmatullahi wabarakatuh."
        }
    };

    const speechData = data || defaultData;

    const ImageSection = () => (
        <div className="flex items-center justify-center p-4 lg:p-8">
            <div className="relative group">
                <div className="absolute inset-0 min-w-full w-full"></div>
                <img
                    src={speechData.headmaster.image}
                    alt={`${speechData.headmaster.name} - ${speechData.headmaster.position}`}
                    className="relative max-h-[100vh] w-full object-cover"
                    loading="lazy"
                />
            </div>
        </div>
    );

    const ContentSection = () => (
        <div className="flex items-center justify-center p-4 lg:p-8">
            <div className="max-w-2xl">
                <div className="mb-8">
                    <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                        {speechData.title}
                    </h2>
                </div>

                <div className="space-y-6">
                    <p className="font-poppins text-lg text-gray-700 font-medium italic">
                        {speechData.speech.greeting}
                    </p>

                    <div className="space-y-4">
                        {speechData.speech.content.map((paragraph, index) => (
                            <p
                                key={index}
                                className="font-poppins text-gray-700 text-[12px] lg:text-[16px] leading-relaxed text-justify"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <p className="font-poppins text-lg text-gray-700 font-medium italic">
                        {speechData.speech.closing}
                    </p>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="text-right">
                            <p className="font-poppins text-gray-800 font-semibold text-lg">
                                {speechData.headmaster.name}
                            </p>
                            <p className="font-poppins text-gray-600 text-sm">
                                {speechData.headmaster.position}
                            </p>
                            <p className="font-poppins text-gray-600 text-sm">
                                {speechData.headmaster.school}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className={`relative min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24 pt-32 ${className} overflow-visible`}>
            <div className="container mx-auto px-4">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${imagePosition === 'right' ? 'lg:grid-flow-col-dense' : ''
                    }`}>
                    <div className={imagePosition === 'right' ? 'lg:col-start-2' : ''}>
                        <ImageSection />
                    </div>
                    <div className={imagePosition === 'right' ? 'lg:col-start-1' : ''}>
                        <ContentSection />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpeechSection;
