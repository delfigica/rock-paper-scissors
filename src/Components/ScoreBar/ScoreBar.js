import React from "react";

import "./score-bar.css";

import logo from "../../assets/images/logo.svg";
export const ScoreBar = ({ score = 0 }) => {
  return (
    <div className="score-box">
      <div className="score-logo-box">
        <img src={logo} />
      </div>
      <div className="score-total-box">
        <p>SCORE</p>
        <h3>{score}</h3>
      </div>
    </div>
  );
};
