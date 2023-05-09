import { useState } from "react";
import { ScoreBar } from "./Components/ScoreBar/ScoreBar";

import "./App.css";
import { SelectOne } from "./Components/SelectOne/SelectOne";

function App() {
  const [score, setScore] = useState(0);
  const [selection, setSelection] = useState('')

  return (
    <div className="App">
      <ScoreBar score={score} />
      <SelectOne setSelection={setSelection} />
    </div>
  );
}

export default App;
