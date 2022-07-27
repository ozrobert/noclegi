import styles from './Header.module.css';
import React from 'react';
import SearchBar from './SearchBar/SearchBar';

function Header() {
    return (
        <header className={`${styles.header} container`}>
            <SearchBar />
        </header>
    );
}

export default Header;
