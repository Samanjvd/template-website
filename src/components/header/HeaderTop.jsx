import React from "react";
import styles from "./HeaderTop.module.css";
import Navbar from "./Navbar";

export default function HeaderTop() {
  const namesNavbar = {
    name1: "Home",
    name2: "About",
    name3: "How it work",
    name4: "Clients",
    name5: "Portfolio",
  };

  return (
    <section className={styles.headerTop}>
      <Navbar {...namesNavbar} />
      <a href="#" className={styles.headerLink}>
        Contact us
      </a>
    </section>
  );
}
