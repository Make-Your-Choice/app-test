import Image from "next/image";
import styles from "../styles/footer.module.css";

export default function Footer() {
    const contactsNav = ['+7 999 123 45 67', 'Агенство', 'Блог', 'hello@cyberia.studio', 'Услуги', 'Контакты', 'ул. Ярных, д. 35, оф. 10', 'Кейсы']
    return (
        <div className={styles.footer}>
            <div className={styles.footer_logo_wrapper}>
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={150}
                    height={40}
                    priority
                />
                <p className={styles.footer_logo_text}>Веб-разработка и усиление IT-команд</p>
            </div>
            <div className={styles.footer_links}>
                {contactsNav.map(link => (
                    <p className={styles.footer_item} key={link}>{link}</p>
                ))}
            </div>
        </div>
    )
}