import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Footer() {
    const currentRoute = usePathname();
    const currentYear = new Date().getFullYear();
    const active = 'font-semibold text-red-500';
    return (
        <footer className="border-t text-center py-5 px-4">
            <small>Copyright &copy; {currentYear}. Mealtime</small>
            {/* <nav className="flex gap-5 mt-4 justify-center">
                <Link href="/privacy" className={currentRoute === '/privacy' ? active : ''}>
                    Privacy
                </Link>
                <Link href="/terms" className={currentRoute === '/terms' ? active : ''}>
                    Terms
                </Link>
            </nav> */}
        </footer>
    );
}
