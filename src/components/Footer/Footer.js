import styles from './Footer.module.css';
import ThemeContext from '../../context/ThemeContext';

const Footer = (props) => (
    <ThemeContext.Consumer>
        {(value) => (
            <div className={`${styles.footer} text-${value}`}>Noclegi 2022</div>
        )}
    </ThemeContext.Consumer>
);

export default Footer;
