import React from "react";

import "../styles.css"; // Just use a plain CSS file.

const App = () => {
  return <Box>Hello World</Box>;
};

function Box(props) {
  //console.log(props.children);
  return <div className="box">{props.children}</div>;
}

export default App;

// What we'll learn in this example:
// * How to use the built-in children prop.
// * How to apply plain CSS styles.

// Photo: <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/vestrahorn-iceland-francesco-riccardo-iacomino.jpg" width="300" height="200" alt=""/>
