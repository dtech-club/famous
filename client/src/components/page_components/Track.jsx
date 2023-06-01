import { Howl, Howler } from "howler";
import DeleteTrack from "../content_managment_system/DeleteTrack.jsx";
import { useState } from "react";

const Track = ({ track }) => {
  //Player
  const sourceAudio = track.trackFile;
  const [currentSound, setCurrentSound] = useState(null);

  const playSound = () => {
    if (currentSound) {
      currentSound.stop();
    }

    const sound = new Howl({
      src: [sourceAudio],
      html5: true,
      format: ["mp3"],
      onend: () => {
        setCurrentSound(null);
      },
    });

    setCurrentSound(sound);
    sound.play();
  };

  const pauseSound = () => {
    if (currentSound) {
      currentSound.pause();
    }
  };

  const stopSound = () => {
    if (currentSound) {
      currentSound.stop();
      setCurrentSound(null);
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
