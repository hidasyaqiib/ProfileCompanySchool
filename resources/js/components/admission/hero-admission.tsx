import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';

interface HeroAdmissionProps {
    brosurUrl?: string | null;
    whatsappNumber?: string | null;
}

const HeroAdmission: React.FC<HeroAdmissionProps> = ({
    brosurUrl,
    whatsappNumber,
}) => {
    const handleDaftarSekarang = () => {
        if (!whatsappNumber) return;

        let phone = whatsappNumber.replace(/\D/g, ''); // hapus non-angka

        // Konversi prefix ke format internasional
        if (phone.startsWith('0')) {
            phone = '62' + phone.slice(1); // 081xxx → 6281xxx
        } else if (phone.startsWith('+')) {
            phone = phone.slice(1); // +62xxx → 62xxx
        }

        const message = encodeURIComponent(
            'Halo, saya ingin mendaftar di MI NU 02 Situwangi. Mohon informasi lebih lanjut.',
        );
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    };

    const handleBrosur = () => {
        if (brosurUrl) {
            window.open(brosurUrl, '_blank');
        }
    };

    return (
        <section className="lg:item-center flex h-150 flex-col bg-gray-100 px-4 pt-32 md:grid md:grid-cols-2 md:px-16 lg:justify-center">
            {/* left column */}
            <motion.div
                className="relative hidden px-4 py-2 md:block md:px-16"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <motion.img
                    src="/assets/image/model-profile-dummy.webp"
                    alt="Hero Profile"
                    className="absolute bottom-20 left-25 hidden h-auto w-md rounded-lg lg:block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                />
            </motion.div>

            {/* right column */}
            <motion.div
                className="flex flex-col justify-center px-4 py-5 md:px-16"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <motion.h1
                    className="font-poppins text-3xl font-semibold text-black md:text-5xl lg:text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    Mari Bergabung{' '}
                    <span className="text-[#2ECC71]">
                        di MI NU 02 Situwangi
                    </span>
                </motion.h1>

                <motion.p
                    className="font-poppins mt-4 text-justify text-sm leading-relaxed font-medium text-gray-700 md:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    Bergabunglah bersama MI NU 02 Situwangi! Daftarkan
                    putra-putri Anda melalui program Penerimaan Murid Baru
                    (PPDB) dengan proses yang mudah, transparan, dan terpercaya.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="mt-8 flex flex-wrap items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    {/* Daftar Sekarang */}
                    <button
                        onClick={handleDaftarSekarang}
                        disabled={!whatsappNumber}
                        className={`flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                            whatsappNumber
                                ? 'cursor-pointer bg-[#2ECC71] text-white hover:bg-[#27ae60] hover:shadow-lg'
                                : 'cursor-not-allowed bg-gray-300 text-gray-400'
                        }`}
                    >
                        Daftar Sekarang!
                        <ArrowRight size={16} />
                    </button>

                    {/* Brosur */}
                    <button
                        onClick={handleBrosur}
                        disabled={!brosurUrl}
                        className={`flex cursor-pointer items-center gap-2 rounded-md border-2 px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                            brosurUrl
                                ? 'border-gray-400 text-gray-700 hover:border-gray-600 hover:text-gray-900 hover:shadow-md'
                                : 'cursor-not-allowed border-gray-200 text-gray-400'
                        }`}
                    >
                        Brosur
                        <Eye size={16} />
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroAdmission;
