import styles from './Throbber.module.css';
import ThemeContext from '../../context/ThemeContext';
import { useContext } from 'react';

export default function Throbber() {
    const theme = useContext(ThemeContext);

    return <div className={`${styles.throbber} circle-${theme.color}`}></div>;
}
