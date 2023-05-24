import Image from '../page_components/ArtistImage.jsx';
import Name from '../page_components/ArtistName.jsx';
import Biography from '../page_components/ArtistBiography.jsx';
import Discography from '../page_components/ArtistDiscography.jsx';
import PersonalInfo from '../page_components/ArtistPersonalInfo.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ArtistPage() {
    const { state } = useLocation();
    return (
        <main>
            <section>
                <Image url={state?.artistImage} />
            </section>
            <section>
                <Name name={state?.artistName} />
            </section>
            <section>
                <Biography biography={state?.biography} />
            </section>
            <section>
                <PersonalInfo
                    city={state?.city}
                    country={state?.state}
                    genre={state?.genre}
                />
            </section>
            <section>
                <Discography discography={state?.albums} />
            </section>
        </main>
    );
}
