import styles from './Hotel.module.css';
import React from 'react';
import hotelImg from '../../../assets/images/hotel.jpg';

function Hotel() {
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
                    <p className={styles.title}>Pensjonat</p>
                    <span className={styles.badge}>Warszawa</span>
                </div>
                <div className={styles.hotelInfoContainer}>
                    <p className={styles.rate}>Ocena: 8.3</p>
                    <a className={`${styles.button} button`} href="#">
                        Pokaż
                    </a>
                </div>
            </div>
            <div className={styles.hotelDescContainer}>
                <p className={styles.desc}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eaque fugit ratione cumque a rem, eum nulla odit voluptates,
                    deleniti labore sapiente nobis voluptatem voluptate sed eos
                    nisi distinctio sint dolorem.
                </p>
            </div>
        </div>
    );
}

export default Hotel;
