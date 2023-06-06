import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Discography = ({ artist }) => {
    return (
        <div>
            <h2>Discography</h2>
            <ul>
                {artist?.albums?.map((album) => (
                    <div key={album._id}>
                        <Link to={`/albums/${album._id}`} state={album}>
                            <li >
                                <img src={album.albumImage} alt={album.title} />
                                <p>{album.title}</p>
                                <p>{album.year}</p>
                            </li>
                        </Link>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Discography;
