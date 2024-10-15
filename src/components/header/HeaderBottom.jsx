import React from "react";
import styles from "./HeaderBottom.module.css";

export default function HeaderBottom() {
  
  return (
    <section className={styles.headerBottom}>
      <div className={styles.headerContentLeft}>
        <div className={styles.sectionText}>
          <h1 className={styles.headerContentTitle}>
            Create a new generation website for your business.
          </h1>
          <p className={styles.headerContentText}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className={styles.boxLinks}>
          <a href="/#" className={`${styles.headerContentLink}  ${styles.color}`}   >
            Contact us
          </a>
          <a href="/#" className={styles.headerContentLink}>
            See our works
          </a>
        </div>
      </div>
      <div className={styles.headerContentRight}>
        <img
          src="./images/header-img.svg"
          alt="img-header"
          className={styles.headerContentImg}
        />
      </div>
    </section>
  );
}
