import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import styles from './BestHotel.module.css';

const BestHotel = (props) => {
    const endTime = dayjs().add(23, 'minute').add(34, 'second');

    const [time, setTime] = useState('');

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            const leftTime = endTime.diff(dayjs()) / 1000;
            const minutes = Math.floor(leftTime / 60);
            const seconds = Math.floor(leftTime % 60);

            const timeToDisplay = `${minutes} minut i ${seconds} sekund`;

            setTime(timeToDisplay);
        }, 1000);

        return () => {
            clearInterval(countdownInterval);
        };
    }, []);

    const hotel = props.getHotel();
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
            <p>Do końca oferty pozostało: {time}</p>
        </div>
    );
};

export default BestHotel;
