import { redirect } from 'next/navigation';
import { useSelector } from 'react-redux';

interface ProtectedProps {
    children: React.ReactNode;
}
export default function AdminProtected({ children }: ProtectedProps) {
    const { user } = useSelector((state: any) => state.auth);

    return user.isAdmin ? children : redirect('/');
}
