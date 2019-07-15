import React from "react";

import "./styles.css";

const App = () => {
  return (
    <>
      <Panel>Hello World</Panel>
    </>
  );
};

function Panel(props) {
  return <div className="panel">{props.children}</div>;
}

export default App;

// Photo:
// <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/vestrahorn-iceland-francesco-riccardo-iacomino.jpg" width="300" height="200" alt=""/>
