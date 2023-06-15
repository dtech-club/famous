import { MyContext } from "../context/context.js";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Albums = () => {
  const { albums } = useContext(MyContext);

  return (
    <>
      <h2 className="text-center text-3xl font-bold mt-20">Albums</h2>
      <div
        className="albums"
        class="flex justify-between m-20 border-2 border-gray-500 rounded-lg bg-gray-400"
      >
        {albums.map((album) => {
          return (
            <div key={album._id} className="small-albums">
              <Link to={`/albums/${album._id}`}>
                <h3 class="py-10 text-center text-xl font-bold">
                  {album.artistName}
                </h3>
                <img
                  src={album.albumImage}
                  alt={album?.albumName}
                  class="object-contain rounded"
                />
                <p class="py-10 text-center text-lg-font-semibold">
                  {album.albumName}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Albums;
