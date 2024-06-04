import Image from "next/image";
import styles from "../styles/card.module.css";
import stylesTitle from "../styles/title.module.css";
import classNames from 'classnames'

export default function Card({ ...card }) {
    return (
        <div className={styles.card}>
            <Image
                src={card.image_dark}
                alt="Logo"
                className={styles.card_image}
                width={600}
                height={600}
                priority
            />
            <div className={classNames(styles.card_text, stylesTitle.title_text_small)}>
                {card.title}
                <div className={styles.card_arrow}></div>
            </div>
        </div>
    )
}
