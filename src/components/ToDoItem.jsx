import { useState } from "react";

function TodoItem({ todo, onToggleComplete, onEditTodo, onDeleteRequest }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleEditClick = () => {
    setEditValue(todo.text);
    setIsEditing(true);
  };

  const handleConfirm = () => {
    onEditTodo(todo.id, editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(todo.text);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <div className="edit-row">
          <input
            type="text"
            className="edit-input"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <div className="action-buttons">
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
            <button
              type="button"
              className="confirm-btn"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      ) : (
        <>
          <span
            className={`todo-text ${todo.completed ? "completed-text" : ""}`}
          >
            {todo.text}
          </span>
          <div className="action-buttons">
            <input
              type="checkbox"
              className="todo-checkbox"
              checked={todo.completed}
              disabled={todo.completed}
              onChange={() => onToggleComplete(todo.id)}
            />
            {!todo.completed && (
              <button
                type="button"
                className="edit-btn"
                onClick={handleEditClick}
              >
                Edit
              </button>
            )}
            <button
              type="button"
              className="delete-btn"
              onClick={() => onDeleteRequest(todo.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
