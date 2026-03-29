import React from 'react';
import MainLayout from '@/layouts/main-layout';
import { Head, usePage } from '@inertiajs/react';
import HeroCurriculum from '@/components/about/curriculum/hero-curriculum';
import SchoolSchedule from '@/components/about/curriculum/school-schedule';
import ListSubject from '@/components/about/curriculum/list-subject';
import ListExtracuricular from '@/components/about/curriculum/list-extracuricular';
import DetailCurriculum from '@/components/about/curriculum/detail-curriculum';
import type { SubjectItem } from '@/components/about/curriculum/list-subject';
import type { ExtracurricularItem } from '@/components/about/curriculum/list-extracuricular';
import type { CurriculumItem } from '@/components/about/curriculum/detail-curriculum';

interface CurriculumPageProps {
    subjects: SubjectItem[];
    extracurriculars: ExtracurricularItem[];
    curricula: CurriculumItem[];
    [key: string]: unknown;
}

const Curriculum: React.FC = () => {
    const {
        subjects = [],
        extracurriculars = [],
        curricula = [],
    } = usePage<CurriculumPageProps>().props;

    return (
        <MainLayout>
            <Head title="Kurikulum" />
            <HeroCurriculum />
            <SchoolSchedule />
            <ListSubject subjects={subjects} />
            <ListExtracuricular extracurriculars={extracurriculars} />
            <DetailCurriculum curricula={curricula} />
        </MainLayout>
    );
};

export default Curriculum;
