import styles from './SearchBar.module.css';
import { useState } from 'react';

function SearchBar(props) {
    const [term, setTerm] = useState('');

    return (
        <div>
            <input
                className={`${styles.input} input-text`}
                type="text"
                placeholder="Wyszukaj..."
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && props.onSearch(term)}
            />
            <button
                className={`${styles.button} button`}
                onClick={() => props.onSearch(term)}
            >
                Szukaj
            </button>
        </div>
    );
}

export default SearchBar;
