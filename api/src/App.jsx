import { useState, useEffect } from "react";
import "./App.css";

const Fetch = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        return res.json();
      })
      .then((photos) => {
        console.log(photos);
        setPhotos(photos);
      });
  }, []);
  return photos.splice(0, 20).map((photo) => (
    <div className="details">
      <img src={photo.url} alt={photo.title} width={100}  />
      <p>{photo.title}</p>
    </div>
  ));
};

export default Fetch;
