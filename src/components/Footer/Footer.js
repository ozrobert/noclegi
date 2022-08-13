import styles from './Footer.module.css';
import ThemeContext from '../../context/ThemeContext';

const Footer = (props) => (
    <ThemeContext>
        {(value) => (
            <div className={`${styles.footer} text-${value}`}>Noclegi 2022</div>
        )}
    </ThemeContext>
);

export default Footer;
