import React from "react";
import { AuthProvider } from "./Hooks/AuthContext";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Bio from "./components/Bio/Bio";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import NavBar from "./components/NavBar/NavBar";
import UploadEducation from "./components/Education/UploadEducation";
import Login from "./components/Login/Login";
import PrivateRoute from "./Hooks/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const user = localStorage.getItem("user");

  return (
    <AuthProvider user={user}>
      <Router>
        <div className='main'>
          <NavBar />
          <div className='wrapper'>
            <Switch>
              <Route exact path='/' component={Bio} />
              <Route exact path='/skills' component={Skills} />
              <Route exact path='/experience' component={Experience} />
              <Route exact path='/education' component={Education} />
              <Route exact path='/login' component={Login} />
              {/* Routes below to become protected routes */}
              <PrivateRoute
                exact
                path='/uploadEducation'
                component={UploadEducation}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
