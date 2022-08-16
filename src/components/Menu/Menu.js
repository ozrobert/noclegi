import styles from './Menu.module.css';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';

function Menu() {
    const auth = useContext(AuthContext);

    const login = (e) => {
        e.preventDefault();
        auth.login();
    };

    const logout = (e) => {
        e.preventDefault();
        auth.logout();
    };

    return (
        <nav className={styles.menuContainer}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    <a href="#">Home</a>
                </li>
                <li className={styles.menuItem}>
                    {auth.isAuthenticated ? (
                        <a href="#" onClick={logout}>
                            Wyloguj
                        </a>
                    ) : (
                        <a href="#" onClick={login}>
                            Zaloguj
                        </a>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
