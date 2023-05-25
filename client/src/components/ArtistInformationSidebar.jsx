import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const ArtistInformationSidebar = ({ artistId }) => {
    
    const [artist, setArtist] = useState({});
    
    // fetch artist data using the artistId
    useEffect(() => {
        axios
        .get(`http://localhost:4000/artists/${artistId}`)
        .then((response) => {
            if (response.data.success) {
                setArtist(response.data.data);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    
    
    console.log('artist', artist);
    
    return (
        <div>
            <Link to={`/artists/${artist._id}`} state={artist}>
                <div>
                    <h3>{artist?.artistName}</h3>
                    <img src={artist?.artistImage} alt="artistimage" />
                    <p>{artist?.city}</p>
                </div>
            </Link>
            <ul>
                Discography
                {artist?.albums.map((album) => (
                    <Link to={`/albums/${album._id}`} state={album}>
                        <li key={album._id}>
                            <img src={album.albumImage} alt={album.title} />
                            <p>{album.title}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};
export default ArtistInformationSidebar;
