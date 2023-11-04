import type { Metadata } from 'next';
import { Onest as font } from 'next/font/google';
import '../styles/global.css';
import { cn } from '@/lib/utils';

const onest = font({
    subsets: ['latin'],
    variable: '--font-onest',
    fallback: ['sans-serif'],
    display: 'swap',
    adjustFontFallback: false,
});

export const metadata: Metadata = {
    title: 'MealTime General Application',
    description: 'MealTime dasbhoard for clients',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ro" suppressHydrationWarning>
            <body
                className={cn('min-h-screen bg-background font-sans antialiased', onest.variable)}>
                {children}
            </body>
        </html>
    );
}
