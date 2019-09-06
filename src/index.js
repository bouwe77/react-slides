import React from "react";
import ReactDOM from "react-dom";

import Slides from "./react-slides";
import slides from "./my-slides";
import "./styles.css";

//const config = { appId: "appy", showButtonNavigation: true };

const rootElement = document.getElementById("root");
ReactDOM.render(<Slides>{slides}</Slides>, rootElement);
