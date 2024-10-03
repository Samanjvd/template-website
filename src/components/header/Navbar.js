import React from "react";
import "./Navbar.css";

export default function Navbar({ name1, name2, name3, name4, name5 }) {
  return (
    <nav className="nav">
      <div className="nav-lego">
        <img
          src="./images/Interactive-ART.png"
          alt="lego"
          width=""
          height=""
          className="nav-lego-img"
        />
      </div>
      <ul className="menu">
        <li className="menu-item">
          <a href="#" className="menu-link">
            {name1}
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            {name2}
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            {name3}
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            {name4}
          </a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            {name5}
          </a>
        </li>
      </ul>
    </nav>
  );
}
