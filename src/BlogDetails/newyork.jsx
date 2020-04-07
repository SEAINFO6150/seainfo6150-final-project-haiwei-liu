import React from "react";
import styles from './BlogDetails.module.css';

const newyork = () => {
    return (
        <div>
            <div className={styles.bgc}>
                <header className={styles.header}>NEW YORK</header>
                <p className={styles.p}>
                    New York City (NYC), often called the City of New York or simply New York (NY), is the most populous city in the United States.
                </p>
                <p className={styles.p}>
                    With an estimated 2018 population of 8,398,748 distributed over about 302.6 square miles (784 km2),
                    New York is also the most densely populated major city in the United States.
                    Located at the southern tip of the U.S. state of New York, the city is the center of the New York metropolitan area,
                    the largest metropolitan area in the world by urban landmass.
                </p>
                <p className={styles.p}>
                    With almost 20 million people in its metropolitan statistical area and approximately 23 million in its combined statistical area,
                    it is one of the world's most populous megacities.
                    New York City has been described as the cultural, financial, and media capital of the world,
                    significantly influencing commerce, entertainment, research, technology, education, politics, tourism, art, fashion, and sports.
                    Home to the headquarters of the United Nations, New York is an important center for international diplomacy.
                </p>

                <img className={styles.img} src="https://www.amny.com/wp-content/uploads/2020/03/GettyImages-1089200736.jpg"/>
            </div>
        </div>
    )
}

export default newyork;