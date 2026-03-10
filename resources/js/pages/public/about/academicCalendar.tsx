import React from 'react';
import MainLayout from '@/layouts/main-layout';
import { Head, usePage } from '@inertiajs/react';
import HeroCalendar from '@/components/about/calendarAcademic/hero-calendar';
import CalendarSection from '@/components/about/calendarAcademic/calendar';
import type { CalendarEvent } from '@/components/about/calendarAcademic/calendar';

interface AcademicCalendarPageProps {
    events: CalendarEvent[];
    [key: string]: unknown;
}

const AcademicCalendar: React.FC = () => {
    const { events } = usePage<AcademicCalendarPageProps>().props;

    return (
        <MainLayout>
            <Head title="Kalender Akademik" />
            <HeroCalendar />
            <CalendarSection events={events ?? []} />
        </MainLayout>
    );
};

export default AcademicCalendar;
