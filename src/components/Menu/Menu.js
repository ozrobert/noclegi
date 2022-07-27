import styles from './Menu.module.css';
import React from 'react';

function Menu() {
    return (
        <nav className={`${styles.menuContainer} container`}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    <a href="#">Home</a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
