import React from "react";

export default function Navigation({ goToPrev, goToNext }) {
  return (
    <div>
      <button onClick={goToPrev}>prev</button>
      <button onClick={goToNext}>next</button>
    </div>
  );
}
