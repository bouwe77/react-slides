import createPersistedState from "use-persisted-state";

export default function useSlides(slides, localStorageKey) {
  const useCurrentSlideIndexState = createPersistedState(localStorageKey);
  const [currentSlideIndex, setCurrentSlideIndex] = useCurrentSlideIndexState(0);

  function goToPrev() {
    console.log(slides.length, currentSlideIndex);
    if (slides.length > 0 && currentSlideIndex > 0) {
      console.log("prev");
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  }

  function goToNext() {
    console.log(currentSlideIndex, slides.length);

    if (currentSlideIndex < slides.length - 1) {
      console.log("next");
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  }

  return [slides[currentSlideIndex], goToPrev, goToNext];
}
