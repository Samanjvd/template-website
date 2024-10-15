import React from "react";
import styles from "./NewsLetters.module.css";

export default function NewsLetters() {
  return (
    <div className={styles.newsLetters}>
      <div className={styles.container}>
        <div className={styles.newsLettersWrapper}>
          <h3 className={styles.newsLettersText}>
            Create a new generation website for your business.
          </h3>
          <div className={styles.newsLettersEmail}>
            <input
              type="email"
              className={styles.newsLettersInput}
              placeholder="Email address"
            />
            <button className={styles.newsLettersBtn}>
              <img src="./images/right-arrow.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
