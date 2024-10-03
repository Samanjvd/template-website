import React from "react";
import "./NewsLetters.css";

export default function NewsLetters() {
  return (
    <div className="news-letters">
      <div className="container">
        <div className="news-letters-wrapper">
          <h3 className="newsletters-text">
            Create a new generation website for your business.
          </h3>
          <div className="newsletters-email">
            <input
              type="email"
              className="newsletters-input"
              placeholder="Email address"
            />
            <button className="newsletters-btn">
              <img src="./images/right-arrow.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
