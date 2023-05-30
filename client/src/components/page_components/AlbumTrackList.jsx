import { Howl, Howler } from 'howler';

const AlbumTrackList = ({ tracklist }) => {
    return (
        <div>
            <ul>
                {tracklist?.map((track) => {
                    console.log('tracklist', track.trackFile);
                   
                    const sourceAudio = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3';
                   //const sourceAudio = track.tarckFile;
                        const sound = new Howl({
                            src: [sourceAudio],
                            html5: true,
                            format: ['mp3'],
                        });
                        sound.play();
                    

                    return (
                        <li key={track?._id}>
                            <span>{track?.trackName}</span>
                            <div onClick={() => sound.play()}>PLAY</div>
                            <div onClick={()=> sound.pause()}>PAUSE</div>
                            <div onClick={() => sound.stop()}>STOP</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default AlbumTrackList;
