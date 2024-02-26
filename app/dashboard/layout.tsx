'use client';

import Header from '@/components/blocks/Header';
import Footer from '@/components/blocks/Footer';
import Cart from '@/components/blocks/Cart';
import Protected from '@/hooks/useProtected';
import { checkAdmin } from '@/hooks/userAuth';
import AdminHeader from '@/components/blocks/AdminHeader';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const isAdmin = checkAdmin();

    return (
        <Protected>
            <div className="flex flex-col min-h-screen">
                {isAdmin ? <AdminHeader /> : <Header />}
                {!isAdmin && <Cart />}
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
        </Protected>
    );
}
