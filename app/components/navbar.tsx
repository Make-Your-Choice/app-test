import Image from "next/image";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const linksNav = ['Агенство', 'Услуги', 'Кейсы', 'Блог', 'Контакты']
  return (
    <div className={styles.navbar}>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={100}
        height={30}
        priority
      />
      <div className={styles.navbar_links}>
        {linksNav.map(link => (
          <p className={styles.navbar_item} key={link}>{link}</p>
        ))}
        {/* <p className={styles.navbar_item}>Агенство</p>
        <p className={styles.navbar_item}>Услуги</p>
        <p className={styles.navbar_item}>Кейсы</p>
        <p className={styles.navbar_item}>Блог</p>
        <p className={styles.navbar_item}>Контакты</p> */}
      </div>
      <Image
        src="/menu-burger.svg"
        alt="Menu button"
        className={styles.navbar_menu_btn}
        width={30}
        height={30}
        priority
      />
    </div>
  )
}