import React, { useState } from "react";
import getRandomPhoto from "./randomPhotos";

function App() {
  const [photos, setPhotos] = useState([]);

  function addPhoto() {
    const newPhoto = getRandomPhoto();
    setPhotos([...photos, newPhoto]);
  }

  return (
    <>
      <button onClick={addPhoto}>Add Photo</button>
      <div>
        {photos.map(photo => (
          <Photo photo={photo} />
        ))}
      </div>
    </>
  );
}

function Photo({ photo }) {
  return <img src={photo.url} alt={photo.url} />;
}

export default App;
//
//
//
//
//
//
//
//
//
//
/* ======= Update and Delete =======
  function updatePhoto() {
    // Update an existing photo with a new one.
    const newPhoto = getRandomPhoto();

    const updatedPhotos = photos.map(photo => {
      if (photo.id === selectedId) {
        return {
          ...photo,
          url: newPhoto.url
        };
      }
      return photo;
    });
    setPhotos(updatedPhotos);
  }

  function removePhoto() {
    // Remove a photo from the state.
    const updatedPhotos = photos.filter(photo => photo.id !== selectedId);
    setPhotos(updatedPhotos);
  }
*/
