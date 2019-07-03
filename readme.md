# react-slides

## Introduction

react-slides are a bunch of React components that enable you to create a presentation deck of your own React components. Each of you components gets its own slide.

## Example

What you do is create an array of all your components and pass that array as childr of the react-slides' Slides component:

```js
import React from "react";
import ReactDOM from "react-dom";
import Slides from "react-slides";

import { Slide1, Slide2 } from "./my-components";
const slides = [Slide1, Slide2];

const rootElement = document.getElementById("root");
ReactDOM.render(<Slides>{slides}</Slides>, rootElement);
```
