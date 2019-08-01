import React from "react";

import "./styles.css";

const App = () => {
  return (
    <>
      <Box />
    </>
  );
};

function Box(props) {
  //console.log(props.children);
  return <div className="box">{props.children}</div>;
}

export default App;

// Photo:
// <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/vestrahorn-iceland-francesco-riccardo-iacomino.jpg" width="300" height="200" alt=""/>
