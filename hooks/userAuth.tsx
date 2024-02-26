import { useSelector } from 'react-redux';

export function userAuth() {
    const { user } = useSelector((state: any) => state.auth);

    if (user) {
        return true;
    } else {
        return false;
    }
}

export function checkAdmin() {
    const { user } = useSelector((state: any) => state.auth);

    if (user?.isAdmin) {
        return true;
    } else {
        return false;
    }
}
