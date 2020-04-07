import React from "react";
import styles from './Blogs.module.css';

const Blogs =(props) => {
    return (
        <div className={styles.bgc}>
            <header className={styles.header}>Blogs</header>
            <article className={styles.article}>
                <h1 className={styles.h1}>{props.content.title}</h1>
                <p className={styles.p}>Author: {props.content.author}</p>
                <p className={styles.p}>
                    Created Date: {props.content.date}
                </p>
                <p className={styles.p}>
                    {props.content.text}
                </p>
                <p className={styles.p}>
                    The Duke's Choice Award is dedicated to all members of the Java ecosystem!
                    In keeping with its 17-year history, the 2019 Duke's Choice Award winners will be announced at Code One,
                    the world's biggest Java technology conference and gathering of Java community members.
                    The Duke's Choice Award celebrates extreme innovation using Java technology.
                    The primary judging criterion for this prestigious award is innovation,
                    putting small developer shops and individual developers on an equal footing with global giants.
                    Nominations are accepted by everyone (including Oracle employees) for anyone (including self-nominations) of a project,
                    person, product, service or any program related to Java innovation.
                </p>
            </article>
        </div>
    )
}

export default Blogs