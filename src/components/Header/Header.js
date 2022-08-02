import styles from './Header.module.css';
import SearchBar from './SearchBar/SearchBar';

function Header(props) {
    return (
        <header className={`${styles.header} container`}>
            <SearchBar onSearch={props.onSearch} />
        </header>
    );
}

export default Header;
