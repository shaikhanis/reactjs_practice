import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import About from './Components/About';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (masage, type) => {
    setAlert({
      smg: masage,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert(": Dark Mode is Enable!", 'success');
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(": light Mode is Enable!", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text Utils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

            <div className="container my-3">
            <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          < TextForm text="Enter Your Text Below" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
