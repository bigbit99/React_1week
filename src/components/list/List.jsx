import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ todos, setTodos }) {
  const onDeleteHanlder = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(newTodos);
  };

  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });

    setTodos(newTodos);
  };

  return (
    <div className="list-container">
      <h2 className="list-title">할거</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo todo={todo} key={todo.id} setTodos={setTodos} onDeleteHanlder={onDeleteHanlder} onEditHandler={onEditHandler}/>
            );
          } else {
            return null;
          }
        })}
      </div>
      <hr />
      <h2 className="list-title">다한거</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if(todo.isDone) {
            return(
              <Todo todo={todo} key={todo.id} setTodos={setTodos} onDeleteHanlder={onDeleteHanlder} onEditHandler={onEditHandler} />
            )
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
