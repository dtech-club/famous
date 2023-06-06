import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useContext } from "react";
import { MyContext } from "../context/context";

const ArtistInformationSidebar = ({ artist }) => {

console.log(artist, 'artist in sidebar')

  return (
    <div id="sidebar-artist">
      <Link to={`/artists/${artist?._id}`}>
        <div>
          <h3>{artist?.artistName}</h3>
          <img src={artist?.artistImage} alt="artistimage" />
          <p>{artist?.city}</p>
        </div>
      </Link>
      <div id="sidebar-discography">
        <ul>
          Discography
          {artist?.albums?.map((album) => {
            return (
              <div key={album._id}>
                <Link to={`/albums/${album._id}`}>
                  <li>
                    <img src={album.albumImage} alt={album.title} />
                    <p>{album.title}</p>
                  </li>
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ArtistInformationSidebar;
