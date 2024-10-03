import React from "react";
import "./PortfolioItems.css";

export default function PortfolioItems({ img1, img2, img3, img4, img5, img6 }) {
  return (
    <div className="portfolio-items">
      <div className="portfolio-item">
        <img src={img1} alt="portfolio" />
      </div>
      <div className="portfolio-item">
        <img src={img2} alt="portfolio" />
      </div>
      <div className="portfolio-item">
        <img src={img3} alt="portfolio" />
      </div>
      <div className="portfolio-item">
        <img src={img4} alt="portfolio" />
      </div>
      <div className="portfolio-item">
        <img src={img5} alt="portfolio" />
      </div>
      <div className="portfolio-item">
        <img src={img6} alt="portfolio" />
      </div>
    </div>
  );
}
