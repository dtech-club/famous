import { useContext } from 'react';
import { MyContext } from '../context/context';
import { Link } from 'react-router-dom';

const FeaturedArtists = () => {
    const { artists } = useContext(MyContext);
    return (
        <div className="artists-section">
            <div className="artists-menu">
                <p>{/* here we will make the featured artists */}</p>
                <p>Featured artists</p>
                <button className="view-artists">View all</button>
            </div>
            <div className="artists">
                {artists.map((artist) => {
                    return (
                        <div className="small-artists"><Link to={`/artists/${artist._id}`} state={artist}>{artist.artistName}</Link></div>
                    );
                })}
            </div>
        </div>
    );
};

export default FeaturedArtists;
