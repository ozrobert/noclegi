import styles from './Hotels.module.css';
import Hotel from './Hotel/Hotel';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

const propTypes = {
    hotels: PropTypes.array.isRequired,
};

const slowFunction = (count) => {
    for (let i = 0; i < 1500000000; i++) {}
    return count;
};

function Hotels(props) {
    const count = useMemo(
        () => slowFunction(props.hotels.length),
        [props.hotels.length]
    );

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Oferty ({count}):</h2>
            {props.hotels.map((hotel) => (
                <Hotel key={hotel.id} {...hotel} />
            ))}
        </div>
    );
}

Hotels.propTypes = propTypes;

export default Hotels;
