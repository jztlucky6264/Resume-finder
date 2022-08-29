import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Errorpage from "./components/Errorpage";
import Resume from "./components/resumes/Resume";

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>

        <Route>
          <Errorpage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
