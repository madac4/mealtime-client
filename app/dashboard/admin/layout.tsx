'use client';

import Header from '@/components/blocks/Header';
import Footer from '@/components/blocks/Footer';
import Cart from '@/components/blocks/Cart';
import AdminProtected from '@/hooks/adminProtected';
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <AdminProtected>
            <div className="flex flex-col min-h-screen">
                <Header />
                <Cart />
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
        </AdminProtected>
    );
}
