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
import Admin from "./components/Admin/Admin";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import AddProduct from "./components/AddProduct/AddProduct";
import Checkout from "./components/Checkout/Checkout";



export const UserContaxt = createContext();

function App() {

  const [userDetails, setUserDetails] = useState({})
  const [ order, setOrder] = useState()
  return (
      <UserContaxt.Provider value={[userDetails, setUserDetails,  order, setOrder]}>
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
            <Route path="/admin">
              <Admin />

            </Route>
            <Route path="/manageProduct">
               <ManageProduct />             
            </Route>
            <Route path="/addProduct">
              <AddProduct />             
            </Route>
            <Route path="/checkout">
               <Checkout />             
            </Route>
            <Route path="/orders">
               <Checkout />             
            </Route>
          </Switch>

        </Router>
      </UserContaxt.Provider>
  );
}

export default App;
