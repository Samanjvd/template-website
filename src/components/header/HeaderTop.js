import React from "react";
import "./HeaderTop.css";
import Navbar from "./Navbar";

export default function HeaderTop() {
  const namesNavbar = {
    name1: "Home",
    name2: "About",
    name3: "How it work",
    name4: "Clients",
    name5: "Portfolio",
  };

  return (
    <section className="header-top">
      <Navbar {...namesNavbar} />
      <a href="#" className="header-link">
        Contact us
      </a>
    </section>
  );
}
