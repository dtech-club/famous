import { Howl, Howler } from "howler";
import DeleteTrack from "../content_managment_system/DeleteTrack.jsx";
import { useState } from "react";

const Track = ({ track }) => {
  const sourceAudio = track.trackFile;
  const [sound, setSound] = useState(null);

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
    <li key={track?._id}>
      <span>{track?.trackName}</span>
      <div onClick={playSound}>PLAY</div>
      <div onClick={pauseSound}>PAUSE</div>
      <div onClick={stopSound}>STOP</div>
      <DeleteTrack track={track} />
    </li>
  );
};

export default Track;
