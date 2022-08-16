import styles from './Footer.module.css';
import ThemeContext from '../../context/ThemeContext';
import { useContext } from 'react';

const Footer = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className={`${styles.footer} text-${theme.color}`}>
            Noclegi 2022
        </div>
    );
};

export default Footer;
