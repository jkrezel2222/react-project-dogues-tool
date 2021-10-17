import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
// import reportWebVitals from "./reportWebVitals";

render (
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// reportWebVitals(console.log);
