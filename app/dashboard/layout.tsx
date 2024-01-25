'use client';

import Header from '@/components/blocks/Header';
import Footer from '@/components/blocks/Footer';
import Cart from '@/components/blocks/Cart';
import Protected from '@/hooks/useProtected';
import { useSelector } from 'react-redux';
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { token } = useSelector((state: any) => state.auth);
    return (
        <Protected>
            {token && (
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <Cart />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            )}
        </Protected>
    );
}
