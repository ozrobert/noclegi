import styles from './Header.module.css';
import withMousePosition from '../HOC/withMousePosition';

function Header(props) {
    const parallaxStyles = {
        // - odpowiada za przeciwny kierunek
        transform: `
        translate(${-props.mouseX / 10}px, ${-props.mouseY / 50}px)`,
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerImage} style={parallaxStyles}></div>
            {props.children}
        </header>
    );
}

export default withMousePosition(Header);
