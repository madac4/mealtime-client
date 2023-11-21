import { redirect } from 'next/navigation';
import userAuth from './userAuth';

interface ProtecredProps {
    children: React.ReactNode;
}

export default function Protected({ children }: ProtecredProps) {
    const isAuthenticated = userAuth();

    return isAuthenticated ? children : redirect('/');
}
