const AlbumTrackList = ({ tracklist }) => {
    console.log('tracklist', tracklist)
    return (
        <div>
            <ul>
                {tracklist?.map((track) => {
                    return (
                        <li key={track?._id}>
                            <span>{track?.trackName}</span>
                            <span>{track?.duration}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default AlbumTrackList;
