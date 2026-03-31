import React from 'react';
import { motion } from 'framer-motion';

const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

const timeSlots = [
    { period: '1', start: '07.00', end: '07.15', isBreak: false },
    { period: '2', start: '07.15', end: '07.50', isBreak: false },
    { period: '3', start: '07.50', end: '08.25', isBreak: false },
    { period: '4', start: '08.25', end: '09.00', isBreak: false },
    {
        period: null,
        start: '09.00',
        end: '09.15',
        isBreak: true,
        label: 'ISTIRAHAT',
    },
    { period: '5', start: '09.15', end: '09.50', isBreak: false },
    { period: '6', start: '09.50', end: '10.25', isBreak: false },
    { period: '7', start: '10.25', end: '11.00', isBreak: false },
    {
        period: null,
        start: '11.00',
        end: '11.15',
        isBreak: true,
        label: 'ISTIRAHAT',
    },
    { period: '8', start: '11.15', end: '11.50', isBreak: false },
    { period: '9', start: '11.50', end: '12.25', isBreak: false },
    { period: '10', start: '12.25', end: '13.00', isBreak: false },
] as const;

const SchoolSchedule: React.FC = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="mx-auto mb-12 max-w-3xl text-center"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-80px' }}
                >
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Jadwal <span className="text-[#2ECC71]">Sekolah</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Jadwal kegiatan belajar mengajar harian MI NU 02
                        Situwangi
                    </p>
                    <div className="mt-6 flex justify-center">
                        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#2ECC71] to-[#27ae60]" />
                    </div>
                </motion.div>

                {/* Table */}
                <motion.div
                    className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                    viewport={{ once: true, margin: '-60px' }}
                >
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr className="bg-[#2ECC71]">
                                <th className="w-16 px-4 py-4 text-left text-sm font-semibold text-white">
                                    Jam
                                </th>
                                <th className="w-32 px-4 py-4 text-left text-sm font-semibold text-white">
                                    Waktu
                                </th>
                                {days.map((day) => (
                                    <th
                                        key={day}
                                        className="px-4 py-4 text-center text-sm font-semibold text-white"
                                    >
                                        {day}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                            {timeSlots.map((slot, idx) => (
                                <tr
                                    key={idx}
                                    className={
                                        slot.isBreak
                                            ? 'bg-amber-50'
                                            : idx % 2 === 0
                                              ? 'bg-white'
                                              : 'bg-gray-50'
                                    }
                                >
                                    <td className="px-4 py-3 text-center text-sm font-bold text-gray-700">
                                        {slot.isBreak
                                            ? '—'
                                            : `Ke-${slot.period}`}
                                    </td>
                                    <td className="px-4 py-3 text-sm font-medium whitespace-nowrap text-gray-600">
                                        {slot.start} – {slot.end}
                                    </td>
                                    {days.map((day) => (
                                        <td
                                            key={day}
                                            className="px-4 py-3 text-center text-sm"
                                        >
                                            {slot.isBreak ? (
                                                <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                                                    {'label' in slot
                                                        ? slot.label
                                                        : ''}
                                                </span>
                                            ) : (
                                                <span className="inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-[#27ae60]">
                                                    KBM
                                                </span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                {/* Legend */}
                <div className="mt-6 flex flex-wrap justify-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-[#2ECC71]" />
                        <span className="text-sm text-gray-600">
                            Kegiatan Belajar Mengajar (KBM)
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-amber-400" />
                        <span className="text-sm text-gray-600">Istirahat</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SchoolSchedule;
