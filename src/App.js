import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bio from "./components/Bio/Bio";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="main">
      <NavBar />
      <div className="wrapper">
      <Route exact path='/bonjo7' component={Bio} />
      </div>
      </div>
    </Router>
  );
}

export default App;
