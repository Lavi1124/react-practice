import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  function addTodo() {
    if (text.trim() === "") return;
    setTodos((prev) => [...prev, text]);
    setText("");
  }
  return (
    <div className="container">
      <h1>To-Do App</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li>
            {todo}
            <button
              onClick={() => {
                setTodos((prev) => prev.filter((_, i) => i !== index));
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
