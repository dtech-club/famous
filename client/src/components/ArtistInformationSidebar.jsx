import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { MyContext } from '../context/context';

const ArtistInformationSidebar = ({ artistId }) => {
    const {setArtistIdState } = useContext(MyContext);
    console.log(singleArtist);

    // fetch artist data using the artistId
    useEffect(() => {
        setArtistIdState(artistId);
    }, []);

    

    

    return (
        <div>
             {/* <Link to={`/artists/${singleArtist._id}`} state={singleArtist}>
                <div>
                    <h3>{singleArtist?.artistName}</h3>
                    <img src={singleArtist?.artistImage} alt="artistimage" />
                    <p>{singleArtist?.city}</p>
                </div>
            </Link>
            <ul>
                Discography
                {singleArtist?.albums.map((album) => (
                    <Link to={`/albums/${album._id}`} state={album}>
                        <li key={album._id}>
                            <img src={album.albumImage} alt={album.title} />
                            <p>{album.title}</p>
                        </li>
                    </Link>
                ))}
            </ul>  */}
        </div>
    );
};
export default ArtistInformationSidebar;
