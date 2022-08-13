import styles from './Hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg';
import PropTypes from 'prop-types';

function Hotel(props) {
    return (
        <div className={styles.hotel}>
            <div className={styles.flexContainer}>
                <div className={styles.hotelImgContainer}>
                    <img
                        className={styles.hotelImg}
                        src={hotelImg}
                        alt="Hotel"
                    />
                </div>
                <div className={styles.hotelInfoContainer}>
                    <p className={styles.title}>{props.name}</p>
                    <span className={styles.badge}>{props.city}</span>
                </div>
                <div className={styles.hotelInfoContainer}>
                    <p className={styles.rate}>Ocena: {props.rating}</p>
                    <a
                        className={`${styles.button} button-${props.theme} `}
                        href="#"
                    >
                        Pokaż
                    </a>
                </div>
            </div>
            <div className={styles.hotelDescContainer}>
                <p className={styles.desc}>{props.description}</p>
            </div>
        </div>
    );
}

Hotel.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

export default Hotel;
