import React from 'react';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-white">
            <header>
                <Navbar />
            </header>
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
