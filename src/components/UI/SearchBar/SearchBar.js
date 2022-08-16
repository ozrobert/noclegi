import styles from './SearchBar.module.css';
import { useContext, useState } from 'react';
import ThemeContext from '../../../context/ThemeContext';
import PropTypes from 'prop-types';

const propTypes = {
    onSearch: PropTypes.func.isRequired,
};

function SearchBar(props) {
    const [term, setTerm] = useState('');
    const theme = useContext(ThemeContext);

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
