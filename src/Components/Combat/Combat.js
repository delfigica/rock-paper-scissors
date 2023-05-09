import React, { useEffect, useState } from "react";

import "./combat.css";

import { Result } from "../Result/Result";
import { Paper } from "../ElementsGame/Paper";
import { Scissors } from "../ElementsGame/Scissors";
import { Rock } from "../ElementsGame/Rock";

export const Combat = ({
  selection,
  computer,
  setSelection,
  setScore,
  setComputer,
}) => {
  const [result, setResult] = useState(false);
  const [resultData, setResultData] = useState("");

  console.log(result);

  useEffect(() => {
    if (selection === "paper") {
      if (computer === "rock") {
        setResultData(() => {
          return "win";
        });
        setScore((prev) => {
          return prev + 1;
        });
      } else if (computer === "scissors") {
        setResultData(() => {
          return "lose";
        });
        setScore((prev) => {
          return prev - 1;
        });
      }
    } else if (selection === "rock") {
      if (computer === "paper") {
        setResultData(() => {
          return "lose";
        });
        setScore((prev) => {
          return prev - 1;
        });
      } else if (computer === "scissors") {
        setResultData(() => {
          return "win";
        });

        setScore((prev) => {
          return prev + 1;
        });
      }
    } else if (selection === "scissors") {
      if (computer === "rock") {
        setResultData(() => {
          return "lose";
        });
        setScore((prev) => {
          return prev - 1;
        });
      } else if (computer === "paper") {
        setResultData(() => {
          return "win";
        });
        setScore((prev) => {
          return prev + 1;
        });
      }
    }

    if (computer) {
      setResult(true);
    }
  }, [computer]);

  return (
    <div className="combat-box">
      <div className="combat-item">
        <p>You picked</p>
        {selection === "paper" && <Paper />}
        {selection === "rock" && <Rock />}
        {selection === "scissors" && <Scissors />}
      </div>
      <div className="combat-result-box">
        {result && (
          <Result
            resultData={resultData}
            setSelection={setSelection}
            setComputer={setComputer}
            setResult={setResult}
          />
        )}
      </div>

      <div className="combat-item">
        <p>The house picked</p>
        {computer === "paper" && <Paper />}
        {computer === "rock" && <Rock />}
        {computer === "scissors" && <Scissors />}
        {computer === "" && <div className="combat-computer-loading"></div>}
      </div>

      <div
        className="combat-result-responsive-box"
        style={result ? {} : { display: "none" }}
      >
        {result && (
          <Result
            resultData={resultData}
            setSelection={setSelection}
            setComputer={setComputer}
            setResult={setResult}
          />
        )}
      </div>
    </div>
  );
};
