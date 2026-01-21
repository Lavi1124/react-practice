function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className={todo.completed ? "done" : ""}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </li>
  );
}

export default TodoItem;
