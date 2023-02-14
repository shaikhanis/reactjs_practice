import React from "react";
import { Todo } from "../Components/Todo";
export const Todos = (props) => {
  let myStyle = {
    minheight:"100vh"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="">Todos List</h3>
      {props.todos.length===0? "No Todos To Diasplay" : 
      props.todos.map((todo) => {
        return(
          <>
        <Todo todo={todo} kye={todo.sno} onDelete={props.onDelete} /><hr/>
        </> 
      )
      })
    }
    </div>
  );
};
