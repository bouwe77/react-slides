import React, { useState } from "react";
import useInterval from "@use-it/interval";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);

  useInterval(() => setCounter(counter + 1), delay);

  function slowDown() {
    setDelay(delay + 1000);
  }

  function speedUp() {
    if (delay !== 0) setDelay(delay - 1000);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{counter}</h1>
      <div>
        <button onClick={slowDown}>-</button> {delay} <button onClick={speedUp}>+</button>
      </div>
      <div>
        <br />
        OK, let op. Dit voorbeeld is leuk, maar ondertussen ook een voorzet op een leuke
        opdracht: De timeline pollen op basis van useInterval. Dit heb ik uitgewerkt in de
        NITWIT demo. Daar heb ik er een custom hook van gemaakt, maar gewoon in de component
        kan ook natuurlijk.
      </div>
    </div>
  );
}
