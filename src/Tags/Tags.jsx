import React from "react";
import styles from './Tags.module.css';
import StudyButton from "../Button/StudyButton";
import Travel from "../Button/Travel";
import Fruit from "../Button/Fruit";
import Relax from "../Button/Relax";
import Coffee from "../Button/Coffee";

const Tags = () => {
    return (
        <div className={styles.bgc}>
            <header className={styles.header}>Tags</header>
            <nav>
                <section className={styles.flexContainer}>
                    <div className={styles.div}>
                        <StudyButton/>
                        <img className={styles.img} src="/img/tags1.jpeg" alt="study"/>
                    </div>
                    <div className={styles.div}>
                        <Coffee />
                        <img className={styles.img} src="/img/coffee.jpeg" alt="coffee"/>
                    </div>
                    <div className={styles.div}>
                        <Travel/>
                        <img className={styles.img} src="/img/tags3.jpeg" alt="travel"/>
                    </div>
                    <div className={styles.div}>
                        <Fruit/>
                        <img className={styles.img} src="https://images.pexels.com/photos/4000421/pexels-photo-4000421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="fruit"/>
                    </div>
                    <div className={styles.div}>
                        <Relax/>
                        <img className={styles.img} src="https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Brunch"/>
                    </div>
                </section>
            </nav>
        </div>
    )
}

export default Tags