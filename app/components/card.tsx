import Image from "next/image";
import styles from "../styles/card.module.css";

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
            <div className={styles.card_text}>
                {card.title}
                <div className={styles.card_arrow}></div>
            </div>
        </div>
    )
}
