import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../context/context.js';
import ArtistDiscography from '../page_components/ArtistDiscography.jsx';
import AddAlbum from '../content_managment_system/AddAlbum.jsx';
import PatchArtist from '../content_managment_system/PatchArtist.jsx';
import DeleteArtist from '../content_managment_system/DeleteArtist.jsx';
import './artist-page.css';
import ArtistAllInfo from '../page_components/ArtistAllInfo.jsx';

export default function ArtistPage() {
    const [activeArtistInfo, setActiveArtistInfo] =
        useState('artist-information');
    const [activeDiscographySection, setActiveDiscographySection] = useState(
        'discography-section'
    );
    const { id } = useParams();
    const { singleArtist, setSingleArtist, artists } = useContext(MyContext);

    useEffect(() => {
        const artist = artists.find((artist) => artist._id === id);
        setSingleArtist(artist);
    }, [id, artists]);

    return (
        <main className="grid-section">
            <section>
                <DeleteArtist artist={singleArtist} />
                <div id="button-to-select-cards">
                    <button
                        onClick={() =>
                            setActiveArtistInfo('artist-information')
                        }
                    >
                        artist information
                    </button>
                    <button onClick={() => setActiveArtistInfo('edit-artist')}>
                        edit artist
                    </button>
                </div>

                <div id="artist-container-contintional-rendering">
                    {activeArtistInfo === 'artist-information' && (
                        <ArtistAllInfo artist={singleArtist} />
                    )}

                    {activeArtistInfo === 'edit-artist' && (
                        <PatchArtist artist={singleArtist} />
                    )}
                </div>
            </section>

            <section>
                <div id="buttons-to-add-albums">
                    <button
                        onClick={() =>
                            setActiveDiscographySection('discography-section')
                        }
                    >
                        Discography
                    </button>
                    <button
                        onClick={() => setActiveDiscographySection('add-album')}
                    >
                        Add Album
                    </button>
                </div>

                {activeDiscographySection === 'discography-section' && (
                    <ArtistDiscography
                        discography={singleArtist?.albums}
                        artist={singleArtist}
                    />
                )}

                {activeDiscographySection === 'add-album' && (
                    <AddAlbum artist={singleArtist} />
                )}
            </section>
        </main>
    );
}
