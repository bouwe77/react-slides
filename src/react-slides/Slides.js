import React from "react";
import PropTypes from "prop-types";
import createPersistedState from "use-persisted-state";

import Wrapper from "./Wrapper";

function Slides({ appId = "myApp", children: slides }) {
  const CURRENTSLIDEINDEX = appId + "-currentSlideIndex";
  const useCurrentSlideIndexState = createPersistedState(CURRENTSLIDEINDEX);
  const [currentSlideIndex, setCurrentSlideIndex] = useCurrentSlideIndexState(0);

  function goToPrev() {
    if (slides.length > 0 && currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  }

  function goToNext() {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  }

  function Navigation() {
    return (
      <div>
        <button onClick={goToPrev}>prev</button>
        <button onClick={goToNext}>next</button>
      </div>
    );
  }

  const Slide = slides[currentSlideIndex];

  return (
    <Wrapper>
      <Navigation />
      <Slide />
    </Wrapper>
  );
}

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
