import React from "react";
import styles from './BlogDetails.module.css';

const dumplings = () => {
    return (
        <div>
            <div className={styles.bgc}>
                <header className={styles.header}>DUMPLINGS</header>
                <p className={styles.p}>
                    Manti (also manty or mantu) is a steamed dumpling in Central Asian and Chinese Islamic cuisine.
                    It contains a mixture of ground lamb (or beef) spiced with black pepper, enclosed in a dough wrapper.
                    Manti are cooked in a multi-level steamer (mantovarka) and served topped with butter, yogurt, sour cream, or onion sauce.
                    These dumplings are popular throughout Central Asia, including in Afghanistan, Kazakhstan, Kyrgyzstan, Pakistan, Tajikistan,
                    Uzbekistan,the Xinjiang region in China and the Caucasus.
                </p>
                <p className={styles.p}>
                    Chuchvara is a very small boiled dumpling typical of Uzbek and Tajik cuisine.
                    Made of unleavened dough squares filled with meat, it is similar to the Russian pelmeni and the Chinese wonton,
                    but in observance of the Islamic dietary rules, the meat filling is without pork.
                    Chuchvara can be served in a clear soup or on their own, with vinegar or sauce based on finely chopped greens,
                    tomatoes and hot peppers. Another popular way of serving chuchvara is topped with suzma (strained qatiq) or
                    with smetana (sour cream), Russian-style.
                </p>
                <p className={styles.p}>
                    A legend goes that dumplings were first invented in the era of the Three Kingdoms,
                    around 225 AD. Zhuge Liang, a general and minister of Shu Han,
                    dammed up a poison marsh on his southern campaign against the Nanman with dumplings instead of the heads that the Nanman used.
                    However, this legend is more commonly associated with the mantou (the name is supposedly evolved from "馒头",
                    also pronounced as "mantou").
                </p>

                <img className={styles.img} src="https://www.seriouseats.com/2010/06/20190916-wok-skills-Steaming-52.jpg"/>
            </div>
        </div>
    )
}

export default dumplings;