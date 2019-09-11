import React from "react";

// NOTE: Importing the global CSS is only necessary at the top level component.
// import "./styles.css"; // Just use a plain CSS file.

import styles from "./OtherBox.module.css"; // Tell Webpack to use these styles as a module

function OtherBox({ children }) {
  return <div className={styles.box}>{children}</div>;
}

export default OtherBox;
