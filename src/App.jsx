import { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);

  function addTodo() {
    if (text.trim() === "") return;
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: text,
        completed: false,
      },
    ]);
    setText("");
  }
  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function updateTodo(id, newText) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
    setEditingId(null);
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
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
