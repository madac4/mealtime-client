'use client';
import AdminProtected from '@/hooks/adminProtected';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return <AdminProtected>{children}</AdminProtected>;
}
