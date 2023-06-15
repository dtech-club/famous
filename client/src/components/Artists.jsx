import { useContext } from "react";
import { MyContext } from "../context/context";
import { Link } from "react-router-dom";

const Artists = () => {
  const { artists } = useContext(MyContext);

  return (
    <>
      <h2 className="text-center text-3xl font-bold mt-20">Artists</h2>
      <div
        className="albums"
        class="flex justify-between m-20 border-2 border-gray-500 rounded-lg bg-gray-400"
      >
        {artists.map((artist) => {
          return (
            <div key={artist._id} className="small-albums">
              <Link to={`/artists/${artist._id}`} state={artist}>
                <h3 class="py-10 text-center text-xl font-bold">
                  {artist.artistName}
                </h3>
                <img
                  src={artist.artistImage}
                  alt="artistimage"
                  class="object-contain rounded images"
                />
                <p class="py-10 text-center text-lg font-semibold">
                  {artist.city}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Artists;
