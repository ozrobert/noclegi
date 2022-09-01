import useAuth from '../../hooks/useAuth';
import styles from './Menu.module.css';

function Menu() {
    // const auth = useContext(AuthContext);
    const [auth, setAuth] = useAuth();

    const login = (e) => {
        e.preventDefault();
        // auth.login();
        setAuth(true);
    };

    const logout = (e) => {
        e.preventDefault();
        // auth.logout();
        setAuth(false);
    };

    return (
        <nav className={styles.menuContainer}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    <a href="#">Home</a>
                </li>
                <li className={styles.menuItem}>
                    {auth ? (
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
