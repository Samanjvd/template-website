import React from "react";
import styles from "./Logos.module.css";

export default function Logos({ logo1, logo2, logo3, logo4, logo5 }) {
  return (
    <ul className={styles.logos}>
      <li className={styles.logoItem}>
        <img src={logo1} alt="logo" className={styles.logoImg} />
      </li>
      <li className={styles.logoItem}>
        <img src={logo2} alt="logo" className={styles.logoImg} />
      </li>
      <li className={styles.logoItem}>
        <img src={logo3} alt="logo" className={styles.logoImg} />
      </li>
      <li className={styles.logoItem}>
        <img src={logo4} alt="logo" className={styles.logoImg} />
      </li>
      <li className={styles.logoItem}>
        <img src={logo5} alt="logo" className={styles.logoImg} />
      </li>
    </ul>
  );
}
