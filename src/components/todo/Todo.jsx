import React from "react";
import "./style.css";

function Todo({ todo, onDeleteHanlder, onEditHandler }) {
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
    </div>
  );
}

export default Todo;
