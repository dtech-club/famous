import { useContext } from 'react';
import { MyContext } from '../context/context';
import { Link } from 'react-router-dom';
import AlbumImage from '../../page_components/AlbumImage.jsx';

const FeaturedArtists = () => {
    const { artists } = useContext(MyContext);
    return (
        <div className="artists">
            {artists.map((artist) => {
                return (
                    <Link to={`/artists/${artist._id}`} state={artist}>
                        <div key={artist._id} className="small-artists">
                            <h3>{artist.artistName}</h3>
                            <img src={artist.artistImage} alt="artistimage" />
                            <p>{artist.city}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default FeaturedArtists;
