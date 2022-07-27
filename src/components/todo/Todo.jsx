import React from "react";
import "./style.css";

function Todo({ todo, onDelete, onEdit }) {
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div className="todo-btn-group">
        <button className="del-btn" onClick={() => onDelete(todo.id)}>삭제</button>
        <button className="edit-btn" onClick={() => onEdit(todo.id)}>{todo.isDone ? "취소" : "완료"}</button>
      </div>
    </div>
  );
}

export default Todo;
