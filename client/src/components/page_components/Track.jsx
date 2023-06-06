import { Howl, Howler } from "howler";
import { useState } from "react";
import DeleteTrack from "../content_managment_system/DeleteTrack.jsx";
import PatchTrack from "../content_managment_system/PatchTrack.jsx";
import { BsClock } from "react-icons/bs";

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

<<<<<<< HEAD
  return (
    <li key={track?._id}>
      <button>
        <DeleteTrack track={track} />
      </button>
      <button onClick={() => setActive("track")}>track</button>
      <button onClick={() => setActive("edit-track")}>edit track</button>
=======
    return (
        <li key={track?._id}>
            <button>
                <DeleteTrack track={track} setActive={setActive} />
            </button>
            <button onClick={() => setActive('track')}>track</button>
            <button onClick={() => setActive('edit-track')}>edit track</button>
>>>>>>> eadebdca9d88ca6c8fdaff106dfa8919aff0d39b

      {active === "track" && (
        <div>
          <span>{track?.trackName}</span>
          <button onClick={playSound}>PLAY</button>
          <button onClick={pauseSound}>PAUSE</button>
          <button onClick={stopSound}>STOP</button>
        </div>
      )}

<<<<<<< HEAD
      {active === "edit-track" && <PatchTrack track={track} />}
    </li>
  );
=======
            {active === 'edit-track' && <PatchTrack track={track} setActive={setActive} />}
        </li>
    );
>>>>>>> eadebdca9d88ca6c8fdaff106dfa8919aff0d39b
};

export default Track;
