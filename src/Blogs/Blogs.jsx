import React from "react";
import styles from './Blogs.module.css';
import {Link} from "react-router-dom";

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
            </article>
            <div>
                <section className={styles.section}>
                    <Link to="/blogs/java">JAVA</Link>
                </section>
                <section className={styles.section}>
                    <Link to="/blogs/dumplings">DUMPLINGS</Link>
                </section>
                <section className={styles.section}>
                    <Link to="/blogs/newyork">New York</Link>
                </section>

            </div>
            <img className={styles.img} src={props.content.img1}/>
            <img className={styles.img} src={props.content.img2}/>
        </div>
    )
}

export default Blogs