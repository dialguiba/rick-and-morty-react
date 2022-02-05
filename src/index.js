import React from "react";
import ReactDOM from "react-dom";
import { RickAndMortyApp } from "./RickAndMortyApp";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <RickAndMortyApp />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
