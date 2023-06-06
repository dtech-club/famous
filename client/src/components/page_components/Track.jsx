import { Howl, Howler } from 'howler';
import { useState } from 'react';
import DeleteTrack from '../content_managment_system/DeleteTrack.jsx';
import PatchTrack from '../content_managment_system/PatchTrack.jsx';

const Track = ({ track }) => {
    const sourceAudio = track.trackFile;
    const [sound, setSound] = useState(null);
    const [active, setActive] = useState('track');

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
            format: ['mp3'],
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
            <button>
                <DeleteTrack track={track} setActive={setActive} />
            </button>
            <button onClick={() => setActive('track')}>track</button>
            <button onClick={() => setActive('edit-track')}>edit track</button>

            {active === 'track' && (
                <div>
                    <span>{track?.trackName}</span>
                    <button onClick={playSound}>PLAY</button>
                    <button onClick={pauseSound}>PAUSE</button>
                    <button onClick={stopSound}>STOP</button>
                </div>
            )}

            {active === 'edit-track' && <PatchTrack track={track} setActive={setActive} />}
        </li>
    );
};

export default Track;
