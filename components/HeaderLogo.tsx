import { checkAdmin } from '@/hooks/userAuth';
import Link from 'next/link';
import React from 'react';

export default function HeaderLogo() {
    const isAdmin = checkAdmin();
    return isAdmin ? (
        <Link href="/dashboard/admin">
            <img src="/images/logo.png" alt="MealTime" className="w-14 h-14" />
        </Link>
    ) : (
        <Link href="/dashboard">
            <img src="/images/logo.png" alt="MealTime" className="w-14 h-14" />
        </Link>
    );
}
