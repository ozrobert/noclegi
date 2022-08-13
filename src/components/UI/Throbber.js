import styles from './Throbber.module.css';

export default function Throbber(props) {
    return <div className={`${styles.throbber} circle-${props.theme}`}></div>;
}
