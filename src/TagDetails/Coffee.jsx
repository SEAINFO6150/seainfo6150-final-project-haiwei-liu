import React from "react";
import styles from './tagDetails.module.css';
import {Link} from "react-router-dom";

const Coffee = () => {
    return (
        <div className={styles.bgc}>
            <header className={styles.header}>Coffee Tag</header>
            <section className={styles.section}>
                <h1 className={styles.h1}>Blog Title : Caffè Americano</h1>
                <li className={styles.li}>
                    Caffè Americano (also known as Americano or American;
                    café americano, literally American coffee) is a type of coffee drink prepared by diluting an espresso with hot water,
                    giving it a similar strength to, but different flavor from, traditionally brewed coffee.
                    The strength of an Americano varies with the number of shots of espresso and the amount of water added.
                </li>
                <li className={styles.li}>
                    Created Date: 4/5/2020
                </li>
                <li className={styles.li}>
                    Author: Haiwei Liu
                </li>
            </section>
            <section className={styles.section}>
                <h1 className={styles.h1}>Blog Title : Latte</h1>
                <li className={styles.li}>
                    Caffe latte is a coffee drink made with espresso and steamed milk.
                    In northern Europe and Scandinavia, the term café au lait has traditionally been used for the combination of espresso and milk.
                    In France, café latte is mostly known from the original Italian name of the drink (caffè latte or caffelatte);
                </li>
                <li className={styles.li}>
                    Created Date: 4/5/2020
                </li>
                <li className={styles.li}>
                    Author: Haiwei Liu
                </li>
            </section>
            <section className={styles.section}>
                <h1 className={styles.h1}>Blog Title : Flat white</h1>
                <li className={styles.li}>
                    A flat white is a coffee drink consisting of espresso with microfoam (steamed milk with small, fine bubbles and a glossy or velvety consistency).
                    It is comparable to a latte, but smaller in volume and with less microfoam, therefore having a higher proportion of coffee to milk, and milk that is more velvety in consistency
                    – allowing the espresso to dominate the flavour, while being supported by the milk.
                </li>
                <li className={styles.li}>
                    Created Date: 4/5/2020
                </li>
                <li className={styles.li}>
                    Author: Haiwei Liu
                </li>
            </section>
        </div>
    )
}

export default Coffee