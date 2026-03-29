import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
    ClipboardList,
    UserCheck,
    FileText,
    GraduationCap,
    BrainCircuit,
    BadgeCheck,
} from 'lucide-react';

interface FlowStep {
    number: number;
    icon: React.ReactNode;
    title: string;
    description: string;
}

const steps: FlowStep[] = [
    {
        number: 1,
        icon: <ClipboardList size={28} />,
        title: 'Pendaftaran',
        description:
            'Lakukan pendaftaran online dan lengkapi formulir dengan data diri yang benar. Segera selesaikan pembayaran biaya pendaftaran untuk melanjutkan ke tahap berikutnya.',
    },
    {
        number: 2,
        icon: <FileText size={28} />,
        title: 'Kelengkapan Berkas',
        description:
            'Siapkan dan kumpulkan semua berkas administrasi yang diperlukan seperti akta kelahiran, KK, foto, dan dokumen pendukung lainnya.',
    },
    {
        number: 3,
        icon: <BrainCircuit size={28} />,
        title: 'Seleksi',
        description:
            'Peserta akan mengikuti serangkaian tes meliputi Tes Kemampuan Dasar. Wawancara siswa dan orang tua/wali juga menjadi bagian dari proses seleksi.',
    },
    {
        number: 4,
        icon: <UserCheck size={28} />,
        title: 'Pengumuman',
        description:
            'Hasil seleksi akan diumumkan secara resmi melalui website dan papan pengumuman sekolah. Pantau terus informasi pengumuman kelulusan seleksi.',
    },
    {
        number: 5,
        icon: <BadgeCheck size={28} />,
        title: 'Daftar Ulang',
        description:
            'Jika lolos seleksi, Anda wajib melakukan daftar ulang. Segera lakukan pembayaran dan lengkapi semua berkas administrasi.',
    },
    {
        number: 6,
        icon: <GraduationCap size={28} />,
        title: 'Penerimaan',
        description:
            'Selamat! Anda resmi menjadi siswa MI NU 02 Situwangi. Mulai pendidikan terbaik bersama kami sekarang!',
    },
];

const AdmissionFlow: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const [lineHeight, setLineHeight] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center'],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 20,
    });

    useEffect(() => {
        const updateLineHeight = () => {
            if (timelineRef.current) {
                setLineHeight(timelineRef.current.offsetHeight);
            }
        };
        updateLineHeight();
        window.addEventListener('resize', updateLineHeight);
        return () => window.removeEventListener('resize', updateLineHeight);
    }, []);

    return (
        <section ref={containerRef} className="relative bg-white">
            {/* Wave Transition dari section sebelumnya */}
            <div className="w-full overflow-hidden leading-none">
                <svg
                    className="relative block h-16 w-full md:h-24 lg:h-32"
                    viewBox="0 0 1440 80"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0,60 C400,0 1000,100 1440,40 L1440,0 L0,0 Z"
                        fill="#f3f4f6"
                    />
                </svg>
            </div>

            <div className="px-4 pt-8 pb-20 md:px-16">
                {/* Header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="font-poppins text-sm font-semibold tracking-widest text-[#2ECC71] uppercase">
                        Alur Pendaftaran
                    </span>
                    <h2 className="font-poppins mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
                        Tahapan Penerimaan Murid Baru
                    </h2>
                    <p className="font-poppins mx-auto mt-3 max-w-2xl text-sm text-gray-500 md:text-base">
                        Ikuti setiap tahapan berikut untuk mendaftarkan
                        putra-putri Anda di MI NU 02 Situwangi dengan lancar.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative mx-auto max-w-4xl" ref={timelineRef}>
                    {/* Background Line */}
                    <div className="absolute top-0 left-6 h-full w-0.5 bg-gray-200 md:left-1/2 md:-translate-x-1/2" />

                    {/* Scroll Progress Line */}
                    <motion.div
                        className="absolute top-0 left-6 w-0.5 origin-top bg-[#2ECC71] md:left-1/2 md:-translate-x-1/2"
                        style={{
                            height: lineHeight,
                            scaleY: smoothProgress,
                        }}
                    />

                    {/* Steps */}
                    <div className="flex flex-col gap-12">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={step.number}
                                    className={`relative flex items-start gap-6 md:items-center ${
                                        isEven
                                            ? 'md:flex-row'
                                            : 'md:flex-row-reverse'
                                    }`}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-80px' }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                >
                                    {/* Card */}
                                    <div
                                        className={`ml-16 w-full md:ml-0 md:w-[calc(50%-2.5rem)] ${
                                            isEven
                                                ? 'md:text-right'
                                                : 'md:text-left'
                                        }`}
                                    >
                                        <motion.div
                                            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#2ECC71]/30 hover:shadow-md"
                                            whileHover={{ y: -4 }}
                                        >
                                            {/* Icon */}
                                            <div
                                                className={`mb-4 flex items-center gap-3 ${
                                                    isEven
                                                        ? 'md:flex-row-reverse'
                                                        : 'md:flex-row'
                                                } flex-row`}
                                            >
                                                <div
                                                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#2ECC71]/10 text-[#2ECC71] transition-colors duration-300 group-hover:bg-[#2ECC71] group-hover:text-white"
                                                    title={step.title}
                                                >
                                                    {step.icon}
                                                </div>
                                                <h3 className="font-poppins text-lg font-bold text-gray-900">
                                                    {step.title}
                                                </h3>
                                            </div>

                                            <p className="font-poppins text-sm leading-relaxed text-gray-500">
                                                {step.description}
                                            </p>

                                            {/* Accent line */}
                                            <div className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-[#2ECC71] transition-all duration-500 group-hover:w-full" />
                                        </motion.div>
                                    </div>

                                    {/* Center Number Badge */}
                                    <div className="absolute left-0 z-10 md:left-1/2 md:-translate-x-1/2">
                                        <motion.div
                                            className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#2ECC71] shadow-lg"
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: index * 0.1 + 0.2,
                                                type: 'spring',
                                            }}
                                        >
                                            <span className="font-poppins text-sm font-bold text-white">
                                                {step.number}
                                            </span>
                                        </motion.div>
                                    </div>

                                    {/* Empty space for opposite side on desktop */}
                                    <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionFlow;
