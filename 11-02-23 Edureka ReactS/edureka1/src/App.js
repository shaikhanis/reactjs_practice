import "./App.css";
import Amish from "./component/Amish";
import NavBar from "./component/NavBar";
import PassingObject from "./component/PassingObject";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Input from "./component/Input";
import ImageSlideShow from "./component/ImageSlideShow";
import NothingHere from "./component/NothingHere";
import About from "./component/About";

function App() {
  return (
    <>
      <Router>
    <NavBar/>
    <Routes>

    <Route exact path="/" element = {<Amish/>}/>
    <Route exact path="Passing" element = {<PassingObject/>}/>
    <Route exact path="input" element = {<Input/>}/>
    <Route exact path="slider" element = {<ImageSlideShow/>}/>
    <Route exact path="nothing" element = {<NothingHere/>}/>
    <Route exact path="about" element = {<About/>}/>


    </Routes>
    </Router>
    </>
  );
}

export default App;
