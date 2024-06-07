'use client';

import Image from "next/image";
import stylesNavbar from "../styles/navbar.module.css";
import stylesMenu from "../styles/menu_mobile.module.css";
import { useState } from "react";

export default function Navbar() {
  const links = ['Агенство', 'Услуги', 'Кейсы', 'Блог', 'Контакты']
  const contacts = ['+7 999 123 45 67', 'hello@cyberia.studio', 'ул.Ярных, д.35, оф.10']

  const [menuButton, setMenuButton] = useState(true)
  const [menuIcon, setMenuIcon] = useState("/menu-burger.svg")
  const [menuState, setMenuState] = useState(false)

  function handleMenuClick() {
    setMenuButton(current => !current)
    // console.log(menuButton)

    if (menuButton) {
      setMenuIcon("/menu-burger-close.svg")
      setMenuState(true)
      // console.log(menuState)
    } else {
      setMenuIcon("/menu-burger.svg")
      setMenuState(false)
      // console.log(menuState)
    }
  }
  return (
    <>
      <div className={stylesNavbar.navbar}>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={30}
          priority
        />
        <div className={stylesNavbar.navbar_links}>
          {links.map(link => (
            <p className={stylesNavbar.navbar_item} key={link}>{link}</p>
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
            <p className={stylesMenu.menu_item} key={link}>{link}</p>
          ))}
        </div>
        <hr></hr>
        <div className={stylesMenu.menu_contacts}>
          <p>Контакты:</p>
          {contacts.map(contact => (
            <p className={stylesMenu.menu_item} key={contact}>{contact}</p>
          ))}
        </div>
        <hr></hr>
      </div>
    </>
  )
}