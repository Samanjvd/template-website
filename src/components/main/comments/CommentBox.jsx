import React from "react";
import styles from "./CommentBox.module.css";

export default function CommentBox({ massage, text, img }) {
  return (
    <div className={styles.comments}>
      <div className={styles.commentMassage}>{massage}</div>
      <div className={styles.commentInfo}>
        <img src={img} alt="profile" className={styles.commentImg} />
        <p className={styles.commentPerson}>{text}</p>
      </div>
    </div>
  );
}
