import React from "react";
import styles from "./PortfolioItems.module.css";

export default function PortfolioItems({ img1, img2, img3, img4, img5, img6 }) {
  return (
    <div className={styles.portfolioItems}>
      <div className={styles.portfolioItem}>
        <img src={img1} alt="portfolio" />
      </div>
      <div className={styles.portfolioItem}>
        <img src={img2} alt="portfolio" />
      </div>
      <div className={styles.portfolioItem}>
        <img src={img3} alt="portfolio" />
      </div>
      <div className={styles.portfolioItem}>
        <img src={img4} alt="portfolio" />
      </div>
      <div className={styles.portfolioItem}>
        <img src={img5} alt="portfolio" />
      </div>
      <div className={styles.portfolioItem}>
        <img src={img6} alt="portfolio" />
      </div>
    </div>
  );
}
