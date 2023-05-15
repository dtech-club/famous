import React, { useState } from "react";
import axios from "axios";

function ImageAlbumUpload() {
  const [image, setImage] = useState("");
  const [editedImage, setEditedImage] = useState(null);

  function handleImage(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }

  function handleApi() {
    const formData = new FormData();
    formData.append("image", editedImage || image);
    axios.post("url", formData).then((res) => console.log(res));
  }

  function handleEdit() {
    setEditedImage(editedImage);
  }

  return (
    <div>
      <input type="file" name="file" onChange={handleImage} />
      <button onClick={handleEdit}>Edit photo</button>
      <button onClick={handleApi}>Upload photo</button>
    </div>
  );
}

export default ImageAlbumUpload;
