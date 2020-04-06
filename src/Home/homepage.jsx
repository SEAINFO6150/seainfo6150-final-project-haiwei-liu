import React from "react";
import styles from './homepage.module.css';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className={styles.bgc}>
           <header className={styles.header}>Home</header>
            <div className={styles.label}>
                Welcome to my personal website!
            </div>
            <div>
                <img className={styles.img} src="/img/homepage1.jpeg" alt="img 1"/>
            </div>
        </div>
    )
}

export default Home