import React from "react";

import "./result.css";
export const Result = ({ resultData = "win", setSelection, setComputer }) => {
  const handleReset = () => {
    setSelection("");
    setComputer("");
  };

  return (
    <>
      {resultData === "win" ? (
        <div className="result-box">
          <h4>You win</h4>
          <button onClick={handleReset}>Play again</button>
        </div>
      ) : (
        <div className="result-box">
          <h4>You lose</h4>
          <button style={{ color: "hsl(349, 71%, 52%)" }} onClick={handleReset}>
            Play again
          </button>
        </div>
      )}
    </>
  );
};
