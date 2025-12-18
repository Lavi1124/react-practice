import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount((prev) => prev + 1);
  }

  function decrease() {
    setCount((prev) => prev - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="container">
      <h1>Counter App</h1>
      <p>Current Count: {count}</p>
      <div className="buttons">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
          }}
        >
          Increase Twice
        </button>
      </div>
    </div>
  );
}

export default App;
