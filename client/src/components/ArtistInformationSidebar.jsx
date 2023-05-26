import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { MyContext } from '../context/context';

const ArtistInformationSidebar = ({ artistId }) => {
    const { singleArtist, setArtistIdState } = useContext(MyContext);
    console.log(singleArtist);

    // fetch artist data using the artistId
    useEffect(() => {
        setArtistIdState(artistId);
    }, []);

    console.log('singleartist', singleArtist);

    return (
        <div id="sidebar-artist">
            <Link to={`/artists/${singleArtist._id}`} state={singleArtist}>
                <div>
                    <h3>{singleArtist?.artistName}</h3>
                    <img src={singleArtist?.artistImage} alt="artistimage" />
                    <p>{singleArtist?.city}</p>
                </div>
            </Link>
            <div id="sidebar-discography">
                <ul>
                    Discography
                    {singleArtist?.albums.map((album) => {
                        return (
                            <div key={album._id}>
                                <Link to={`/albums/${album._id}`} state={album}>
                                    <li>
                                        <img
                                            src={album.albumImage}
                                            alt={album.title}
                                        />
                                        <p>{album.title}</p>
                                    </li>
                                </Link>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
export default ArtistInformationSidebar;
