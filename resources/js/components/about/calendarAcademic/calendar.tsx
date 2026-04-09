import React, { useState, useMemo } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import type { EventClickArg } from '@fullcalendar/core';
import idLocale from '@fullcalendar/core/locales/id';
import { motion } from 'framer-motion';
import ModalCalendarDetail from './modal-calendar-detail';

export interface CalendarEvent {
    id: number;
    title: string;
    description?: string | null;
    start: string; // 'YYYY-MM-DD' (inclusive)
    end?: string | null; // 'YYYY-MM-DD' (inclusive, or null for single-day)
    category: 'akademik' | 'event' | 'administrasi';
}

export const CATEGORY_CONFIG = {
    akademik: {
        label: 'Akademik',
        color: '#EF4444',
        badge: 'bg-red-100 text-red-700',
    },
    event: {
        label: 'Event & Kesiswaan',
        color: '#2ECC71',
        badge: 'bg-green-100 text-green-700',
    },
    administrasi: {
        label: 'Administrasi',
        color: '#3B82F6',
        badge: 'bg-blue-100 text-blue-700',
    },
} as const;

// FullCalendar's `end` is exclusive, so add 1 day for multi-day events
function toFCEnd(dateStr: string): string {
    const [year, month, day] = dateStr.split('-').map(Number);
    const utcDate = new Date(Date.UTC(year, month - 1, day + 1));
    return utcDate.toISOString().slice(0, 10);
}

export function formatDateRange(start: string, end?: string | null): string {
    const opts: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };
    const s = new Date(start + 'T00:00:00').toLocaleDateString('id-ID', opts);
    if (!end || end === start) return s;
    const e = new Date(end + 'T00:00:00').toLocaleDateString('id-ID', opts);
    return `${s} – ${e}`;
}

interface CalendarSectionProps {
    events: CalendarEvent[];
}

const CalendarSection: React.FC<CalendarSectionProps> = ({ events }) => {
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
        null,
    );

    // Map to FullCalendar event format (end is exclusive)
    const fcEvents = useMemo(
        () =>
            events.map((e) => ({
                id: String(e.id),
                title: e.title,
                start: e.start,
                // If end is same as start or null, omit it (single-day)
                end: e.end && e.end !== e.start ? toFCEnd(e.end) : undefined,
                backgroundColor: CATEGORY_CONFIG[e.category].color,
                borderColor: CATEGORY_CONFIG[e.category].color,
                textColor: '#ffffff',
                extendedProps: { originalId: e.id },
            })),
        [events],
    );

    // Upcoming = events not yet over (end >= today, or start >= today for single-day)
    const upcomingEvents = useMemo(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return [...events]
            .filter((e) => {
                const lastDay = new Date((e.end ?? e.start) + 'T00:00:00');
                return lastDay >= today;
            })
            .sort(
                (a, b) =>
                    new Date(a.start).getTime() - new Date(b.start).getTime(),
            );
    }, [events]);

    const handleEventClick = (info: EventClickArg) => {
        const origId = info.event.extendedProps.originalId as number;
        const found = events.find((e) => e.id === origId);
        if (found) setSelectedEvent(found);
    };

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="mb-10 text-center"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h2 className="font-poppins text-3xl font-bold text-gray-900 sm:text-4xl">
                        Agenda <span className="text-[#2ECC71]">Akademik</span>
                    </h2>
                    <p className="mt-3 text-base text-gray-500">
                        Jadwal kegiatan dan agenda resmi sekolah sepanjang tahun
                        ajaran
                    </p>
                    <div className="mt-6 flex justify-center">
                        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#2ECC71] to-[#27ae60]" />
                    </div>
                </motion.div>

                {/* Legend */}
                <motion.div
                    className="mb-8 flex flex-wrap justify-center gap-3"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    {(
                        Object.keys(
                            CATEGORY_CONFIG,
                        ) as (keyof typeof CATEGORY_CONFIG)[]
                    ).map((key) => (
                        <div
                            key={key}
                            className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5"
                        >
                            <span
                                className="h-3 w-3 flex-shrink-0 rounded-full"
                                style={{
                                    backgroundColor: CATEGORY_CONFIG[key].color,
                                }}
                            />
                            <span className="text-sm font-medium text-gray-700">
                                {CATEGORY_CONFIG[key].label}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Calendar + Sidebar */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* FullCalendar */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 font-bold text-black shadow-sm lg:p-6">
                            <FullCalendar
                                plugins={[dayGridPlugin, interactionPlugin]}
                                initialView="dayGridMonth"
                                events={fcEvents}
                                eventClick={handleEventClick}
                                headerToolbar={{
                                    left: 'prev,next today',
                                    center: 'title',
                                    right: 'dayGridMonth,dayGridWeek',
                                }}
                                buttonText={{
                                    today: 'Hari Ini',
                                    month: 'Bulan',
                                    week: 'Minggu',
                                }}
                                locale={idLocale}
                                height="auto"
                                dayMaxEvents={3}
                                moreLinkText={(n) => `+${n} lainnya`}
                                eventDisplay="block"
                                eventClassNames="cursor-pointer"
                            />
                        </div>
                    </motion.div>

                    {/* Upcoming Events List */}
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white shadow-sm">
                            <div className="border-b border-gray-100 px-6 py-4">
                                <h3 className="font-poppins text-lg font-semibold text-gray-900">
                                    Agenda Mendatang
                                </h3>
                                <p className="mt-0.5 text-xs text-gray-500">
                                    {upcomingEvents.length} kegiatan ke depan
                                </p>
                            </div>

                            <div className="max-h-[520px] divide-y divide-gray-100 overflow-y-auto">
                                {upcomingEvents.length === 0 ? (
                                    <div className="px-6 py-12 text-center">
                                        <p className="text-sm text-gray-400">
                                            Tidak ada agenda mendatang
                                        </p>
                                    </div>
                                ) : (
                                    upcomingEvents.map((event) => {
                                        const cfg =
                                            CATEGORY_CONFIG[event.category];
                                        return (
                                            <button
                                                key={event.id}
                                                onClick={() =>
                                                    setSelectedEvent(event)
                                                }
                                                className="w-full px-6 py-4 text-left transition-colors hover:bg-gray-50 focus:outline-none focus-visible:bg-gray-50"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <span
                                                        className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full"
                                                        style={{
                                                            backgroundColor:
                                                                cfg.color,
                                                        }}
                                                    />
                                                    <div className="min-w-0 flex-1">
                                                        <p className="truncate text-sm font-semibold text-gray-900">
                                                            {event.title}
                                                        </p>
                                                        <p className="mt-0.5 text-xs text-gray-500">
                                                            {formatDateRange(
                                                                event.start,
                                                                event.end,
                                                            )}
                                                        </p>
                                                        <span
                                                            className={`mt-1.5 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${cfg.badge}`}
                                                        >
                                                            {cfg.label}
                                                        </span>
                                                    </div>
                                                </div>
                                            </button>
                                        );
                                    })
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <ModalCalendarDetail
                event={selectedEvent}
                onClose={() => setSelectedEvent(null)}
            />
        </section>
    );
};

export default CalendarSection;
