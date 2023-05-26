import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Discography = ({ discography, artist }) => {
    return (
        <div>
            <h2>Discography</h2>
            <ul>
                {discography.map((album) => (
                    <Link to={`/albums/${album._id}`} state={album}>
                        <li key={album._id}>
                            <img src={album.albumImage} alt={album.title} />
                            <p>{album.title}</p>
                            <p>{album.year}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Discography;
