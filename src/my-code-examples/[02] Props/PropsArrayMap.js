import React from "react";

// The purpose of this example is:
// * Pass an array of objects as props.
// * Using array.map to create an array of React elements to render.

function App() {
  return <Greetings />;
}

function Greetings() {
  return <Greeting />;
}

function Greeting() {
  return <>Hello World</>;
}

export default App;
