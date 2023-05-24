import Image from '../page_components/ArtistImage.jsx';
import Name from '../page_components/ArtistName.jsx';
import Biography from '../page_components/ArtistBiography.jsx';
import Discography from '../page_components/ArtistDiscography.jsx';
import PersonalInfo from '../page_components/ArtistPersonalInfo.jsx';
import AlbumImage from '../page_components/AlbumImage.jsx';
import AlbumTrackList from '../page_components/AlbumTrackList.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AlbumName from '../page_components/AlbumName.jsx';

const AlbumPage = () => {
    const { state } = useLocation();
     return (
        <main>
            <section>
                <AlbumImage url={state?.albumImage} />
            </section>
            <section>
                <AlbumName name={state?.albumName} />
            </section>
            <section>
                <AlbumTrackList tracklist={state?.tracks} />
            </section>
            <aside>
                <div>
                    <ArtistImage url={state?.artistImage} />
                    <ArtistName name={state?.artistName} />
                </div>
                <div>
                    <ArtistDiscography discography={state?.discoraphy}/>
                </div>
                
            </aside>
        </main>
    );
};
export default AlbumPage;
