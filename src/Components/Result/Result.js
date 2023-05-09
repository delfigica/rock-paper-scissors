import React from "react";

import "./result.css";
export const Result = ({ resultData, setSelection, setComputer, setResult }) => {

  const handleReset = () => {
    setSelection("");
    setComputer("");
    setResult(false)
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
