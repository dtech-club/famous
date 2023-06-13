import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../context/context.js";
import ArtistDiscography from "../page_components/ArtistDiscography.jsx";
import AddAlbum from "../content_managment_system/AddAlbum.jsx";
import PatchArtist from "../content_managment_system/PatchArtist.jsx";
import DeleteArtist from "../content_managment_system/DeleteArtist.jsx";
import ArtistAllInfo from "../page_components/ArtistAllInfo.jsx";

export default function ArtistPage() {
  const [activeArtistInfo, setActiveArtistInfo] =
    useState("artist-information");
  const [activeDiscographySection, setActiveDiscographySection] = useState(
    "discography-section"
  );
  const { id } = useParams();
  const { singleArtist, setSingleArtist, artists } = useContext(MyContext);

  useEffect(() => {
    const artist = artists.find((artist) => artist._id === id);
    setSingleArtist(artist);
  }, [id, artists]);

  return (
    <main className="grid grid-cols-2 gap-8 my-20 mx-16">
      <section>
        <div className="flex justify-between mb-4">
          <button className="p-4 py-2 rounded bg-red">
            <DeleteArtist artist={singleArtist} />
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeArtistInfo === "artist-information"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveArtistInfo("artist-information")}
          >
            Artist Information
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeArtistInfo === "edit-artist"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveArtistInfo("edit-artist")}
          >
            Edit Artist
          </button>
        </div>

        <div className="p-4 bg-black">
          {activeArtistInfo === "artist-information" && (
            <ArtistAllInfo artist={singleArtist} />
          )}

          {activeArtistInfo === "edit-artist" && (
            <PatchArtist artist={singleArtist} />
          )}
        </div>
      </section>

      <section>
        <div className="flex justify-between mb-4">
          <button
            className={`px-4 py-2 rounded ${
              activeDiscographySection === "discography-section"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveDiscographySection("discography-section")}
          >
            Discography
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeDiscographySection === "add-album"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveDiscographySection("add-album")}
          >
            Add Album
          </button>
        </div>

        {activeDiscographySection === "discography-section" && (
          <div className="p-4 bg-black">
            <ArtistDiscography
              discography={singleArtist?.albums}
              artist={singleArtist}
            />
          </div>
        )}

        {activeDiscographySection === "add-album" && (
          <div className="p-4 bg-black">
            <AddAlbum artist={singleArtist} />
          </div>
        )}
      </section>
    </main>
  );
}
