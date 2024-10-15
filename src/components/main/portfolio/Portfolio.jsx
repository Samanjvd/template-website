import React from "react";
import styles from "./Portfolio.module.css";
import PortfolioItems from "./PortfolioItems";

export default function Portfolio() {
  const portfolioProps = {
    img1: "./images/portfolio-1.jpg",
    img2: "./images/portfolio-2.jpg",
    img3: "./images/portfolio-3.jpg",
    img4: "./images/portfolio-4.jpg",
    img5: "./images/portfolio-5.jpg",
    img6: "./images/portfolio-6.jpg",
  };

  return (
    <div className={styles.container}>
      <div className={styles.portfolio}>
        <div className={styles.portfolioTopText}>PORTFOLIO</div>
        <div className={styles.portfolioTitle}>
          Three Simple Step To Started Working Process
        </div>
        <PortfolioItems {...portfolioProps} />
      </div>
    </div>
  );
}
