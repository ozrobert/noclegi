import styles from './Hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg';
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/ThemeContext';
import { useContext } from 'react';
import useAuth from '../../../hooks/useAuth';

function Hotel(props) {
    const theme = useContext(ThemeContext);
    const [auth] = useAuth();

    const clickHandler = (e) => {
        e.preventDefault();
        props.onOpen(props);
    };

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
                        onClick={clickHandler}
                        className={`${styles.button} button-${theme.color} `}
                        href="#"
                    >
                        Pokaż
                    </a>
                </div>
            </div>
            <div className={styles.hotelDescContainer}>
                <p className={styles.desc}>{props.description}</p>
            </div>

            {auth ? (
                <p>Wolnych pokoi: 3</p>
            ) : (
                <p> Musisz się zalogować, aby sprawdzić wolne pokoje.</p>
            )}
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
