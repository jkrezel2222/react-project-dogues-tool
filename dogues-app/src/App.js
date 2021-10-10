import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import DogGallery from "./DogGallery";
import AboutUs from "./AboutUs";
import Navigation from "./Navigation";


function App() {
  return (
    <Router>
    <div className="App">
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
