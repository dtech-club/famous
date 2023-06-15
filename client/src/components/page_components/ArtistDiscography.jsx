import { useContext } from "react";
import { Link } from "react-router-dom";

const Discography = ({ artist }) => {
  return (
    <div>
      <h2 className="font-bold text-center text-xl">Discography</h2>
      <ul>
        {artist?.albums?.map((album) => (
          <div key={album._id}>
            <Link to={`/albums/${album._id}`} state={album}>
              <li>
                <p className="text-center my-2 font-semibold text-black">{album.albumName}</p>
                <img src={album.albumImage} alt={album.title} />
                <p>{album.year}</p>
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Discography;
