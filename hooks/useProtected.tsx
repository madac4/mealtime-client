import { userAuth } from './userAuth';
import { useRouter } from 'next/navigation';

interface ProtecredProps {
    children: React.ReactNode;
}

export default function Protected({ children }: ProtecredProps) {
    const isAuthenticated = userAuth();
    const router = useRouter();

    if (isAuthenticated) {
        return <>{children}</>;
    } else {
        router.replace('/');
    }
}
