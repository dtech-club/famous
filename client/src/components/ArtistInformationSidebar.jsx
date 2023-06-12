import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/context";

const ArtistInformationSidebar = ({ artist }) => {
  console.log(artist, "artist in sidebar");

  return (
    <div className="p-4 bg-black-100">
      <Link to={`/artists/${artist?._id}`}>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">{artist?.artistName}</h3>
          <img
            src={artist?.artistImage}
            alt="artistimage"
            className="w-24 h-24 rounded-full"
          />
          <p className="text-white-600">{artist?.city}</p>
        </div>
      </Link>
      <div>
        <ul>
          <li className="font-bold mb-2">Discography</li>
          {artist?.albums?.map((album) => {
            return (
              <div key={album._id}>
                <Link to={`/albums/${album._id}`}>
                  <li className="flex items-center space-x-4">
                    <img
                      src={album.albumImage}
                      alt={album.title}
                      className="w-10 h-10 rounded"
                    />
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
