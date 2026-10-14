import { useState } from "react";

function TodoInput({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(text);
    setText("");
  };

  return (
    <div className="todo-input-section">
      <h2>TodoInput</h2>
      <form className="input-card" onSubmit={handleSubmit}>
        <div className="input-group">
          <span className="input-icon">📋</span>
          <input
            type="text"
            placeholder="New Todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button type="submit" className="add-btn">
          Add new task
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
