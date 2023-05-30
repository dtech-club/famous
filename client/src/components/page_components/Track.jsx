import { Howl, Howler } from 'howler';

const Track = ({track}) => {
    //Player
    // const sourceAudio =
    //     'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3';
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
        </li>
    );
};
export default Track;
