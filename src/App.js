import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import AddChild from "./Components/AddChild";
import "./css/Style.css";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/addchild" component={AddChild} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
