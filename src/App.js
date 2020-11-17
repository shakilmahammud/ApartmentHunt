
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AddHouse } from "./Components/AdminPanel/AddHouse/AddHouse";
import { Admin } from "./Components/AdminPanel/Admin/Admin";
import { MyRent } from "./Components/AdminPanel/MyRent/MyRent";
import Home from "./Components/HomePage/Home/Home";
import HomeDetails from "./Components/HomePage/Pages/HomeDetails/HomeDetails";

import Login from "./Components/Login/Login";
import { PrivateRoute } from "./Components/PrivateRoute/PrivateRoute";

export const apartmentContext=createContext()
function App() {
  const [userLogin,setUserLogin]=useState({})
  return (
    <apartmentContext.Provider value={[userLogin,setUserLogin]}>
      <Router>
      <Switch>
        <Route exact path="/">
         <Home/>
        </Route>
        
        <Route path="/rentDetails">
         <HomeDetails/>
        </Route>
        <PrivateRoute path="/booklist">
          <Admin/>
        </PrivateRoute>
        <Route path="/add">
          <AddHouse/>
        </Route>
        <PrivateRoute path="/rent">
          <MyRent/>
        </PrivateRoute>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
    </apartmentContext.Provider>
  );
}

export default App;
