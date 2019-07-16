import React, { useState } from "react";
import getRandomPhoto from "./randomPhotos";

// The purpose of this example is:
// * How to add an array of objects to state.
// * How to update that array of objects.

function App() {
  function addPhoto() {
    const newPhoto = getRandomPhoto();
  }

  return (
    <>
      <button>Add Photo</button>
      <div>
        <Photo />
      </div>
    </>
  );
}

function Photo() {
  return <img />;
}

export default App;
