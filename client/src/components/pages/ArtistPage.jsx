import ArtistImage from '../page_components/ArtistImage.jsx';
import ArtistName from '../page_components/ArtistName.jsx';
import ArtistBiography from '../page_components/ArtistBiography.jsx';
import ArtistDiscography from '../page_components/ArtistDiscography.jsx';
import ArtistPersonalInfo from '../page_components/ArtistPersonalInfo.jsx';
import { useLocation } from 'react-router-dom';
import './artist-page.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { MyContext } from '../../context/context.js';
import ModifyAlbum from '../content_managment_system/ModifyAlbum.jsx';

export default function ArtistPage() {
    const { createArtist, singleArtist, setSingleArtist } =
        useContext(MyContext);
    useEffect(() => {
        setSingleArtist(createArtist);
    }, [createArtist]);

    const { state } = useLocation();

    const data = state ? state : createArtist;

    return (
        <main className="grid-section">
            <section className="image-section">
                <ArtistImage url={data?.artistImage} />
            </section>
            <section className="name-section">
                <ArtistName name={data?.artistName} />
            </section>
            <section className="biography-section">
                <ArtistBiography biography={data?.biography} />
            </section>

            <section className="personal-section">
                <ArtistPersonalInfo
                    city={data?.city}
                    country={data?.state}
                    genre={data?.genre}
                />
                <p>
                    Here is the info Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Inventore dolor earum voluptatem, nihil
                    ullam hic, delectus provident libero rerum officiis
                    assumenda quaerat non possimus facere, accusantium
                    dignissimos? Totam, provident eaque?
                </p>
            </section>
            <section className="discography-section">
                <ArtistDiscography discography={data?.albums} artist={data} />
            </section>
            <section>
                <ModifyAlbum artist={data}/>
            </section>
        </main>
    );
}
