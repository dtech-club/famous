import ArtistImage from '../page_components/ArtistImage.jsx';
import ArtistName from '../page_components/ArtistName.jsx';
import ArtistBiography from '../page_components/ArtistBiography.jsx';
import ArtistDiscography from '../page_components/ArtistDiscography.jsx';
import ArtistPersonalInfo from '../page_components/ArtistPersonalInfo.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ArtistPage() {
    const { state } = useLocation();
    return (
        <main>
            <section>
                <ArtistImage url={state?.artistImage} />
            </section>
            <section>
                <ArtistName name={state?.artistName} />
            </section>
            <section>
                <ArtistBiography biography={state?.biography} />
            </section>
            <section>
                <ArtistPersonalInfo
                    city={state?.city}
                    country={state?.state}
                    genre={state?.genre}
                />
            </section>
            <section>
                <ArtistDiscography discography={state?.albums} artist={state}/>
            </section>
        </main>
    );
}
