import React from 'react';
import { motion } from 'framer-motion';
import {
    FileText,
    Users,
    Camera,
    CreditCard,
    ClipboardCheck,
    Stethoscope,
    GraduationCap,
    MapPin,
    Info,
    CheckCircle2,
    AlertCircle,
    FolderOpen,
} from 'lucide-react';

interface Document {
    icon: React.ReactNode;
    title: string;
    description: string;
    quantity?: string;
    required: boolean;
}

const documents: Document[] = [
    {
        icon: <FileText size={18} />,
        title: 'Akta Kelahiran',
        description: 'Fotokopi akta kelahiran calon peserta didik.',
        quantity: '2 lembar',
        required: true,
    },
    {
        icon: <Users size={18} />,
        title: 'Kartu Keluarga (KK)',
        description: 'Fotokopi kartu keluarga yang masih berlaku.',
        quantity: '2 lembar',
        required: true,
    },
    {
        icon: <Camera size={18} />,
        title: 'Pas Foto Terbaru',
        description: 'Pas foto berwarna dengan latar merah atau biru.',
        quantity: '4 lembar (3×4)',
        required: true,
    },
    {
        icon: <CreditCard size={18} />,
        title: 'KTP Orang Tua/Wali',
        description: 'Fotokopi KTP ayah dan ibu atau wali yang sah.',
        quantity: '2 lembar',
        required: true,
    },
    {
        icon: <ClipboardCheck size={18} />,
        title: 'Formulir Pendaftaran',
        description: 'Formulir yang telah diisi lengkap dan ditandatangani.',
        quantity: '1 lembar',
        required: true,
    },
    {
        icon: <MapPin size={18} />,
        title: 'Surat Keterangan RT/RW',
        description: 'Surat domisili dari RT/RW setempat.',
        quantity: '1 lembar',
        required: true,
    },
    {
        icon: <GraduationCap size={18} />,
        title: 'Ijazah / STTB TK/PAUD',
        description: 'Fotokopi ijazah atau surat keterangan lulus TK/PAUD.',
        quantity: '1 lembar',
        required: false,
    },
    {
        icon: <Stethoscope size={18} />,
        title: 'Surat Keterangan Sehat',
        description: 'Surat keterangan sehat dari dokter atau puskesmas.',
        quantity: '1 lembar',
        required: false,
    },
];

const requiredDocs = documents.filter((d) => d.required);
const optionalDocs = documents.filter((d) => !d.required);

const AdmissionFile: React.FC = () => {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-16">
                {/* Two-column split layout */}
                <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
                    {/* ── Left: Sticky Info Panel ── */}
                    <motion.div
                        className="lg:fixec lg:top-28 lg:w-80 lg:self-start lg:shrink-0"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Icon header */}
                        {/* <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2ECC71] text-white shadow-lg shadow-[#2ECC71]/30">
                            <FolderOpen size={26} />
                        </div> */}

                        <span className="font-poppins text-xs font-semibold tracking-widest text-[#2ECC71] uppercase">
                            Persyaratan
                        </span>
                        <h2 className="font-poppins mt-2 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                            Berkas
                            <br />
                            Pendaftaran
                            <br />
                            PPDB
                        </h2>
                        <p className="font-poppins mt-4 text-sm leading-relaxed text-gray-500">
                            Siapkan seluruh berkas berikut sebelum melakukan
                            pendaftaran. Pastikan semua dokumen lengkap agar
                            proses penerimaan berjalan lancar.
                        </p>

                        {/* Stats */}
                        <div className="mt-8 space-y-3">
                            <div className="flex items-center gap-3 rounded-xl border border-[#2ECC71]/20 bg-[#2ECC71]/8 px-4 py-3">
                                <CheckCircle2
                                    size={16}
                                    className="shrink-0 text-[#2ECC71]"
                                />
                                <div>
                                    <p className="font-poppins text-xs text-gray-500">
                                        Berkas Wajib
                                    </p>
                                    <p className="font-poppins text-lg font-bold text-[#2ECC71]">
                                        {requiredDocs.length} Dokumen
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
                                <AlertCircle
                                    size={16}
                                    className="shrink-0 text-amber-500"
                                />
                                <div>
                                    <p className="font-poppins text-xs text-gray-500">
                                        Berkas Tambahan
                                    </p>
                                    <p className="font-poppins text-lg font-bold text-amber-500">
                                        {optionalDocs.length} Dokumen
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Info note */}
                        <div className="mt-6 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
                            <Info
                                size={16}
                                className="mt-0.5 shrink-0 text-blue-400"
                            />
                            <p className="font-poppins text-xs leading-relaxed text-blue-600">
                                Bawa dokumen asli untuk verifikasi. Berkas tidak
                                lengkap dapat menyebabkan penundaan.
                            </p>
                        </div>
                    </motion.div>

                    {/* ── Right: Checklist Rows ── */}
                    <div className="flex-1">
                        {/* Required section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-3 flex items-center gap-2"
                        >
                            <CheckCircle2
                                size={15}
                                className="text-[#2ECC71]"
                            />
                            <span className="font-poppins text-xs font-semibold tracking-widest text-[#2ECC71] uppercase">
                                Wajib
                            </span>
                            <div className="h-px flex-1 bg-[#2ECC71]/20" />
                        </motion.div>

                        <div className="mb-8 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                            {requiredDocs.map((doc, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.07,
                                    }}
                                    className={`group flex items-center gap-4 px-5 py-4 transition-colors duration-200 hover:bg-[#2ECC71]/5 ${
                                        index !== requiredDocs.length - 1
                                            ? 'border-b border-gray-100'
                                            : ''
                                    }`}
                                >
                                    {/* Number */}
                                    <span className="font-poppins w-5 shrink-0 text-right text-xs font-bold text-gray-300 group-hover:text-[#2ECC71]">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    {/* Icon */}
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2ECC71]/10 text-[#2ECC71] transition-colors duration-200 group-hover:bg-[#2ECC71] group-hover:text-white">
                                        {doc.icon}
                                    </div>

                                    {/* Text */}
                                    <div className="min-w-0 flex-1">
                                        <p className="font-poppins text-sm font-semibold text-gray-800">
                                            {doc.title}
                                        </p>
                                        <p className="font-poppins mt-0.5 truncate text-xs text-gray-400">
                                            {doc.description}
                                        </p>
                                    </div>

                                    {/* Quantity */}
                                    {doc.quantity && (
                                        <span className="font-poppins shrink-0 rounded-lg bg-[#2ECC71]/10 px-2.5 py-1 text-xs font-medium text-[#2ECC71]">
                                            {doc.quantity}
                                        </span>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Optional section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mb-3 flex items-center gap-2"
                        >
                            <AlertCircle size={15} className="text-amber-500" />
                            <span className="font-poppins text-xs font-semibold tracking-widest text-amber-500 uppercase">
                                Tambahan
                            </span>
                            <div className="h-px flex-1 bg-amber-200/60" />
                        </motion.div>

                        <div className="overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm">
                            {optionalDocs.map((doc, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.07 + 0.15,
                                    }}
                                    className={`group flex items-center gap-4 px-5 py-4 transition-colors duration-200 hover:bg-amber-50/60 ${
                                        index !== optionalDocs.length - 1
                                            ? 'border-b border-amber-50'
                                            : ''
                                    }`}
                                >
                                    {/* Number */}
                                    <span className="font-poppins w-5 shrink-0 text-right text-xs font-bold text-gray-300 group-hover:text-amber-400">
                                        {String(
                                            requiredDocs.length + index + 1,
                                        ).padStart(2, '0')}
                                    </span>

                                    {/* Icon */}
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-500 transition-colors duration-200 group-hover:bg-amber-400 group-hover:text-white">
                                        {doc.icon}
                                    </div>

                                    {/* Text */}
                                    <div className="min-w-0 flex-1">
                                        <p className="font-poppins text-sm font-semibold text-gray-800">
                                            {doc.title}
                                        </p>
                                        <p className="font-poppins mt-0.5 truncate text-xs text-gray-400">
                                            {doc.description}
                                        </p>
                                    </div>

                                    {/* Quantity */}
                                    {doc.quantity && (
                                        <span className="font-poppins shrink-0 rounded-lg bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-500">
                                            {doc.quantity}
                                        </span>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionFile;
