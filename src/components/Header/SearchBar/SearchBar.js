import styles from './SearchBar.module.css';
import React from 'react';

function SearchBar() {
    return (
        <div>
            <input
                className={`${styles.input} input-text`}
                type="text"
                placeholder="Wyszukaj..."
            />
            <button className={`${styles.button} button`}>Szukaj</button>
        </div>
    );
}

export default SearchBar;
