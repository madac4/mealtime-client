'use client';

import { redirect } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';

export default function page() {
    const { token } = useSelector((state: any) => state.auth);
    if (token) {
        redirect('/dashboard');
    } else {
        redirect('/login');
    }
    return <div>Loading...</div>;
}
