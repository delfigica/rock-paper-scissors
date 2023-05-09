import React from "react";

import "./combat.css";

import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import rock from "../../assets/images/icon-rock.svg";

export const Combat = ({ selection = "paper", computer = "rock" }) => {
  const Paper = () => {
    return (
      <div className="combat-selection-box paper-box">
        <img src={paper} />
      </div>
    );
  };

  const Scissors = () => {
    return (
      <div className="combat-selection-box scissors-box">
        <img src={scissors} />
      </div>
    );
  };

  const Rock = () => {
    return (
      <div className="combat-selection-box rock-box">
        <img src={rock} />
      </div>
    );
  };

  return (
    <div className="combat-box">
      <div className="cobat-item">
        <p>You picked</p>
        {selection === "paper" && <Paper />}
        {selection === "rock" && <Rock />}
        {selection === "scissors" && <Scissors />}
      </div>
      <div className="cobat-item">
        <p>The house picked</p>
        {computer === "paper" && <Paper />}
        {computer === "rock" && <Rock />}
        {computer === "scissors" && <Scissors />}
        {computer === "" && <div className="combat-computer-loading"></div>}
      </div>
    </div>
  );
};
