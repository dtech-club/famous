import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AlbumName from "../page_components/AlbumName.jsx";
import AlbumImage from "../page_components/AlbumImage.jsx";
import AlbumTrackList from "../page_components/AlbumTrackList.jsx";
import ArtistInformationSidebar from "../ArtistInformationSidebar.jsx";
import ModifyTrack from "../content_managment_system/ModifyTrack.jsx";

const AlbumPage = () => {
  const { state } = useLocation();

  return (
    <main>
      <section>
        <AlbumImage url={state?.albumImage} />
      </section>
      <section>
        <AlbumName name={state?.albumName} />
      </section>
      <section>
        <ModifyTrack state={state} />
      </section>
      <section>
        <AlbumTrackList tracklist={state?.tracks} />
      </section>
      <aside>
        <ArtistInformationSidebar artistId={state?.artistId} />
      </aside>
    </main>
  );
};
export default AlbumPage;
