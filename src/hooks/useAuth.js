import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export default function useAuth() {
    const authContext = useContext(AuthContext);
    let auth = authContext.isAuthenticated;

    const setAuth = (value) => {
        value ? authContext.login() : authContext.logout();
    };

    return [auth, setAuth];
}
