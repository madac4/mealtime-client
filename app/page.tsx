'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoadingScreen from './loading';

export default function Page() {
    const router = useRouter();
    const { token, user } = useSelector((state: any) => state.auth);

    useEffect(() => {
        if (token && !user.isAdmin) {
            router.push('/dashboard/shop');
        } else if (token && user.isAdmin) {
            router.push('/dashboard/admin');
        } else {
            router.push('/login');
        }
    }, []); // Empty dependency array

    return <LoadingScreen />;
}
