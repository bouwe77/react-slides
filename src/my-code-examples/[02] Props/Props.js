import React from "react";

function App() {
  return <Hello />;
}

function Hello() {
  return <>Hello World!</>;
}

export default App;

// What we'll learn in this example:
// * Pass values as props to child components.
// * Use the props object in the component that received it.
// * Using ES6 features:
//   - Destructuring props when receiving them.
//   - Spreading a props object when passing multiple (i.e. many) props.
