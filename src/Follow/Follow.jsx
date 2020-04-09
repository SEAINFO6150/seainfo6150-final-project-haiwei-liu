import React from "react";
import styles from './Follow.module.css';
import "react-form-next/index.css";
import Form from "../Form/Form";

const Follow = () => {
    return (
        <div className={styles.bgc}>
        <header className={styles.header}>
            Follow Me!
        </header>
            <div className={styles.div}>
                <Form />
            </div>
        </div>
    );
}


export default Follow