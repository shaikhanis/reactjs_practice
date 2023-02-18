import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm  from './Components/TextForm';
// import About from './Components/About';


function App() {
  return (
    <>
    <Navbar title="Text Utils"  about="About"/>
    <div className='container my-3'>
    <TextForm text="Enter Your Text Below"/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
