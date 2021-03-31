import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";



export const UserContaxt = createContext();

function App() {

  const [userDetails, setUserDetails] = useState({})
  // console.log(userDetails);
  return (
    <div className="App">
      <h3>Email: {userDetails.email}</h3>
      <UserContaxt.Provider value={[userDetails, setUserDetails]}>
        <Router>
          <Header />
          <Switch>
            <Route path="/about">

            </Route>
            <Route path="/users">

            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>

        </Router>
      </UserContaxt.Provider>
    </div>
  );
}

export default App;
