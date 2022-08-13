import styles from './Menu.module.css';

function Menu(props) {
    return (
        <nav className={styles.menuContainer}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    <a href="#" className={`text-${props.theme}`}>
                        Home
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
