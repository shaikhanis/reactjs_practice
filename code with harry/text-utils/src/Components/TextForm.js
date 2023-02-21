import React, { useState } from 'react';


const TextForm = (props) => {
  const handleOnChange =(e) =>{
    setText(e.target.value)
    
  }

  const handelUpCase = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(':Converted to uppercase' , 'success');
  }

const handeleLow= () =>{
  let newText = text.toLocaleLowerCase();
  setText(newText);
  props.showAlert(':Converted to lowercase' , 'success');
}

const crearText = () => {
  let newText = ' ';
  setText(newText);
  props.showAlert(': Text has been Clear' , 'success')
}

const copyHandel = ()=>{
navigator.clipboard.writeText(text);
props.showAlert(': Text Has Been Copied' , 'success')

}



const removeExtraSpace = () => {
  let remove = text.split(/[ ]+/);
  setText(remove.join(' '))
  props.showAlert(': Remove Extra Spaces' , 'success')
}
  
const [text, setText] = useState("");

  return (
    <>
    <div className='container my-3 mx-2' style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.text}</h1>
    <div className='mb-3'>
      <textarea className='form-control' name="text" id="myBox" rows="8" value={text} onChange = {handleOnChange}  style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}}></textarea>
      <button className="btn btn-info btn-sm my-3 mx-2 text-center" onClick={handelUpCase}>Conver To Upper case</button>
      <button className="btn btn-info btn-sm  mx-2" onClick={handeleLow}>Conver To Lower case</button>
      <button className="btn btn-info btn-sm  mx-2" onClick={crearText}>Creare Text</button>
      <button className="btn btn-info btn-sm  mx-2" onClick={copyHandel}>Copy Text</button>
      <button className="btn btn-info btn-sm  mx-2" onClick={removeExtraSpace}>Remove Extra Spaces</button>

    </div>
  </div>
  <div className="container my-3 mx-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>Your Text Summary</h1>
    <p> Number of World is [{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}] and Number of Charecter is [{text.length}]</p>
    <p>{0.087 * text.split(" ").length} Minit Read</p>
    <h2>Preveiw</h2>
    <p>{text.length>0?text:"Enter Your Text in Above to Preview Here"}</p>
  </div>
  </>
  )
}

export default TextForm

