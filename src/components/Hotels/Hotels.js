import styles from './Hotels.module.css';
import { Component } from 'react';
import Hotel from './Hotel/Hotel';

class Hotels extends Component {
    render() {
        return (
            <div className={`${styles.container} container`}>
                <h2 className={styles.title}>Oferty:</h2>
                {this.props.hotels.map((hotel) => (
                    <Hotel key={hotel.id} {...hotel} />
                ))}
            </div>
        );
    }
}

export default Hotels;
