import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import "./Header.css";

export default function Modal() {
  return (
    <div className="container">
      <header className="header">
        <HeaderTop />
        <HeaderBottom />
      </header>
    </div>
  );
}
