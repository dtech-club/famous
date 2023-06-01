import { Howl, Howler } from 'howler';
import DeleteTrack from '../content_managment_system/DeleteTrack.jsx';

const Track = ({track}) => {
    //Player
   
    const sourceAudio = track.trackFile;
    console.log('sourceAudio', sourceAudio);
    const sound = new Howl({
        src: [sourceAudio],
        html5: true,
        format: ['mp3'],
    });

    return (
        <li key={track?._id}>
            <span>{track?.trackName}</span>
            <div onClick={() => sound.play()}>PLAY</div>
            <div onClick={() => sound.pause()}>PAUSE</div>
            <div onClick={() => sound.stop()}>STOP</div>
            <DeleteTrack track={track} />
        </li>
    );
};
export default Track;
