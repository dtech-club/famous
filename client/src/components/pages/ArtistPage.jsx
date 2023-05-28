import ArtistImage from "../page_components/ArtistImage.jsx";
import ArtistName from "../page_components/ArtistName.jsx";
import ArtistBiography from "../page_components/ArtistBiography.jsx";
import ArtistDiscography from "../page_components/ArtistDiscography.jsx";
import ArtistPersonalInfo from "../page_components/ArtistPersonalInfo.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Name from "../page_components/ArtistName.jsx";
import "./artist-page.css";
export default function ArtistPage() {
  const { state } = useLocation();
  return (
    <main className="grid-section">
      <section className="image-section">
        <ArtistImage url={state?.artistImage} />
      </section>
      <section>
        <ArtistName name={state?.artistName} />
      </section>
      <section className="biography-section">
        <ArtistBiography biography={state?.biography} />
      </section>
      <section className="name-section">
        <Name />
      </section>
      <section className="personal-section">
        <ArtistPersonalInfo
          city={state?.city}
          country={state?.state}
          genre={state?.genre}
        />
      </section>
      <section className="discography-section">
        <ArtistDiscography discography={state?.albums} artist={state} />
      </section>
    </main>
  );
}
