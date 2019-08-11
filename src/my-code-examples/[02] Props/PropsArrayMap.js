import React from "react";

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

// What we'll learn in this example:
// * Pass an array of objects as props.
// * Using array.map to create an array of React elements to render.
// * Passing the key prop to a list of elements so React can identify each one of them.
