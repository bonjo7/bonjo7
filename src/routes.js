import React from "react";
import { BrowserRouter as Router, withRouter, Route } from "react-router-dom";
import Bio from "./components/Bio/Bio";
import Skills from "./components/Skills/Skills"
import NavBar from "./components/NavBar/NavBar";

const Routes = () => {

  return (
    <Router>
      <div className="main">
      <NavBar />
      <div className="wrapper">
      <Route exact path='/bonjo7' component={Bio} />
      <Route exact path='/skills' component={Skills} />
      </div>
      </div>
    </Router>
  );
};

export default withRouter(Routes);
