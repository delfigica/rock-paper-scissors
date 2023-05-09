import React from "react";

import "./select-one.css";

import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import rock from "../../assets/images/icon-rock.svg";

export const SelectOne = ({ setSelection }) => {

  const handleSelection = (selection) => {
    setSelection(selection);
  };
  
  return (
    <div className="select-box">
      <div
        className="paper-box option-box"
        onClick={() => {
          handleSelection("paper");
        }}
      >
        <img src={paper} />
      </div>
      <div
        className="scissors-box option-box"
        onClick={() => {
          handleSelection("scissors");
        }}
      >
        <img src={scissors} />
      </div>
      <div
        className="rock-box option-box"
        onClick={() => {
          handleSelection("rock");
        }}
      >
        <img src={rock} />
      </div>
    </div>
  );
};
