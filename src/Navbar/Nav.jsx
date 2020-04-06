import React from "react";
import styles from './Nav.module.css';
import {Link} from "react-router-dom";


const Nav = () => {
    return (
        <div>
            <header className={styles.header}>Haiwei's Blog</header>
            <div className={styles.bar}>
                <span>
                    <Link to="/">Home</Link>
                </span>
                <span>
                    <Link to="/blogs/Btitle">Blogs</Link>
                </span>
                <span>
                    <Link to="/tags">Tags</Link>
                </span>
                <span>
                    <Link to="/about">About Me</Link>
                </span>
                <span>
                    <Link to="/follow">Follow Me</Link>
                </span>
            </div>
        </div>
    )
}

export default Nav