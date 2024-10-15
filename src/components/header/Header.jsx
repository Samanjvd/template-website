import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import styles from "./Header.module.css";

export default function Modal() {
  return (
    <div className={styles.container}>
      <header className="header">
        <HeaderTop />
        <HeaderBottom />
      </header>
    </div>
  );
}
