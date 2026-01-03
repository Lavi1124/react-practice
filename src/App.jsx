import { useState } from "react";

function App() {
  const [todos, setToddos] = useState([]);
  const [text, setText] = useState("");
  function addTodo() {
    if (text.trim() === "") return;
    setToddos((prev) => [...prev, text]);
    setText("");
  }
  return (
    <div className="container">
      <h1>To-do App</h1>
      <div className="input-row">
        <input
          type="text"
          value={text}
          placeholder="Enter a task"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li className="todo-item">
            <span>{todo}</span>
            <button
              onClick={() => {
                setToddos((prev) => prev.filter((_, i) => i !== index));
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
