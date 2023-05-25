import { MyContext } from '../context/context.js';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const FeaturedAlbums = () => {
    const { albums } = useContext(MyContext);
    return (
        <div className="albums">
            {albums.map((album) => {
                return (
                    <Link to={`/albums/${album._id}`} state={album}>
                        <div className="small-albums">
                            <h3>{album.artistName}</h3>
                            <img src={album.albumImage} alt="" />
                            <p>{album.albumName}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default FeaturedAlbums;
