import { useContext } from 'react';
import { MyContext } from '../context/context';
import { Link } from 'react-router-dom';

const Artists = () => {
    const { artists } = useContext(MyContext);
    return (
        <div className="artists">
            {artists.map((artist) => {
                return (
                    <div key={artist._id} className="small-artists">
                        <Link to={`/artists/${artist._id}`}>
                            <h3>{artist.artistName}</h3>
                            <img src={artist.artistImage} alt="artistimage" />
                            <p>{artist.city}</p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};
export default Artists;
