import React from "react";
import "./Todo.css";
import { ImCross } from "react-icons/im";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Todo = ({ id, completed, title, toggleCompleted, removeTodo }) => {
  return (
    <div className="todo">
      <ToastContainer />
      <div className="todo-title">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleCompleted(id)}
        />
        <p className={`${completed ? "completed" : ""}`}>{title}</p>
      </div>
      <div
        className="cross-btn"
        onClick={() => {
          removeTodo(id);
        }}
      >
        <ImCross />
      </div>
    </div>
  );
};

export default Todo;
