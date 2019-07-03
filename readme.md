# react-slides

## Introduction

react-slides are a bunch of React components that enable you to create a presentation deck of your own React components. Each of you components gets its own slide.

## Example

```js
import React from "react";
import ReactDOM from "react-dom";
import Slides from "react-slides";

// Import your components, put them in an array and pass to the Slides component:

import { Slide1, Slide2 } from "./my-components";
const slides = [Slide1, Slide2];

const rootElement = document.getElementById("root");
ReactDOM.render(<Slides slides={slides} />, rootElement);
```
