import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./TodoForm.css";
import { toast } from "react-toastify";
const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      toast.error("Please Fill Input", {
        autoClose: 1500,
      });
    }
    const newTodo = {
      title: title,
      completed: false,
      id: uuid(),
    };
    addTodo(newTodo);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit} className="todoform">
      <input
        className="todoform-input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="todoform-btn">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
