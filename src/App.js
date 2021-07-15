import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Bio from "./components/Bio/Bio";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education"
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {

    return (
      <Router>
        <div className="main">
        <NavBar />
        <div className="wrapper">
        <Route exact path='/' component={Bio} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/experience' component={Experience} />
        <Route exact path='/education' component={Education} />
        </div>
        </div>
      </Router>
    );
  
}

export default App;
