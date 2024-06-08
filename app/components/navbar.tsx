'use client';

import Image from "next/image";
import stylesNavbar from "../styles/navbar.module.css";
import stylesMenu from "../styles/menu_mobile.module.css";
import { useState } from "react";

// навбар
export default function Navbar() {
  const links = ['Агенство', 'Услуги', 'Кейсы', 'Блог', 'Контакты']
  const contacts = ['+7 999 123 45 67', 'hello@cyberia.studio', 'ул.Ярных, д.35, оф.10']

  // кнопка открытия меню на мобильных устройствах
  const [menuButton, setMenuButton] = useState(true)
  const [menuIcon, setMenuIcon] = useState("/menu-burger.svg")
  const [menuState, setMenuState] = useState(false)

  // изменения изображения кнопки меню при открытии/закрытии меню
  function handleMenuClick() {
    setMenuButton(current => !current)

    if (menuButton) {
      setMenuIcon("/menu-burger-close.svg")
      setMenuState(true)
    } else {
      setMenuIcon("/menu-burger.svg")
      setMenuState(false)
    }
  }

  return (
    <>
      <div className={stylesNavbar.navbar}>
        <a href="#" className={stylesNavbar.navbar_logo}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={30}
            priority
          />
        </a>
        <div className={stylesNavbar.navbar_links}>
          {links.map(link => (
            <a href="#" className={stylesMenu.menu_item} key={link}>{link}</a>
          ))}
        </div>
        <button className={stylesNavbar.navbar_image_button}
          onClick={(e) => {
            handleMenuClick()
          }}>
          <Image
            src={menuIcon}
            alt="Menu button"
            className={stylesNavbar.navbar_menu_btn}
            width={30}
            height={30}
            priority
          />
        </button>
      </div>

      <div className={menuState ? stylesMenu.menu_opened : stylesMenu.menu_closed}>
        <div className={stylesMenu.menu_links}>
          {links.map(link => (
            <a href="#" className={stylesMenu.menu_item} key={link}>{link}</a>
          ))}
        </div>
        <hr></hr>
        <div className={stylesMenu.menu_contacts}>
          <p>Контакты:</p>
          {contacts.map(contact => (
            <a href="#" className={stylesMenu.menu_item} key={contact}>{contact}</a>
          ))}
        </div>
        <hr></hr>
      </div>
    </>
  )
}