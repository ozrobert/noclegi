import styles from './LastViewedHotel.module.css';

function LastViewedHotel(props) {
    return (
        <div className={`${styles.offerContainer} container`}>
            <header className={styles.header}>
                <h2>Ostatnio przeglądana oferta</h2>
                <h3>Wciąż zainteresowany?</h3>
            </header>
            <hr className={styles.divider} />
            <div className={styles.flex}>
                <main className={styles.hotelContainer}>
                    <p className={styles.hotelInfo}>{props.name}</p>
                    <p className={styles.hotelInfo}>{props.city}</p>
                    <p className={styles.hotelInfo}>Ocena: {props.rating}</p>
                </main>
                <div className={styles.buttonsContainer}>
                    <button className={styles.button} href="#">
                        Tak!
                    </button>
                    <button
                        className={styles.button}
                        href="#"
                        onClick={props.onRemove}
                    >
                        Nie
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LastViewedHotel;
