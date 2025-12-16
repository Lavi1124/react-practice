import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>Count Check</h1>
      <p>Count: {count}</p>

      <div className="buttons">
        <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
        <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
export default App;
