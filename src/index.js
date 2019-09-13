import React from "react";
import ReactDOM from "react-dom";

import Footer from "./Footer";
import Slides from "./react-slides";
import slides from "./my-slides";
import "./styles.css";

//const config = { appId: "appy", showButtonNavigation: true };

const App = () => (
  <div className="app">
    <Slides>{slides}</Slides>
    <Footer />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
