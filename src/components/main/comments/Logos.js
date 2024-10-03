import React from "react";
import "./Logos.css";

export default function Logos({ logo1, logo2, logo3, logo4, logo5 }) {
  return (
    <ul className="logos">
      <li className="logo-item">
        <img src={logo1} alt="logo" className="logo-img" />
      </li>
      <li className="logo-item">
        <img src={logo2} alt="logo" className="logo-img" />
      </li>
      <li className="logo-item">
        <img src={logo3} alt="logo" className="logo-img" />
      </li>
      <li className="logo-item">
        <img src={logo4} alt="logo" className="logo-img" />
      </li>
      <li className="logo-item">
        <img src={logo5} alt="logo" className="logo-img" />
      </li>
    </ul>
  );
}
