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

  return (
    <>
      <button onClick={deleteArtist}>DeleteArtist</button>
    </>
  );
};

export default DeleteArtist;
