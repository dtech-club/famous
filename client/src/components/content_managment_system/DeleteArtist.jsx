<<<<<<< HEAD
import axios from "axios";

const DeleteArtist = ({ artist }) => {
  const deleteArtist = (e) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:4000/artists/${artist._id}`)
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
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../../context/context.js';

const DeleteArtist = ({ artist }) => {
    const navigate = useNavigate();
    const { setArtists } = useContext(MyContext);
    const deleteArtist = (e) => {
        e.preventDefault();

        axios
            .delete(`http://localhost:4000/artists/${artist._id}`)
            .then((response) => {
                if (response.data.success) {
                    console.log(response.data.message);
                    setArtists(response.data.data);
                    navigate('/artists');
                } else {
                    console.log(response.data.message);
                }
            });
    };
>>>>>>> eadebdca9d88ca6c8fdaff106dfa8919aff0d39b

  return (
    <>
      <button onClick={deleteArtist}>DeleteArtist</button>
    </>
  );
};

export default DeleteArtist;
