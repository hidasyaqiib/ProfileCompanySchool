import React from 'react';

const FacilityInShort: React.FC = () => {
    const facilities = [
        {
            id: 1,
            icon: '💻',
            title: 'School of Digital Era',
            description: 'Fokus pada kurikulum digital dan keterampilan teknologi masa depan.',
            featured: false
        },
        {
            id: 2,
            icon: '🎯',
            title: 'Program Digital Talent',
            description: 'Pembekalan skill digital yang sesuai kebutuhan industri dan startup.',
            featured: true
        },
        {
            id: 3,
            icon: '🏆',
            title: 'Akreditasi A - Unggul',
            description: 'Diakui secara nasional dengan standar kualitas terbaik oleh BAN-S/M.',
            featured: false
        },
        {
            id: 4,
            icon: '📋',
            title: 'ISO 21001:2018',
            description: 'Telah menerapkan standar manajemen pendidikan internasional.',
            featured: false
        },
        {
            id: 5,
            icon: '🔗',
            title: 'Program OPES',
            description: 'Jalur pendidikan berkelanjutan dari SMK hingga perguruan tinggi Telkom.',
            featured: false
        },
        {
            id: 6,
            icon: '🎓',
            title: 'Yayasan Pendidikan Telkom',
            description: 'Bagian dari grup pendidikan terpercaya di bawah naungan Telkom Indonesia.',
            featured: false
        }
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-12">

                    <h2 className="text-4xl font-bold text-gray-900">
                        Mengapa memilih <br />
                        <span className="text-teal-700">MI NU 02 Situwangi?</span>
                    </h2>

                    <button className="bg-teal-700 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-800 transition-colors duration-200 flex items-center gap-2">
                        Lihat Selengkapnya
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facilities.map((facility) => (
                        <div
                            key={facility.id}
                            className={`relative p-6 rounded-2xl border-2 border-dashed transition-all duration-300 hover:shadow-lg ${facility.featured
                                    ? 'bg-teal-700 text-white border-teal-700'
                                    : 'bg-white text-gray-900 border-gray-200 hover:border-teal-300'
                                }`}
                        >
                            {facility.featured && (
                                <div className="absolute top-4 right-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            )}

                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${facility.featured ? 'bg-white/20' : 'bg-teal-100'
                                }`}>
                                <span className="text-2xl">{facility.icon}</span>
                            </div>

                            <h3 className={`text-xl font-semibold mb-3 ${facility.featured ? 'text-white' : 'text-gray-900'
                                }`}>
                                {facility.title}
                            </h3>

                            <p className={`text-sm leading-relaxed ${facility.featured ? 'text-white/90' : 'text-gray-600'
                                }`}>
                                {facility.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FacilityInShort;

