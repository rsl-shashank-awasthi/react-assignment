import { useState } from "react";
import TodoInput from "./components/ToDoInput";
import TodoList from "./components/ToDoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn ReactJS basics", completed: true },
    { id: 2, text: "Practice ReactJS", completed: false },
    { id: 3, text: "Learn Redux", completed: false },
    { id: 4, text: "Code portfolio in React", completed: false },
    { id: 5, text: "Learn React Native", completed: false },
  ]);

  const [filter, setFilter] = useState("all");
  const [deleteId, setDeleteId] = useState(null);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id && !item.completed ? { ...item, completed: true } : item,
      ),
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((item) => (item.id === id ? { ...item, text: newText } : item)),
    );
  };

  const confirmDelete = () => {
    setTodos(todos.filter((item) => item.id !== deleteId));
    setDeleteId(null);
  };

  const cancelDelete = () => {
    setDeleteId(null);
  };

  const filteredTodos = todos.filter((item) => {
    if (filter === "done") return item.completed;
    if (filter === "todo") return !item.completed;
    return true;
  });

  const sortedTodos = [...filteredTodos].sort(
    (a, b) => Number(b.completed) - Number(a.completed),
  );

  return (
    <div className="app-wrapper">
      <TodoInput onAddTodo={addTodo} />

      <TodoList
        totalCount={todos.length}
        todos={sortedTodos}
        filter={filter}
        setFilter={setFilter}
        onToggleComplete={toggleComplete}
        onEditTodo={editTodo}
        onDeleteRequest={(id) => setDeleteId(id)}
      />

      {deleteId !== null && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <p>Are you sure you want to delete this todo?</p>
            <div className="modal-actions">
              <button
                type="button"
                className="cancel-btn"
                onClick={cancelDelete}
              >
                Cancel
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={confirmDelete}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
