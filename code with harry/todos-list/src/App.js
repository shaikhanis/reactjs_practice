import './App.css';
import Header from './Components/Header';
import {Footer} from './Components/Footer';
import {Todos} from './Components/Todos';
import AddTodo from './Components/AddTodo';
import React, {useState} from 'react';

function App() {

const onDelete =(todo) =>{
  console.log(" todo deteted" , todo)
 setTodos(todos.filter((e)=>{
  return e!==todo;
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

  const[todos,setTodos] =useState( [
    {
    sno: 1,
    title : 'Go To The Market',
    desc: "You Need To go to market to get this job done"
    },
    {
      sno: 2,
      title : 'Go To The mall',
      desc: "You Need To go to market to get this job done"
      },
      {
        sno: 3,
        title : 'Go To The Friends Home',
        desc: "You Need To go to market to get this job done"
        }
      ]);
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
