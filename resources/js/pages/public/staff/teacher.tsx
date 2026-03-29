import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/layouts/main-layout';
import HeroTeacher from '@/components/staff/teacher/hero-teacher';
import Principal from '@/components/staff/teacher/principal';
import TeacherStaff from '@/components/staff/teacher/teacher-staff';

interface Teacher {
    id: number;
    name: string;
    position: string;
    photo: string | null;
    type: 'Teacher' | 'Staff' | 'Chief';
    motto: string;
    last_education: string;
}

interface TeacherPageProps {
    chiefs: Teacher[];
    staffs: Teacher[];
    teachers: Teacher[];
}

const TeacherPage: React.FC<TeacherPageProps> = ({
    chiefs,
    staffs,
    teachers,
}) => {
    return (
        <MainLayout>
            <Head title="Profil Guru" />
            <HeroTeacher />
            <Principal chiefs={chiefs} />
            <TeacherStaff staffs={staffs} teachers={teachers} />
        </MainLayout>
    );
};

export default TeacherPage;
