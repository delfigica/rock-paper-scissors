import { useState } from "react";
import { ScoreBar } from "./Components/ScoreBar/ScoreBar";

import "./App.css";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <ScoreBar score={score} />
    </div>
  );
}

export default App;
