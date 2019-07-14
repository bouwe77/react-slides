import React, { useState } from "react";
import getRandomPhoto from "./randomPhotos";

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
