import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../context/context.js';
import AlbumName from '../page_components/AlbumName.jsx';
import AlbumImage from '../page_components/AlbumImage.jsx';
import AlbumTrackList from '../page_components/AlbumTrackList.jsx';
import ArtistInformationSidebar from '../ArtistInformationSidebar.jsx';
import DeleteAlbum from '../content_managment_system/DeleteAlbum.jsx';
import PatchAlbum from '../content_managment_system/PatchAlbum.jsx';
import AddTrack from '../content_managment_system/AddTrack.jsx';

const AlbumPage = () => {
    const { id } = useParams();
    const [active, setActive] = useState('album-tracklist');

    const { albums, singleAlbum, setSingleAlbum } = useContext(MyContext);

    useEffect(() => {
        const album = albums.find((album) => album._id === id);
        setSingleAlbum(album);
    }, [id]);
    
  
   

    return (
        <main>
            <section id="album-information">
                <button>
                    <DeleteAlbum album={singleAlbum} />
                </button>

                <div>
                    <AlbumImage url={singleAlbum?.albumImage} />
                </div>
                <div>
                    <AlbumName name={singleAlbum?.albumName} />
                </div>
            </section>
            <section>
                <div id="buttons-condition-adding-track">
                    <button onClick={() => setActive('album-tracklist')}>
                        Album tracklist
                    </button>
                    <button onClick={() => setActive('add-track')}>
                        Add track
                    </button>
                    <button onClick={() => setActive('edit-album')}>
                        Edit Album
                    </button>
                </div>
                <div id="conditional-renedring-to-add-track">
                    {active === 'album-tracklist' && (
                        <AlbumTrackList tracklist={singleAlbum?.tracks} />
                    )}
                    {active === 'add-track' && <AddTrack album={singleAlbum} />}
                    {active === 'edit-album' && <PatchAlbum album={singleAlbum} />}
                </div>
            </section>

             <aside>
                <ArtistInformationSidebar artist={singleAlbum?.artistId} />
            </aside> 
        </main>
    );
};
export default AlbumPage;
