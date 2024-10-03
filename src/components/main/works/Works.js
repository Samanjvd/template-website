import React from "react";
import "./Works.css";
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
    <div className="container">
      <section className="works">
        <h4 className="works-top-text">HOW IT WORK</h4>
        <h2 className="works-title">
          Three Simple Step To Started Working Process
        </h2>
        <div className="works-contect">
          <Boxs {...boxsProps[0]} />
          <Boxs {...boxsProps[1]} />
          <Boxs {...boxsProps[2]} />
        </div>
        <div className="img-bottom">
          <img src="./images/main-img.svg" alt="works" className="works-img" />
        </div>
      </section>
    </div>
  );
}
