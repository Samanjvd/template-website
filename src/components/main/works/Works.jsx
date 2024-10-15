import React from "react";
import styles from "./Works.module.css";
import Boxs from "./Boxs";

export default function Works() {
  const boxsProps = [
    {
      title: "Research Project",
      text: "There are many variations of passages of Lorem Ipsum available",
    },
    {
      title: "Targeting",
      text: "There are many variations of assages of Lorem Ipsum available",
    },
    {
      title: "Result",
      text: "There are many variations of passages of Lorem Ipsum available",
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.works}>
        <h4 className={styles.worksTopText}>HOW IT WORK</h4>
        <h2 className={styles.worksTitle}>
          Three Simple Step To Started Working Process
        </h2>
        <div className={styles.worksContect}>
          <Boxs {...boxsProps[0]} />
          <Boxs {...boxsProps[1]} />
          <Boxs {...boxsProps[2]} />
        </div>
        <div className={styles.imgBottom}>
          <img src="./images/main-img.svg" alt="works" className={styles.worksImg} />
        </div>
      </section>
    </div>
  );
}
