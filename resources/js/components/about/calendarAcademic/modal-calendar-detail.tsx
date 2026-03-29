import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { CalendarDays, Clock, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CalendarEvent } from './calendar';
import { CATEGORY_CONFIG, formatDateRange } from './calendar';

interface ModalCalendarDetailProps {
    event: CalendarEvent | null;
    onClose: () => void;
}

const ModalCalendarDetail: React.FC<ModalCalendarDetailProps> = ({
    event,
    onClose,
}) => {
    const cfg = event ? CATEGORY_CONFIG[event.category] : null;

    const formatFull = (dateStr: string) =>
        new Date(dateStr + 'T00:00:00').toLocaleDateString('id-ID', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });

    const getDuration = (start: string, end?: string | null): number => {
        if (!end || end === start) return 1;
        const diff =
            new Date(end + 'T00:00:00').getTime() -
            new Date(start + 'T00:00:00').getTime();
        return Math.round(diff / (1000 * 60 * 60 * 24)) + 1;
    };

    return (
        <DialogPrimitive.Root
            open={event !== null}
            onOpenChange={(open) => {
                if (!open) onClose();
            }}
        >
            <DialogPrimitive.Portal>
                {/* Blurred overlay — covers everything including navbar */}
                <DialogPrimitive.Overlay
                    className={cn(
                        'fixed inset-0 z-[100001]',
                        'bg-black/40 backdrop-blur-sm',
                        'data-[state=closed]:animate-out data-[state=open]:animate-in',
                        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                    )}
                />

                {/* Modal panel */}
                <DialogPrimitive.Content
                    className={cn(
                        'fixed top-1/2 left-1/2 z-[100002]',
                        '-translate-x-1/2 -translate-y-1/2',
                        'w-full max-w-[calc(100%-2rem)] sm:max-w-xl',
                        'rounded-2xl bg-white p-6 shadow-2xl',
                        'data-[state=closed]:animate-out data-[state=open]:animate-in',
                        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
                        'duration-200',
                    )}
                >
                    {/* Close button */}
                    <DialogPrimitive.Close className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 opacity-70 transition-opacity hover:opacity-100 focus:outline-none">
                        <X className="h-4 w-4 text-gray-600" />
                        <span className="sr-only">Tutup</span>
                    </DialogPrimitive.Close>

                    {/* Header */}
                    <div className="space-y-3 pr-8">
                        {cfg && (
                            <span
                                className={`inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${cfg.badge}`}
                            >
                                {cfg.label}
                            </span>
                        )}
                        <DialogPrimitive.Title className="text-2xl leading-snug font-bold text-gray-900">
                            {event?.title}
                        </DialogPrimitive.Title>
                    </div>

                    {event && (
                        <div className="mt-4 space-y-5">
                            <hr className="border-gray-100" />

                            {/* Date cards */}
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                                    <CalendarDays className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#2ECC71]" />
                                    <div>
                                        <p className="mb-0.5 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                                            {event.end &&
                                            event.end !== event.start
                                                ? 'Mulai'
                                                : 'Tanggal'}
                                        </p>
                                        <p className="text-sm font-medium text-gray-900">
                                            {formatFull(event.start)}
                                        </p>
                                    </div>
                                </div>

                                {event.end && event.end !== event.start && (
                                    <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                                        <CalendarDays className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                                        <div>
                                            <p className="mb-0.5 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                                                Selesai
                                            </p>
                                            <p className="text-sm font-medium text-gray-900">
                                                {formatFull(event.end)}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Duration + range summary */}
                            <div className="flex flex-wrap items-center gap-3">
                                {event.end && event.end !== event.start && (
                                    <div className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5">
                                        <Clock className="h-3.5 w-3.5 text-gray-500" />
                                        <span className="text-xs font-medium text-gray-600">
                                            {getDuration(
                                                event.start,
                                                event.end,
                                            )}{' '}
                                            hari
                                        </span>
                                    </div>
                                )}
                                <span className="text-sm text-gray-500">
                                    {formatDateRange(event.start, event.end)}
                                </span>
                            </div>

                            <hr className="border-gray-100" />

                            {/* Description */}
                            {event.description ? (
                                <div>
                                    <p className="mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                                        Keterangan
                                    </p>
                                    <p className="text-sm leading-relaxed text-gray-700">
                                        {event.description}
                                    </p>
                                </div>
                            ) : (
                                <p className="text-sm text-gray-400 italic">
                                    Tidak ada keterangan untuk kegiatan ini.
                                </p>
                            )}
                        </div>
                    )}
                </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
    );
};

export default ModalCalendarDetail;
