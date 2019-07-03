import React from "react";
import createPersistedState from "use-persisted-state";

import slides from "../content/slides";

function Slides() {
  const useCurrentSlideIndexState = createPersistedState("currentSlideIndex");
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
    <>
      <Navigation />
      <Slide />
    </>
  );
}

export default Slides;
