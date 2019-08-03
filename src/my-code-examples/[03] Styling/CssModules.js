import React from "react";
import styles from "./CssModules.module.css"; // Tell Webpack to use these styles as a module

function App() {
  return (
    <>
      <Box>CSS Modules</Box>
    </>
  );
}

function Box({ children }) {
  return <div className={styles.box}>{children}</div>;
}

export default App;

// What we'll learn in this example:
// * How to import a CSS file as a module using Webpack. Note the file naming convention with "module" in it!
// * That Webpack makes sure styles are local (unique).
