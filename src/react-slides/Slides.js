import React from "react";
import PropTypes from "prop-types";

import FullScreen from "./FullScreen";
import useSlides from "./useSlides";
import Navigation from "./Navigation";

//TODO useKeys hook: https://github.com/haldarmahesh/use-key-hook

function Slides({ appId, children: slides }) {
  const localStorageKey = appId + "-currentSlideIndex";
  const [CurrentSlide, goToPrev, goToNext] = useSlides(slides, localStorageKey);

  return (
    <>
      <Navigation goToPrev={goToPrev} goToNext={goToNext} />
      <FullScreen>
        <CurrentSlide />
      </FullScreen>
    </>
  );
}

Slides.defaultProps = {
  appId: "myApp"
};

Slides.propTypes = {
  appId: function(props, propName, componentName) {
    if (!/^[a-zA-z]{1,12}$/.test(props[propName])) {
      return new Error(
        "If you provide the optional appId prop, please use letters only, max 12 characters."
      );
    }
  },
  children: PropTypes.array.isRequired
};

export default Slides;
