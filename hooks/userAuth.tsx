import { useSelector } from 'react-redux';

export default function userAuth() {
    const { user, logged } = useSelector((state: any) => state.auth);

    if (user) {
        return true;
    } else {
        return false;
    }
}
