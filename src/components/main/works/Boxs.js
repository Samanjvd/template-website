import React from "react";
import "./Boxs.css";

export default function Boxs(props) {
  return (
    <div className="boxs">
      <h4 className="title">{props.title}</h4>
      <p className="text">{props.text}</p>
    </div>
  );
}
