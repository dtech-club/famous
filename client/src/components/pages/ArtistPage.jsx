import ArtistDiscography from "../page_components/ArtistDiscography.jsx";
import ModifyAlbum from "../content_managment_system/ModifyAlbum.jsx";
import PatchArtist from "../content_managment_system/PatchArtist.jsx";
import DeleteArtist from "../content_managment_system/DeleteArtist.jsx";
import { useLocation } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { MyContext } from "../../context/context.js";
import "./artist-page.css";
import ArtistAllInfo from "../page_components/ArtistAllInfo.jsx";

export default function ArtistPage() {
  const [activeArtistInfo, setActiveArtistInfo] =
    useState("artist-information");

  const [activeDiscographySection, setActiveDiscographySection] = useState(
    "discography-section"
  );

  const { createArtist, singleArtist, setSingleArtist } = useContext(MyContext);
  useEffect(() => {
    setSingleArtist(createArtist);
  }, [createArtist]);

  const { state } = useLocation();

  const data = state ? state : createArtist;

  return (
    <main className="grid-section">
      <section>
        <DeleteArtist artist={data} />
        <div id="button-to-select-cards">
          <button onClick={() => setActiveArtistInfo("artist-information")}>
            artist information
          </button>
          <button onClick={() => setActiveArtistInfo("edit-artist")}>
            edit artist
          </button>
        </div>

        <div id="artist-container-contintional-rendering">
          {activeArtistInfo === "artist-information" && (
            <ArtistAllInfo data={data} />
          )}

          {activeArtistInfo === "edit-artist" && <PatchArtist artist={data} />}
        </div>
      </section>

      <section>
        <div id="buttons-to-add-albums">
          <button
            onClick={() => setActiveDiscographySection("discography-section")}
          >
            Discography
          </button>
          <button onClick={() => setActiveDiscographySection("add-album")}>
            Add Album
          </button>
        </div>

        {activeDiscographySection === "discography-section" && (
          <ArtistDiscography discography={data?.albums} artist={data} />
        )}

        {activeDiscographySection === "add-album" && (
          <ModifyAlbum artist={data} />
        )}
      </section>
    </main>
  );
}
