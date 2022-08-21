import styles from './SearchBar.module.css';
import { useContext, useEffect, useRef, useState } from 'react';
import ThemeContext from '../../../context/ThemeContext';
import PropTypes from 'prop-types';

const propTypes = {
    onSearch: PropTypes.func.isRequired,
};

function SearchBar(props) {
    const theme = useContext(ThemeContext);
    const [term, setTerm] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input
                ref={inputRef}
                className={`${styles.input} input-text`}
                type="text"
                placeholder="Wyszukaj..."
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && props.onSearch(term)}
            />

            <button
                className={`${styles.button} button-${theme.color}`}
                onClick={() => props.onSearch(term)}
            >
                Szukaj
            </button>
        </div>
    );
}

SearchBar.propTypes = propTypes;

export default SearchBar;
