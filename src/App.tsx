import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      {/* Create a button counter that increases by 1 */}
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase Counter
      </button>{" "}
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrease Counter
      </button>
    </div>
  );
}
