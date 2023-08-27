import React from "react";
import "./Todos.css";
import Todo from "./Todo";
const Todos = ({ todos, toggleCompleted, removeTodo }) => {
  return (
    <div className="">
      {todos.map((todo) => (
        <Todo
          {...todo}
          key={todo.id}
          toggleCompleted={toggleCompleted}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default Todos;
