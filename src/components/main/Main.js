import React from "react";
import "./Main.css";
import Works from "./works/Works";
import Portfolio from "./portfolio/Portfolio";
import Comments from "./comments/PersonComments";

export default function Main() {
  return (
    <main className="main">
      <Works />
      <Comments />
      <Portfolio />
    </main>
  );
}
