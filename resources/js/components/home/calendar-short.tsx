import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import {
    CATEGORY_CONFIG,
    formatDateRange,
} from '@/components/about/calendarAcademic/calendar';
import type { CalendarEvent } from '@/components/about/calendarAcademic/calendar';

interface CalendarShortProps {
    events?: CalendarEvent[];
    limit?: number;
}

const CalendarShort: React.FC<CalendarShortProps> = ({
    events = [],
    limit = 5,
}) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcoming = [...events]
        .filter((e) => {
            const lastDay = new Date((e.end ?? e.start) + 'T00:00:00');
            return lastDay >= today;
        })
        .sort(
            (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime(),
        )
        .slice(0, limit);

    const isToday = (dateStr: string) => {
        const d = new Date(dateStr + 'T00:00:00');
        return (
            d.getFullYear() === today.getFullYear() &&
            d.getMonth() === today.getMonth() &&
            d.getDate() === today.getDate()
        );
    };

    const getDaysUntil = (dateStr: string): number => {
        const d = new Date(dateStr + 'T00:00:00');
        const diff = d.getTime() - today.getTime();
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    };

    const getDuration = (start: string, end?: string | null): number => {
        if (!end || end === start) return 1;
        const diff =
            new Date(end + 'T00:00:00').getTime() -
            new Date(start + 'T00:00:00').getTime();
        return Math.round(diff / (1000 * 60 * 60 * 24)) + 1;
    };

    return (
        <section className="bg-[#F4F5F7] py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                >
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                            Agenda{' '}
                            <span className="text-[#2ECC71]">Terdekat</span>
                        </h2>
                        <p className="mt-2 max-w-xl text-gray-500">
                            Kegiatan dan jadwal akademik yang akan berlangsung
                            dalam waktu dekat
                        </p>
                    </div>

                    <Link
                        href="/kalender-akademik"
                        className="inline-flex items-center gap-2 self-start rounded-full border border-[#2ECC71] px-5 py-2.5 text-sm font-semibold text-[#2ECC71] transition-colors hover:bg-[#2ECC71] hover:text-white sm:self-auto"
                    >
                        Lihat Semua Agenda
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </motion.div>

                {/* Cards */}
                {upcoming.length === 0 ? (
                    <motion.div
                        className="rounded-2xl bg-white py-16 text-center shadow-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <CalendarDays className="mx-auto mb-3 h-10 w-10 text-gray-300" />
                        <p className="text-gray-400">
                            Tidak ada agenda dalam waktu dekat
                        </p>
                    </motion.div>
                ) : (
                    <div className="flex flex-col gap-3">
                        {upcoming.map((event, i) => {
                            const cfg = CATEGORY_CONFIG[event.category];
                            const daysUntil = getDaysUntil(event.start);
                            const ongoing =
                                daysUntil < 0 ||
                                (event.end &&
                                    new Date(event.end + 'T00:00:00') >=
                                        today &&
                                    new Date(event.start + 'T00:00:00') <=
                                        today);
                            const duration = getDuration(
                                event.start,
                                event.end,
                            );

                            return (
                                <motion.div
                                    key={event.id}
                                    className="flex items-start gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm sm:items-center sm:px-6"
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{
                                        duration: 0.45,
                                        delay: i * 0.07,
                                        ease: 'easeOut',
                                    }}
                                >
                                    {/* Color stripe */}
                                    <div
                                        className="hidden h-full w-1 flex-shrink-0 self-stretch rounded-full sm:block"
                                        style={{ backgroundColor: cfg.color }}
                                    />

                                    {/* Date badge */}
                                    <div
                                        className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-xl text-white"
                                        style={{ backgroundColor: cfg.color }}
                                    >
                                        <span className="text-xs leading-none font-semibold uppercase">
                                            {new Date(
                                                event.start + 'T00:00:00',
                                            ).toLocaleDateString('id-ID', {
                                                month: 'short',
                                            })}
                                        </span>
                                        <span className="text-lg leading-none font-bold">
                                            {new Date(
                                                event.start + 'T00:00:00',
                                            ).getDate()}
                                        </span>
                                    </div>

                                    {/* Main content */}
                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span
                                                className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${cfg.badge}`}
                                            >
                                                {cfg.label}
                                            </span>
                                            {ongoing && (
                                                <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                                                    Berlangsung
                                                </span>
                                            )}
                                            {!ongoing &&
                                                isToday(event.start) && (
                                                    <span className="rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-700">
                                                        Hari Ini
                                                    </span>
                                                )}
                                        </div>
                                        <p className="mt-1 truncate text-sm font-semibold text-gray-900 sm:text-base">
                                            {event.title}
                                        </p>
                                        <p className="mt-0.5 text-xs text-gray-500">
                                            {formatDateRange(
                                                event.start,
                                                event.end,
                                            )}
                                        </p>
                                    </div>

                                    {/* Right meta */}
                                    <div className="hidden flex-shrink-0 flex-col items-end gap-1.5 sm:flex">
                                        {duration > 1 && (
                                            <div className="flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1">
                                                <Clock className="h-3 w-3 text-gray-400" />
                                                <span className="text-xs text-gray-500">
                                                    {duration} hari
                                                </span>
                                            </div>
                                        )}
                                        {!ongoing && daysUntil > 0 && (
                                            <span className="text-xs text-gray-400">
                                                {daysUntil === 1
                                                    ? 'Besok'
                                                    : `${daysUntil} hari lagi`}
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                )}

                {/* Bottom CTA (mobile fallback) */}
                <motion.div
                    className="mt-8 flex justify-center sm:hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <Link
                        href="/kalender-akademik"
                        className="inline-flex items-center gap-2 rounded-full bg-[#2ECC71] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#27ae60]"
                    >
                        Lihat Semua Agenda
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CalendarShort;
