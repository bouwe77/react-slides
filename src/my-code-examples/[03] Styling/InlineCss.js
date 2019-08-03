import React from "react";

const boxStyle = {
  borderRadius: "25px",
  width: "400px",
  padding: "20px",
  margin: "10px",
  background: "Red",
  color: "white"
};

function App() {
  return <Box>Inline CSS</Box>;
}

function Box({ children }) {
  return <div style={boxStyle}>{children}</div>;
}

export default App;

// What we'll learn in this example:
// * Define styling as a javascript object.
// * Define CSS properties camel cased because it is javascript, not CSS.
// * Apply styling to an element.
