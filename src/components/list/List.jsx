import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ todos, setTodos }) {
  const onDelete = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(newTodos);
  };

  const onEdit = (todoId) => {
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
      <h2 className="list-title">To do</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo todo={todo} key={todo.id} setTodos={setTodos} onDelete={onDelete} onEdit={onEdit}/>
            );
          } else {
            return null;
          }
        })}
      </div>

      <h2 className="list-title">Done</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if(todo.isDone) {
            return(
              <Todo todo={todo} key={todo.id} setTodos={setTodos} onDelete={onDelete} onEdit={onEdit} />
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
