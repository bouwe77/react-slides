import React from "react";

// The purpose of this example is:
// * Pass values as props to child components.
// * Use the props object in the component that received it.

function App() {
  return <Hello />;
}

function Hello() {
  return <>Hello World!</>;
}

export default App;
