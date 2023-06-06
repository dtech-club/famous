<<<<<<< HEAD
import axios from "axios";

const DeleteAlbum = ({ state }) => {
  const deleteAlbum = (e) => {
    e.preventDefault();

    axios
      .delete(
        `http://localhost:4000/artists/${state.artistId}/album/${state._id}`
      )
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.message);
        } else {
          console.log(response.data.message);
        }
      });
  };
=======
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {MyContext} from '../../context/context.js';

const DeleteAlbum = ({ album }) => {
    const { setAlbums } = useContext(MyContext);
    const navigate = useNavigate();
    const deleteAlbum = (e) => {
        e.preventDefault();

        axios
            .delete(
                `http://localhost:4000/artists/${album.artistId._id}/album/${album._id}`
            )
            .then((response) => {
                if (response.data.success) {
                    console.log(response.data.message);
                    setAlbums(response.data.data);
                    navigate(`/artists/${response.data.artistId}`);
                } else {
                    console.log(response.data.message);
                }
            });
    };
>>>>>>> eadebdca9d88ca6c8fdaff106dfa8919aff0d39b

  return (
    <div>
      <button onClick={deleteAlbum}>DeleteAlbum</button>
    </div>
  );
};
export default DeleteAlbum;
