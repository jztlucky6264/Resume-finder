import React, { createContext, useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Errorpage from "./components/Errorpage";
import Logout from "./components/Logout";

import { initialState, reducer } from "./Reducer/UseReducer";
import Resume from "./components/resumes/Resume";
//1:contextAPI
export const UserContext = createContext();
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route component={Errorpage} />
        </Switch>
      </UserContext.Provider>
    </>
  );
};

export default App;
