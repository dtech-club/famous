import { Howl, Howler } from 'howler';
import Track from './Track.jsx';

const AlbumTrackList = ({ tracklist }) => {
    return (
        <div>
            <ul>
                {tracklist?.map((track) => {
                    console.log('tracklist', track.trackFile);

                    return <Track key={track?._id} track={track} />;
                })}
            </ul>
        </div>
    );
};
export default AlbumTrackList;
