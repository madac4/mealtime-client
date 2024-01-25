import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useSelector } from 'react-redux';

interface ProtectedProps {
    children: React.ReactNode;
}
export default function AdminProtected({ children }: ProtectedProps) {
    const { user } = useSelector((state: any) => state.auth);

    return user.isAdmin ? (
        children
    ) : (
        <div className="delogged text-center py-20">
            <h2>Ești delogat!</h2>

            <Link
                href="/login"
                className={cn(
                    buttonVariants({ variant: 'default', size: 'lg' }),
                    'w-full gap-2 flex items-center text-lg mt-4 dark:bg-black py-6 mt-6',
                )}>
                Logheazăte
                <p>{children}</p>
            </Link>
        </div>
    );
}
