import React from "react";
import { Todo } from "../Components/Todo";
export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center">Todos List</h3>
      {props.todos.map((todo) => {
        return <Todo todo={todo} kye={todo.any} onDelete={props.onDelete} />;
      })}
    </div>
  );
};
