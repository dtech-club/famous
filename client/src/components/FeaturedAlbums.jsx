import { MyContext } from '../context/context.js';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const FeaturedAlbums = () => {
    const { albums } = useContext(MyContext);
    return (
        <div className="albums-section">
            <div className="albums-menu">
                <p>Featured albums</p>
                <button className="view-albums">View all</button>
            </div>
            <div className="albums">
                {albums.map((album) => {
                    return (
                        <Link to={`/albums/${album._id}`} state={album}>
                            <div className="small-albums">
                                {album.albumImage}
                                {album.albumName}
                                {album.artistName}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default FeaturedAlbums;
