import React from "react";

//import OtherBox from "./OtherBox";

import "../styles.css"; // Just use a plain CSS file.
import styles from "./CssModules.module.css"; // Tell Webpack to use these styles as a module

function App() {
  return (
    <>
      <Box>
        CSS Modules
        <p className={styles.mytext}>Hello World</p>
      </Box>
    </>
  );
}

function Box({ children }) {
  return <div className={styles.box}>{children}</div>;
}

export default App;

// What we'll learn in this example:
// * How to import a CSS file as a module using Webpack. Note the file naming convention with "module" in it!
// * You can use both global and module styles and you can override global styles in module styles.
// * That Webpack makes sure styles are local (unique).

/*
      <OtherBox>
        Another Box
        <p className={styles.mytext}>Hello World</p>
      </OtherBox>
*/
