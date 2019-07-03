# react-slides

## Introduction

react-slides enables you to create a presentation deck of your own React components. Each of your components get their own slide.

## Example

What you do is create an array of all your components and pass that array as child of the react-slides' Slides component:

```js
import React from "react";
import ReactDOM from "react-dom";
import Slides from "react-slides";

import { Slide1, Slide2 } from "./my-components";
const slides = [Slide1, Slide2];

const rootElement = document.getElementById("root");
ReactDOM.render(<Slides>{slides}</Slides>, rootElement);
```
