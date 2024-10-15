import React from "react";
import styles from "./FooterBottom.module.css";

export default function FooterBottom() {
  return (
    <div className={styles.container}>
      <div className={styles.copyRight}>
        <p className={styles.copyRightDate}>Copyright © 2018-2019 </p>
        <p className={styles.copyRightText}>
          Interactive ART Company All rights reserved
        </p>
      </div>
    </div>
  );
}
