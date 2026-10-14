import TodoItem from "./ToDoItem";

function TodoList({
  totalCount,
  todos,
  filter,
  setFilter,
  onToggleComplete,
  onEditTodo,
  onDeleteRequest,
}) {
  return (
    <div className="todo-list-section">
      <h2>TodoList</h2>

      {totalCount > 0 && (
        <div className="filter-row">
          <button
            type="button"
            className={`filter-btn ${filter === "all" ? "active-filter" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === "done" ? "active-filter" : ""}`}
            onClick={() => setFilter("done")}
          >
            Done
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === "todo" ? "active-filter" : ""}`}
            onClick={() => setFilter("todo")}
          >
            Todo
          </button>
        </div>
      )}

      <div className="items-container">
        {todos.length === 0 ? (
          <p className="empty-msg">No todo is available</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleComplete={onToggleComplete}
              onEditTodo={onEditTodo}
              onDeleteRequest={onDeleteRequest}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;
