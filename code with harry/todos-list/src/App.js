import './App.css';
import Header from './Components/Header';
import {Footer} from './Components/Footer';
import {Todos} from './Components/Todos';

function App() {

const onDelete =(todo) =>{
  console.log("detet" , todo)
}

  let todos = [
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
      ]
  return (
    <>
    <Header title='My Todos List'/>
    <Footer/>
    <Todos todos={todos} onDelete ={onDelete}/>
    </>
  );
}

export default App;
