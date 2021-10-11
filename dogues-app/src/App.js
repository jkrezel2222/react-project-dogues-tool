import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import DogGallery from "./components/DogGallery";
import AboutUs from "./components/AboutUs";
import Navigation from "./components/Navigation";


function App() {
  return (
    <Router>
    <div className="App" >
      <Navigation />
      <br></br>
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/DogGallery" component={DogGallery} />
      <Route exact path="/AboutUs" component={AboutUs} />

    </div>
    </Router>
  );
}

export default App;
