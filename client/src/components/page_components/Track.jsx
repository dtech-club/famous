import { Howl, Howler } from "howler";
import { useState } from "react";
import { BsPlay, BsPause, BsStop, BsTrash, BsPencil } from "react-icons/bs";
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
          <span
            className="icon-button"
            onClick={() => setActive("delete-track")}
          >
            <BsTrash />
          </span>
        </button>
        <button className="buttons" onClick={() => setActive("track")}>
          track
        </button>
        <button className="buttons" onClick={() => setActive("edit-track")}>
          edit track
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

        {active === "delete-track" && (
          <div className="buttons">
            <span>{track?.trackName}</span>

            <span className="icon-button" onClick={() => setActive("track")}>
              <BsTrash />
            </span>
          </div>
        )}

        {active === "edit-track" && (
          <div className="buttons">
            <span>{track?.trackName}</span>

            <span className="icon-button" onClick={() => setActive("track")}>
              <BsPencil />
            </span>
          </div>
        )}
      </li>
    </div>
  );
};

export default Track;
