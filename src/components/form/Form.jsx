import React, { useState } from "react";
import "./style.css";

function Form({ setTodos, todos }) {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  const [todo, setTodo] = useState(initialState);
  const onChange = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value, id: todos.length + 1 });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    //setTodo(initialState);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="input-group">
        <label className="form-label">제목</label>
        <input className="add-input" type="text" name="title" value={todo.title}
          onChange={onChange}
        />
        <label className="form-label">내용</label>
        <input className="add-input" type="text" name="body" value={todo.body}
          onChange={onChange}
        />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
}

export default Form;
