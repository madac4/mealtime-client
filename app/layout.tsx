'use client';

import { Onest as font } from 'next/font/google';
import '../styles/global.css';
import { cn } from '@/lib/utils';
import ReduxProvider from '@/store/ReduxProvider';
import Heading from '@/components/Heading';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/sonner';

const onest = font({
    subsets: ['latin'],
    variable: '--font-onest',
    fallback: ['sans-serif'],
    display: 'swap',
    adjustFontFallback: false,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ro" suppressHydrationWarning>
            <Heading
                title="Platforma pentru parteneri MealTime"
                description="Platforma pentru parteneri MealTime"
                keywords="Platforma pentru parteneri MealTime, mealtime, ceaiuri,"
            />
            <body
                className={cn('min-h-screen bg-background font-sans antialiased', onest.variable)}>
                <ReduxProvider>
                    {children}
                    <Toaster />
                    <Analytics />
                </ReduxProvider>
            </body>
        </html>
    );
}
