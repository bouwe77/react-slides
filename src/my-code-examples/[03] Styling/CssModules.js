import React from "react";
import styles from "./styles.css"; // Tell Webpack to use these styles

function App() {
  return (
    <>
      <Box1 />
      <Box2 />
    </>
  );
}

function Box1() {
  return <div className="box">This is Box 1</div>;
}

function Box2() {
  return <div className={styles.box}>This is Box 2</div>;
}

export default App;
