import React, { useState } from "react";

const AddTodo = (props) => {
    const [title, settitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can not be empty")
            
        }else{
          props.addTodo(title,desc);
          settitle('');
          setDesc('');
        }
     }
    return (
        <form className="container my-3" onSubmit={submit}>
            <h3>Add a Todo</h3>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Todo title
                </label>
                <input
                    type="text" value={title} onChange={(e)=>{settitle(e.target.value)}}
                    className="form-control"
                    id="title"
                    aria-describedby="emailHelp"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="desc" className="form-label">
                    Todo Description
                </label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
            </div>
            <button type="submit" className="btn btn-sm btn-primary">
                Add Todo
            </button>
        </form>
    );
};

export default AddTodo;
