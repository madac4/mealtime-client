'use client';

import { Onest as font } from 'next/font/google';
import '../styles/global.css';
import { cn } from '@/lib/utils';
import ReduxProvider from '@/store/ReduxProvider';
import LoadingScreen from './loading';
import { useLoadUserQuery } from '@/store/api/apiSlice';

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
            <body
                className={cn('min-h-screen bg-background font-sans antialiased', onest.variable)}>
                <ReduxProvider>
                    <Loading>{children}</Loading>
                </ReduxProvider>
            </body>
        </html>
    );
}

const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isLoading } = useLoadUserQuery({});
    return <>{isLoading ? <LoadingScreen /> : <>{children}</>}</>;
};
