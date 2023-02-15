import './App.css';
import Header from './Components/Header';
import {Footer} from './Components/Footer';
import {Todos} from './Components/Todos';
import AddTodo from './Components/AddTodo';
import React, {useState,useEffect} from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem('todos')===null){
initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  
const onDelete =(todo) =>{
  console.log(" todo deteted" , todo)

 setTodos(todos.filter((e)=>{
  return e!==todo;

  localStorage.setItem('todos', JSON.stringify(todos))
 }))
}

     const addTodo= (title, desc) =>{
      console.log("i am adding this ntodo ", title,desc)
      let sno;
      if(todos.length ===0){
        sno = 0;
      }else{
         sno = todos[todos.length-1].sno+1;
      }
      const myTodo = {
        sno: sno,
        title: title,
        desc: desc
      }
      setTodos([...todos, myTodo])
      console.log(myTodo);

     }

  const[todos,setTodos] =useState([initTodo]);
  
  useEffect(()=>
      {
        localStorage.getItem('todos', JSON.stringify(todos))
      },[todos])
  return (
    <>
    <Header title='My Todos List'/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete ={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
