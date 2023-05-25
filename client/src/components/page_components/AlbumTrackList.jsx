const AlbumTrackList = ({ tracklist }) => {
    return (
        <div>
            <ul>
                {tracklist?.map((track, index) => {
                    return (
                        <li key={index}>
                            <span>{track?.name}</span>
                            <span>{track?.duration}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default AlbumTrackList;
