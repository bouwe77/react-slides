import React from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

const KeyboardNavigation = props => {
  function handleKey(key) {
    if (key === "left") props.goToPrev();
    else props.goToNext();
  }

  return (
    <KeyboardEventHandler
      handleKeys={["left", "right", "space"]}
      onKeyEvent={(key, e) => handleKey(key)}
    />
  );
};

export default KeyboardNavigation;
