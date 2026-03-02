import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

interface SchoolTourItem {
    id: number;
    title: string;
    description: string;
    cover_image: string;
    panorama_image: string;
}

interface SchoolTourComponentProps {
    schooltours: SchoolTourItem[];
}

const stripHtml = (html: string): string => {
    return html.replace(/<[^>]*>/g, '');
};

const SchoolTourComponent: React.FC<SchoolTourComponentProps> = ({
    schooltours,
}) => {
    const [selectedPanorama, setSelectedPanorama] =
        useState<SchoolTourItem | null>(null);

    // Sembunyikan navbar & lock scroll saat fullscreen aktif
    useEffect(() => {
        const navbar = document.querySelector('nav') as HTMLElement | null;

        if (selectedPanorama) {
            document.body.style.overflow = 'hidden';
            if (navbar) navbar.style.display = 'none';
        } else {
            document.body.style.overflow = '';
            if (navbar) navbar.style.display = '';
        }

        return () => {
            document.body.style.overflow = '';
            if (navbar) navbar.style.display = '';
        };
    }, [selectedPanorama]);

    const handleClose = () => {
        setSelectedPanorama(null);
    };

    return (
        <>
            {/* Full Screen 360 Viewer — pakai createPortal supaya di luar DOM tree */}
            <AnimatePresence>
                {selectedPanorama && (
                    <motion.div
                        className="fixed inset-0 flex flex-col bg-black"
                        style={{ zIndex: 999999 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Top Bar */}
                        <div
                            className="absolute top-0 right-0 left-0 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent px-6 py-5"
                            style={{ zIndex: 10 }}
                        >
                            <div className="flex flex-col">
                                {/* Label 360 */}
                                <span className="mb-1 inline-flex w-fit items-center gap-1 rounded-full bg-green-500/20 px-3 py-0.5 text-xs font-semibold text-green-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3 w-3"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 4C7.09 4 3 7.58 3 12s4.09 8 9 8 9-3.58 9-8-4.09-8-9-8zm0 14c-3.86 0-7-2.69-7-6s3.14-6 7-6 7 2.69 7 6-3.14 6-7 6z" />
                                        <path d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                    </svg>
                                    360°
                                </span>

                                {/* Title */}
                                <h2 className="font-poppins text-lg font-bold text-white md:text-2xl">
                                    {selectedPanorama.title}
                                </h2>

                                {/* Description */}
                                <p className="font-poppins mt-1 max-w-md text-xs text-white/60 md:text-sm">
                                    {stripHtml(selectedPanorama.description)}
                                </p>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25"
                                style={{ zIndex: 999999 }}
                                type="button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Panorama Viewer */}
                        <div className="h-full w-full" style={{ zIndex: 1 }}>
                            <ReactPhotoSphereViewer
                                src={selectedPanorama.panorama_image}
                                height="100vh"
                                width="100%"
                                defaultZoomLvl={0}
                                touchmoveTwoFingers={false}
                                mousewheel={true}
                                mousewheelCtrlKey={false}
                                navbar={['zoom', 'move', 'fullscreen']}
                                lang={{
                                    zoomIn: 'Perbesar',
                                    zoomOut: 'Perkecil',
                                    moveUp: 'Atas',
                                    moveDown: 'Bawah',
                                    moveLeft: 'Kiri',
                                    moveRight: 'Kanan',
                                    fullscreen: 'Layar Penuh',
                                    enterFullscreen: 'Masuk Layar Penuh',
                                    exitFullscreen: 'Keluar Layar Penuh',
                                    download: 'Unduh',
                                    menu: 'Menu',
                                    close: 'Tutup',
                                    twoFingers:
                                        'Gunakan dua jari untuk navigasi',
                                    ctrlZoom: 'Ctrl + scroll untuk zoom',
                                    loadError: 'Gagal memuat panorama',
                                }}
                                loadingTxt="Memuat panorama..."
                            />
                        </div>

                        {/* Bottom Bar — DIHAPUS, digantikan navbar bawaan viewer */}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Section List */}
            <section className="bg-white px-8 py-16 md:px-24">
                <div className="mx-auto max-w-6xl space-y-16">
                    {schooltours.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="flex flex-col items-center gap-10 md:flex-row"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1.2, delay: index * 0.1 }}
                        >
                            {/* Cover Image */}
                            <div className="relative w-full flex-shrink-0 md:w-[55%]">
                                <div className="overflow-hidden rounded-2xl shadow-lg">
                                    <img
                                        src={item.cover_image}
                                        alt={item.title}
                                        className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="w-full md:w-[45%]">
                                {/* Title */}
                                <h2 className="font-poppins text-2xl font-bold text-gray-900 md:text-3xl">
                                    {item.title.split(' ').map((word, i) =>
                                        i ===
                                        item.title.split(' ').length - 1 ? (
                                            <span
                                                key={i}
                                                className="text-green-500"
                                            >
                                                {word}{' '}
                                            </span>
                                        ) : (
                                            <span key={i}>{word} </span>
                                        ),
                                    )}
                                </h2>

                                {/* Description */}
                                <p className="font-poppins mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                                    {stripHtml(item.description)}
                                </p>

                                {/* Tour Button */}
                                <motion.button
                                    onClick={() => setSelectedPanorama(item)}
                                    className="mt-6 flex cursor-pointer items-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    Tour Ruangan
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}

                    {/* Empty State */}
                    {schooltours.length === 0 && (
                        <div className="py-24 text-center text-gray-400">
                            <p className="text-lg">
                                Belum ada data tour ruangan.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default SchoolTourComponent;
