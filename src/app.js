import React from "react";
import { render } from "react-dom";
import "./App.css";
import "./App.scss";
import react_logo from "./react.svg";

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <div className="logo_container">
        <img src={react_logo} />
      </div>
    </>
  );
}
render(<App />, document.getElementById("app"));
