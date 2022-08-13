import styles from './Throbber.module.css';
import ThemeContext from '../../context/ThemeContext';

export default function Throbber(props) {
    <ThemeContext>
        {(value) => (
            <div className={`${styles.throbber} circle-${value}`}></div>
        )}
    </ThemeContext>;
}
