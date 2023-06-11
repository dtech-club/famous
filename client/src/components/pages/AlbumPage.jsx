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
import "./album-page.css";

const AlbumPage = () => {
  const { id } = useParams();
  const [active, setActive] = useState("album-tracklist");

  const { albums, singleAlbum, setSingleAlbum } = useContext(MyContext);

  useEffect(() => {
    const album = albums.find((album) => album._id === id);
    setSingleAlbum(album);
  }, [id, albums]);

  return (
    <div className="big-div">
      <main>
        <section id="album-information">
          <div className="album-photo">
            <button className="delete-button">
              <DeleteAlbum album={singleAlbum} />
            </button>
            <AlbumImage url={singleAlbum?.albumImage} />
            <div>
              <AlbumName name={singleAlbum?.albumName} />
            </div>
          </div>
        </section>
        <section>
          <div className="buttons" id="buttons-condition-adding-track">
            <button onClick={() => setActive("album-tracklist")}>
              Album tracklist
            </button>

            <button onClick={() => setActive("add-track")}>Add track</button>

            <button onClick={() => setActive("edit-album")}>Edit Album</button>
          </div>
          <div className="tracks" id="conditional-renedring-to-add-track">
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

        <aside className="aside">
          <ArtistInformationSidebar artist={singleAlbum?.artistId} />
        </aside>
      </main>
    </div>
  );
};
export default AlbumPage;
