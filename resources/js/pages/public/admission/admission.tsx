import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/layouts/main-layout';
import HeroAdmission from '@/components/admission/hero-admission';
import AdmissionFlow from '@/components/admission/admission-flow';
import AdmissionFile from '@/components/admission/admission-file';
import SchoolProgram from '@/components/admission/school-program';

interface AdmissionData {
    id: number;
    image: string;
    whatsapp_number: string | null;
}

interface Props {
    admission: AdmissionData | null;
}

const AdmissionPage: React.FC<Props> = ({ admission }) => {
    const brosurUrl = admission?.image ? `/storage/${admission.image}` : null;

    return (
        <MainLayout>
            <Head title="Penerimaan Murid Baru" />
            <HeroAdmission
                brosurUrl={brosurUrl}
                whatsappNumber={admission?.whatsapp_number}
            />
            <AdmissionFlow />
            <AdmissionFile />
            <SchoolProgram />
        </MainLayout>
    );
};

export default AdmissionPage;
