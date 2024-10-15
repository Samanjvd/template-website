import React from "react";
import styles from "./Main.module.css";
import Works from "./works/Works";
import Portfolio from "./portfolio/Portfolio";
import Comments from "./comments/PersonComments";

export default function Main() {
  return (
    <main className={styles.main}>
      <Works />
      <Comments />
      <Portfolio />
    </main>
  );
}
