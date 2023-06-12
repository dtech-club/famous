import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../context/context.js";
import AlbumName from "../page_components/AlbumName.jsx";
import AlbumImage from "../page_components/AlbumImage.jsx";
import AlbumTrackList from "../page_components/AlbumTrackList.jsx";
import ArtistInformationSidebar from "../ArtistInformationSidebar.jsx";
import DeleteAlbum from "../content_managment_system/DeleteAlbum.jsx";
import PatchAlbum from "../content_managment_system/PatchAlbum.jsx";
import AddTrack from "../content_managment_system/AddTrack.jsx";

const AlbumPage = () => {
  const { id } = useParams();
  const [active, setActive] = useState("album-tracklist");

  const { albums, singleAlbum, setSingleAlbum } = useContext(MyContext);

  useEffect(() => {
    const album = albums.find((album) => album._id === id);
    setSingleAlbum(album);
  }, [id, albums]);

  return (
    <div className="container mx-auto">
      <main>
        <section>
          <div className="flex items-center justify-between mb-4">
            <button className="py-2 px-4 bg-red-500 text-white rounded">
              <DeleteAlbum album={singleAlbum} />
            </button>
            <div className="flex items-center space-x-4 w-50">
              <AlbumImage url={singleAlbum?.albumImage} />
              <AlbumName name={singleAlbum?.albumName} />
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center space-x-4 mb-4">
            <button
              className="py-2 px-4 bg-blue-500 text-white rounded"
              onClick={() => setActive("album-tracklist")}
            >
              Album tracklist
            </button>

            <button
              className="py-2 px-4 bg-blue-500 text-white rounded"
              onClick={() => setActive("add-track")}
            >
              Add track
            </button>

            <button
              className="py-2 px-4 bg-blue-500 text-white rounded"
              onClick={() => setActive("edit-album")}
            >
              Edit Album
            </button>
          </div>
          <div>
            {active === "album-tracklist" && (
              <AlbumTrackList tracklist={singleAlbum?.tracks} />
            )}
            {active === "add-track" && (
              <AddTrack album={singleAlbum} setActive={setActive} />
            )}
            {active === "edit-album" && (
              <PatchAlbum album={singleAlbum} setActive={setActive} />
            )}
          </div>
        </section>

        <aside>
          <ArtistInformationSidebar artist={singleAlbum?.artistId} />
        </aside>
      </main>
    </div>
  );
};

export default AlbumPage;
