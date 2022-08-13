import styles from './Footer.module.css';

const Footer = (props) => (
    <div className={`${styles.footer} text-${props.theme}`}>Noclegi 2022</div>
);

export default Footer;
