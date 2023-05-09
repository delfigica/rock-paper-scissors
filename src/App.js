import { useEffect, useState } from "react";
import { ScoreBar } from "./Components/ScoreBar/ScoreBar";
import { SelectOne } from "./Components/SelectOne/SelectOne";
import { Combat } from "./Components/Combat/Combat";

import "./App.css";
import { Rules } from "./Components/Rules/Rules";
function App() {
  const [score, setScore] = useState(0);
  const [selection, setSelection] = useState("");
  const [computer, setComputer] = useState("");

  useEffect(() => {
    const chooseRandomly = (a, b) => {
      return Math.random() < 0.5 ? a : b;
    };
    if (selection === "rock") {
      setTimeout(() => {
        setComputer(chooseRandomly("paper", "scissors"));
      }, 2000);
    } else if (selection === "paper") {
      setTimeout(() => {
        setComputer(chooseRandomly("rock", "scissors"));
      }, 2000);
    } else if (selection === "scissors") {
      setTimeout(() => {
        setComputer(chooseRandomly("paper", "rock"));
      }, 2000);
    }
  }, [selection]);

  return (
    <div className="App">
      <ScoreBar score={score} />

      {selection ? (
        <Combat
          selection={selection}
          computer={computer}
          setSelection={setSelection}
          setScore={setScore}
          setComputer={setComputer}
        />
      ) : (
        <SelectOne setSelection={setSelection} />
      )}
      <Rules />
    </div>
  );
}

export default App;
