import React, { useEffect, useState } from "react";

import "./combat.css";

import paper from "../../assets/images/icon-paper.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import rock from "../../assets/images/icon-rock.svg";
import { Result } from "../Result/Result";

export const Combat = ({ selection, computer, setSelection, setScore, setComputer }) => {
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

  const [result, setResult] = useState(true);
  const [resultData, setResultData] = useState("");

  useEffect(() => {
    if (selection === "paper") {
      if (computer === "rock") {
        setResultData("win");
        setScore((prev) => {
          return prev + 1;
        });
      } else if (computer === "scissors") {
        setResultData("lose");
        setScore((prev) => {
          return prev - 1;
        });
      }
    } else if (selection === "rock") {
      if (computer === "paper") {
        setResultData("lose");
        setScore((prev) => {
          return prev - 1;
        });
      } else if (computer === "scissors") {
        setResultData("win");
        setScore((prev) => {
          return prev + 1;
        });
      }
    } else if (selection === "scissors") {
      if (computer === "rock") {
        setResultData("lose");
        setScore((prev) => {
          return prev - 1;
        });
      } else if (computer === "paper") {
        setResult("win");
        setScore((prev) => {
          return prev + 1;
        });
      }
    }
  }, [computer]);

  return (
    <div
      className="combat-box"
      style={result ? { width: "60%" } : { width: "40%" }}
    >
      <div className="cobat-item">
        <p>You picked</p>
        {selection === "paper" && <Paper />}
        {selection === "rock" && <Rock />}
        {selection === "scissors" && <Scissors />}
      </div>

      {result && <Result resultData={resultData} setSelection={setSelection} setComputer={setComputer} />}

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
