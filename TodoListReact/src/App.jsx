import { useState } from "react";
import Header from "./components/header/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn guitar", completed: false },
    { id: 2, title: "Learn React", completed: true },
    { id: 3, title: "Learn js", completed: false },
  ]);
  const addTodo = (newTodo) => {
    setTodos((prevState) => [...prevState, newTodo]);
  };
  const removeTodo = (id) => {
    // setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    const newTodos = [];
    for (let todo of todos) {
      if (todo.id !== id) {
        newTodos.unshift(todo);
      }
    }
    setTodos(newTodos);
  };
  const toggleCompleted = (id) => {
    // const newTodos = [];
    // for (let todo of todos) {
    //   if (todo.id === id) {
    //     newTodos.push({ ...todo, completed: !todo.completed });
    //   } else {
    //     newTodos.push(todo);
    //   }
    //   setTodos(newTodos);
    // }
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };
  return (
    <div className="container">
      <Header />
      <h1 className="main-title">Todo List </h1>
      <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      ></Todos>
    </div>
  );
}

export default App;
