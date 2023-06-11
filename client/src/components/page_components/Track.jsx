import { Howl, Howler } from "howler";
import { useState } from "react";
import { BsPlay, BsPause, BsStop, BsPencil } from "react-icons/bs";
import DeleteTrack from "../content_managment_system/DeleteTrack.jsx";
import PatchTrack from "../content_managment_system/PatchTrack.jsx";

import "./track.css";

const Track = ({ track }) => {
  const sourceAudio = track.trackFile;
  const [sound, setSound] = useState(null);
  const [active, setActive] = useState("track");

  const playSound = () => {
    if (sound) {
      sound.stop();
    }

    if (Howler._howls.length > 0) {
      Howler.stop();
    }

    const newSound = new Howl({
      src: [sourceAudio],
      html5: true,
      format: ["mp3"],
      onend: () => {
        setSound(null);
      },
    });

    setSound(newSound);
    newSound.play();
  };

  const pauseSound = () => {
    if (sound) {
      sound.pause();
    }
  };

  const stopSound = () => {
    if (sound) {
      sound.stop();
      setSound(null);
    }
  };

  return (
    <div className="track-div buttons">
      <li className="li" key={track?._id}>
        <button>
          <DeleteTrack track={track} setActive={setActive} />
        </button>
        <button className="buttons" onClick={() => setActive("track")}>
          track
        </button>
        <button className="buttons" onClick={() => setActive("edit-track")}>
          <BsPencil />
        </button>

        {active === "track" && (
          <div className="buttons">
            <span>{track?.trackName}</span>
            <button onClick={playSound}>
              <BsPlay />
            </button>
            <button onClick={pauseSound}>
              <BsPause />
            </button>
            <button onClick={stopSound}>
              <BsStop />
            </button>
          </div>
        )}

        {active === "edit-track" && (
          <PatchTrack track={track} setActive={setActive} />
        )}
      </li>
    </div>
  );
};

export default Track;
