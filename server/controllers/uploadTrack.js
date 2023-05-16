import React, { useState } from "react";
import axios from "axios";

function TrackUpload() {
  const [track, setTrack] = useState("");
  // Other track information state variables

  function handleTrack(e) {
    console.log(e.target.files);
    setTrack(e.target.files[0]);
  }

  async function handleUpload() {
    try {
      const formData = new FormData();
      formData.append("track", track);
      // Append other track information to formData

      await axios.post("url", formData);
      console.log("Track uploaded successfully");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleModify() {
    try {
      const formData = new FormData();
      formData.append("track", track);
      // Append other track information to formData

      await axios.put("url", formData);
      console.log("Track modified successfully");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <input type="file" name="track" onChange={handleTrack} />
      {/* Add other input fields for track information */}
      <button onClick={handleUpload}>Upload Track</button>
      <button onClick={handleModify}>Modify Track</button>
    </div>
  );
}

export default TrackUpload;
