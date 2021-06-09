import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bio from "./components/Bio/Bio";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path='/' component={Bio} />
      <Route exact path='/sidebar' component={SideBar} />
    </Router>
  );
}

export default App;
