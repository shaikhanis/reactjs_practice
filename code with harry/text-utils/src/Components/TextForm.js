import React, { useState } from 'react';


const TextForm = (props) => {
  const handleOnChange =(e) =>{
    setText(e.target.value)
  }

  const handelUpCase = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }

const handeleLow= () =>{
  let newText = text.toLocaleLowerCase();
  setText(newText);
}
  
const [text, setText] = useState("");

  return (
    <>
    <div className='container my-3 mx-2'>
    <h1>{props.text}</h1>
    <div className='mb-3'>
      <textarea className='form-control' name="text" id="myBox" rows="8" value={text} onChange = {handleOnChange}></textarea>
      <button className="btn btn-info my-3 mx-2" onClick={handelUpCase}>Conver To Upper case</button>
      <button className="btn btn-info mx-3" onClick={handeleLow}>Conver To Lower case</button>

    </div>
  </div>
  <div className="container my-3 mx-2">
    <h1>Your Text Summary</h1>
    <p> Number of World is [{text.split(" ").length-1}] and Number of Charecter is [{text.length}]</p>
    <p>{0.087 * text.split(" ").length} Minit Read</p>
    <h2>Preveiw</h2>
    <p>{text}</p>
  </div>
  </>
  )
}

export default TextForm
