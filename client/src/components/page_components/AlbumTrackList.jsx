import { Howl, Howler } from 'howler';
import Track from './Track.jsx';
import { useState } from 'react';

const AlbumTrackList = ({ tracklist }) => {
    const [active, setActive] = useState('track');
    return (
        <div>
            <ul>
                {tracklist?.map((track) => {
                    console.log('tracklist', track.trackFile);

                    return (
                        <div>
                            <Track key={track?._id} track={track} />
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};
export default AlbumTrackList;
