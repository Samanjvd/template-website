import React from "react";
import styles from "./Boxs.module.css";

export default function Boxs(props) {
  return (
    <div className={styles.boxs}>
      <h4 className={styles.title}>{props.title}</h4>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
}
