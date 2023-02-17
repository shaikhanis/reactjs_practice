import React, { useState } from 'react';


const TextForm = (props) => {
  
const [text, setText] = useState("Enter Text Here");

  return (
    <div>
    <h3>{props.text}</h3>
    <div className='mb-3'>
      <textarea className='form-control' name="text" id="myBox" rows="8"></textarea>
    </div>
  </div>
  )
}

export default TextForm
