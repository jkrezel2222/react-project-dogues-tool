import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Navigation from "./components/Navigation";


function App() {
  return (
    <Router>
    <div className="App" >
      <Navigation />
      <br></br>
      <br></br>
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/ContactUs" component={ContactUs} />
      <Route exact path="/AboutUs" component={AboutUs} />
    </div>
    </Router>
  );
}

export default App;
