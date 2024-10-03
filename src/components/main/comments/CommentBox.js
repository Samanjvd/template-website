import React from "react";
import "./CommentBox.css";

export default function CommentBox({ massage, text, img }) {
  return (
    <div className="comments">
      <div className="comment-massage">{massage}</div>
      <div className="comment-info">
        <img src={img} alt="profile" className="comment-img" />
        <p className="comment-person">{text}</p>
      </div>
    </div>
  );
}
