import React from "react";
import "./HeaderBottom.css";

export default function HeaderBottom() {
  return (
    <section className="header-bottom">
      <div className="header-content-left">
        <div className="section-text">
          <h1 className="header-content-title">
            Create a new generation website for your business.
          </h1>
          <p className="header-content-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="box-links">
          <a href="#" className="header-content-link color">
            Contact us
          </a>
          <a href="#" className="header-content-link">
            See our works
          </a>
        </div>
      </div>
      <div className="header-content-right">
        <img
          src="./images/header-img.svg"
          alt="img-header"
          className="header-content-img"
        />
      </div>
    </section>
  );
}
