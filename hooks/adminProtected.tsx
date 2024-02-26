import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { userAuth } from './userAuth';

interface ProtectedProps {
    children: React.ReactNode;
}
export default function AdminProtected({ children }: ProtectedProps) {
    const { user } = useSelector((state: any) => state.auth);

    if (user.isAdmin) {
        return children;
    } else {
        return (
            <div className="flex flex-col items-center justify-center h-full py-10">
                <h1 className="text-4xl font-bold mb-4">Pagina nu a fost găsită.</h1>
                <p className="mb-6">Este posibil ca linkul pe care îl accesați să fie greșit.</p>
                <Link
                    href="/dashboard"
                    className={cn(
                        buttonVariants({ size: 'lg' }),
                        'text-[16px] py-6 flex gap-2 items-center',
                    )}>
                    Înapoi la pagina principală
                </Link>
            </div>
        );
    }
}
