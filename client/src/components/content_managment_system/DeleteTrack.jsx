import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../context/context.js";

const DeleteTrack = ({ track, setActive }) => {
    const navigate = useNavigate();
    const { setAlbums } = useContext(MyContext);

<<<<<<< HEAD
const DeleteTrack = ({ track }) => {
  const deleteTrack = (e) => {
    e.preventDefault();

    axios
      .delete(
        `http://localhost:4000/artists/${track.artistId}/album/${track.albumId}/track/${track._id}`
      )
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.message);
        } else {
          console.log(response.data.message);
=======
    const deleteTrack = (e) => {
        e.preventDefault();

        axios
        .delete(`http://localhost:4000/artists/${track.artistId}/album/${track.albumId}/track/${track._id}`)
        .then((response) => {
            if (response.data.success) {
                console.log(response.data.message);
                setAlbums(response.data.data);
                setActive('track')
                navigate(`/albums/${response.data.albumId}`);
            } else {
                console.log(response.data.message);
            }
>>>>>>> eadebdca9d88ca6c8fdaff106dfa8919aff0d39b
        }
      });
  };

  return (
    <div>
      <button onClick={deleteTrack}>DeleteTrack</button>
    </div>
  );
};
export default DeleteTrack;
