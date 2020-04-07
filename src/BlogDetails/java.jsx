import React from "react";
import styles from './BlogDetails.module.css';

const java = () => {
    return (
        <div className={styles.bgc}>
            <header className={styles.header}>JAVA</header>
            <p className={styles.p}>
                Abstraction.
                Abstraction means using simple things to represent complexity.
                We all know how to turn the TV on, but we don’t need to know how it works in order to enjoy it.
                In Java, abstraction means simple things like objects, classes, and variables represent more complex underlying code and data.
                This is important because it lets avoid repeating the same work multiple times.
            </p>
            <p className={styles.p}>
                Encapsulation.
                This is the practice of keeping fields within a class private, then providing access to them via public methods.
                It’s a protective barrier that keeps the data and code safe within the class itself.
                This way, we can re-use objects like code components or variables without allowing open access to the data system-wide.
            </p>
            <p className={styles.p}>
                Inheritance.
                This is a special feature of Object Oriented Programming in Java.
                It lets programmers create new classes that share some of the attributes of existing classes.
                This lets us build on previous work without reinventing the wheel.
            </p>

            <img className={styles.img} src="https://cdn.vox-cdn.com/thumbor/giDY0xzU4fKG8MkAl9T_lqTuw-0=/43x0:593x367/920x613/filters:focal(43x0:593x367):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/48667835/dbgxt2rvpd26udoyzcqn.0.0.jpg"/>
        </div>
    )
}

export default java;