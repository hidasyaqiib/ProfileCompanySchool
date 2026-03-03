import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, AlertCircle, User } from 'lucide-react';

interface Teacher {
    id: number;
    name: string;
    position: string;
    photo: string | null;
    type: 'Teacher' | 'Staff' | 'Chief';
    image_url?: string;
}

interface TeacherStaffProps {
    staffs: Teacher[];
    teachers: Teacher[];
}

/* ── Reusable Card ── */
const TeacherCard: React.FC<{ teacher: Teacher; index: number }> = ({
    teacher,
    index,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative w-full flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl sm:w-[260px]"
            style={{
                border: '2px dashed #9CA3AF',
            }}
        >
            {/* Image */}
            <div className="relative h-[300px] w-full bg-gray-200">
                {teacher.photo ? (
                    <img
                        src={teacher.image_url}
                        alt={teacher.name}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-100">
                        <User className="h-20 w-20 text-gray-300" />
                    </div>
                )}

                {/* dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            {/* Info overlay at bottom */}
            <div className="absolute right-0 bottom-0 left-0 bg-white px-4 py-3">
                <p className="font-poppins truncate text-sm font-bold text-gray-900">
                    {teacher.name}
                </p>
                <p className="font-poppins mt-0.5 line-clamp-2 text-xs leading-snug text-gray-500">
                    {teacher.position}
                </p>
            </div>
        </motion.div>
    );
};

/* ── Reusable Slider ── */
const GAP = 24; // gap-6 in px

const TeacherSlider: React.FC<{
    title: string;
    subtitle: string;
    data: Teacher[];
    emptyMessage: string;
}> = ({ title, subtitle, data, emptyMessage }) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);
    const [cardPxWidth, setCardPxWidth] = useState(0);

    // maxIndex: how many times you can press "next" (1 card at a time)
    const maxIndex = Math.max(0, data.length - visibleCount);

    const CARD_W = 260;
    // 4 × 260 + 3 × 24 = 1112px — fixed container width for desktop

    useEffect(() => {
        const measure = () => {
            const count = window.innerWidth < 640 ? 1 : 4;
            setVisibleCount(count);
            setCurrentIndex((prev) =>
                Math.min(prev, Math.max(0, data.length - count)),
            );
            // Always measure the actual rendered card width from the DOM
            if (trackRef.current && trackRef.current.children[0]) {
                const firstCard = trackRef.current.children[0] as HTMLElement;
                setCardPxWidth(firstCard.offsetWidth);
            }
        };

        const timerId = setTimeout(measure, 50);
        window.addEventListener('resize', measure);
        return () => {
            clearTimeout(timerId);
            window.removeEventListener('resize', measure);
        };
    }, [data.length]);

    const translateX = currentIndex * (cardPxWidth + GAP);

    const scroll = (dir: 'left' | 'right') => {
        if (dir === 'left') {
            setCurrentIndex((p) => Math.max(0, p - 1));
        } else {
            setCurrentIndex((p) => Math.min(maxIndex, p + 1));
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="mb-20"
        >
            {/* Section Header */}
            <div className="mb-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-poppins text-3xl font-bold text-gray-900 md:text-4xl"
                >
                    {title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-poppins mt-1 text-sm font-semibold text-[#2ECC71] md:text-base"
                >
                    {subtitle}
                </motion.p>
            </div>

            {data.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-lg"
                >
                    <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-5">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
                            <div>
                                <h3 className="font-semibold text-blue-900">
                                    {emptyMessage}
                                </h3>
                                <p className="mt-0.5 text-sm text-blue-800">
                                    Silakan periksa kembali nanti atau hubungi
                                    administrator.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ) : (
                // Single centered container — true fixed width, no bleed
                <div className="mx-auto" style={{ width: 'min(100%, 1112px)' }}>
                    {/* overflow-hidden clips the track — no manual scroll possible */}
                    <div className="overflow-hidden pb-4">
                        {/* Track: moves via CSS transform only */}
                        <div
                            ref={trackRef}
                            className="flex gap-6"
                            style={{
                                transform: `translateX(-${translateX}px)`,
                                transition: 'transform 0.4s ease-in-out',
                                touchAction: 'none',
                                userSelect: 'none',
                            }}
                        >
                            {data.map((item, i) => (
                                <TeacherCard
                                    key={item.id}
                                    teacher={item}
                                    index={i}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mt-6 flex items-center justify-between px-2">
                        {/* Left Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scroll('left')}
                            className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2ECC71] text-white shadow-md transition-opacity hover:bg-green-600 disabled:opacity-30"
                            disabled={currentIndex === 0}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </motion.button>

                        {/* Dot Indicators — one dot per card position */}
                        <div className="flex gap-2">
                            {Array.from({ length: maxIndex + 1 }).map(
                                (_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            scale: i === currentIndex ? 1.3 : 1,
                                            backgroundColor:
                                                i === currentIndex
                                                    ? '#2ECC71'
                                                    : '#D1D5DB',
                                        }}
                                        transition={{ duration: 0.2 }}
                                        className="h-2.5 w-2.5 rounded-full"
                                    />
                                ),
                            )}
                        </div>

                        {/* Right Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scroll('right')}
                            className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2ECC71] text-white shadow-md transition-opacity hover:bg-green-600 disabled:opacity-30"
                            disabled={currentIndex === maxIndex}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </motion.button>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

/* ── Main Component ── */
const TeacherStaff: React.FC<TeacherStaffProps> = ({ staffs, teachers }) => {
    return (
        <section className="bg-white px-6 py-20 md:px-16">
            <div className="mx-auto max-w-[1800px]">
                {/* Staff Slider */}
                <TeacherSlider
                    title="Pengurus dan Administrasi"
                    subtitle="MI NU 02 Situwangi"
                    data={staffs}
                    emptyMessage="Data Staff Belum Tersedia"
                />

                {/* Teacher Slider */}
                <TeacherSlider
                    title="Guru Pengajar dan Tenaga Kependidikan"
                    subtitle="MI NU 02 Situwangi"
                    data={teachers}
                    emptyMessage="Data Guru Belum Tersedia"
                />
            </div>
        </section>
    );
};

export default TeacherStaff;
