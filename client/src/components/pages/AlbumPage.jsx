import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AlbumName from '../page_components/AlbumName.jsx';
import AlbumImage from '../page_components/AlbumImage.jsx';
import AlbumTrackList from '../page_components/AlbumTrackList.jsx';
import ArtistInformationSidebar from '../ArtistInformationSidebar.jsx';
import ModifyTrack from '../content_managment_system/ModifyTrack.jsx';
import DeleteAlbum from '../content_managment_system/DeleteAlbum.jsx';

const AlbumPage = () => {
    const { state } = useLocation();
    const [active, setActive] = useState('album-tracklist');

    return (
        <main>
            <section id="album-information">
                <DeleteAlbum state={state} />
                <div>
                    <AlbumImage url={state?.albumImage} />
                </div>
                <div>
                    <AlbumName name={state?.albumName} />
                </div>
            </section>
            <section>
                <div id="buttons-condition-adding-track">
                    <button
                        onClick={() => setActive('album-tracklist')}
                    ></button>
                    <button onClick={() => setActive('add-track')}></button>
                </div>
                <div id="conditional-renedring-to-add-track">
                    {active === 'album-tracklist' && (
                        <AlbumTrackList tracklist={state?.tracks} />
                    )}
                    {active === 'add-track' && <ModifyTrack state={state} />}
                </div>
            </section>

            <aside>
                <ArtistInformationSidebar artistId={state?.artistId} />
            </aside>
        </main>
    );
};
export default AlbumPage;
