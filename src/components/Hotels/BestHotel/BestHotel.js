import styles from './BestHotel.module.css';

const BestHotel = (props) => {
    const hotel = props.getHotel({ minHotels: 2 });

    if (!hotel) return null;

    return (
        <div className={styles.bestOfferContainer}>
            <header>
                <h2 className={styles.title}>Najlepsza oferta!</h2>
            </header>
            <div className={styles.offerInfo}>
                <div className={styles.flex}>
                    <h3 className={styles.name}>{hotel.name}</h3>
                    <p>Ocena: {hotel.rating}</p>
                </div>
                <a href="#" className="button-light">
                    Pokaż
                </a>
            </div>
        </div>
    );
};

export default BestHotel;
