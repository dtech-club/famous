import axios from 'axios';

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

    return (
        <div>
            <button onClick={deleteAlbum}>DeleteAlbum</button>
        </div>
    );
};
export default DeleteAlbum;
