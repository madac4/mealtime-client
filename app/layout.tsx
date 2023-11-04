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
    title: "Mealtime - Mai mult decât un simplu ceai - It's Over 9000!",
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1', // <-- now here
    description:
        'Proprietățile înalte gustative ale produselor noastre sunt obținute datorită utilizării exclusiv a unor materii prime naturale, precum și a diferitelor metode și tehnici culinare, care sunt perfect stăpânite de bucătarii noștri. Noi din principiu nu folosim coloranți, potențiatori de aromă și conservanți, iar termenul îndelungat de păstrare îl obținem datorită utilizării în producție a înghețării cu șoc. Tuturor le sunt cunoscute proprietățile benefice ale ceaiurilor și limonadelor naturale de casă din pomușoare, al căror gust atrage atât adulții cât și copiii, dar pregătirea unei astfel de băuturi durează foarte mult și necesită abilități culinare considerabile. Cu ajutorul concentratelor ceaiului de casă sau a limonadei, pregătirea băuturilor a devenit mai simplă, rapidă și mai comodă.',
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
