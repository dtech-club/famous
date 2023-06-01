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

    return (
        <main>
            <section id="album-information">
                <section>
                    <AlbumImage url={state?.albumImage} />
                </section>
                <section>
                    <AlbumName name={state?.albumName} />
                </section>
                <section>
                    <AlbumTrackList tracklist={state?.tracks} />
                </section>
            </section>
            <section id="album-patch-and-delete">
                <DeleteAlbum state={state} />
                <ModifyTrack state={state} />
            </section>
            <aside>
                <ArtistInformationSidebar artistId={state?.artistId} />
            </aside>
        </main>
    );
};
export default AlbumPage;
