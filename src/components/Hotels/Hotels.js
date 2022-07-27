import styles from './Hotels.module.css';
import React, { Component } from 'react';
import Hotel from './Hotel/Hotel';

class Hotels extends Component {
    render() {
        return (
            <div className={`${styles.container} container`}>
                <h2 className={styles.title}>Oferty:</h2>
                <Hotel />
                <Hotel />
                <Hotel />
            </div>
        );
    }
}

export default Hotels;
