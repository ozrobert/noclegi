import { useContext, useDebugValue } from 'react';
import AuthContext from '../context/AuthContext';

export default function useAuth() {
    const authContext = useContext(AuthContext);
    let auth = authContext.isAuthenticated;

    useDebugValue(auth, (auth) => {
        return auth ? 'Zalogowany' : 'Wylogowany';
    });

    const setAuth = (value) => {
        value ? authContext.login() : authContext.logout();
    };

    return [auth, setAuth];
}
