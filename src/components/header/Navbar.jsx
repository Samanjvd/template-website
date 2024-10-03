import React from "react";
import styles from "./Navbar.module.css";


export default function Navbar({ name1, name2, name3, name4, name5 }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLego}>
        <img
          src="./images/Interactive-ART.png"
          alt="lego"
          width=""
          height=""
          className={styles.navLegoImg}
        />
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="#" className={styles.menuLink}>
            {name1}
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="#" className={styles.menuLink}>
            {name2}
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="#" className={styles.menuLink}>
            {name3}
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="#" className={styles.menuLink}>
            {name4}
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="#" className={styles.menuLink}>
            {name5}
          </a>
        </li>
      </ul>
    </nav>
  );
}
