import React from "react";
import "./PersonComments.css";
import CommentBox from "./CommentBox";
import Logos from "./Logos";

export default function PersonComments() {
  const personCommentProps = [
    {
      massage:
        "Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.",
      text: "Martin Jones, Creative Cons",
      img: "./images/person-1.png",
    },
    {
      massage:
        "Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.",
      text: "Martin Jones, Creative Cons",
      img: "./images/person-2.png",
    },
    {
      massage:
        "Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.",
      text: "Martin Jones, Creative Cons",
      img: "./images/person-3.png",
    },
  ];

  const logosProps = {
    logo1: "./images/logo-1.svg",
    logo2: "./images/logo-2.svg",
    logo3: "./images/logo-3.svg",
    logo4: "./images/logo-4.svg",
    logo5: "./images/logo-5.svg",
  };

  return (
    <section className="person-comments">
      <div className="container">
        <h2 className="person-comments-title">You’re in a good hand</h2>
        <p className="person-comments-text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered.
        </p>
        <div className="comment-container">
          <div className="comment-box">
            <CommentBox {...personCommentProps[0]} />
            <CommentBox {...personCommentProps[1]} />
            <CommentBox {...personCommentProps[2]} />
          </div>
          <Logos {...logosProps} />
        </div>
      </div>
    </section>
  );
}
