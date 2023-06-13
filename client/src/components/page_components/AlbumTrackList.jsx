import { Howl, Howler } from "howler";
import Track from "./Track.jsx";
import { useState } from "react";
import "../pages/album-page.css";

const AlbumTrackList = ({ tracklist }) => {
  const [active, setActive] = useState("track");
  return (
    <div className="list-of-tracks">
      <ul className="">
        <li>
          {tracklist?.map((track) => {
            console.log("tracklist", track.trackFile);

            return (
              <div key={track?._id} className="my-4 pl-0 ml-0" >
                <Track track={track} />
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
};
export default AlbumTrackList;
