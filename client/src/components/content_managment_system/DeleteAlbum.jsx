import axios from 'axios';
//import {useNavigate} from 'react-router-dom';

const DeleteAlbum = ({ album }) => {
    //const navigate = useNavigate();
    const deleteAlbum = (e) => {
        e.preventDefault();

        axios
            .delete(
                `http://localhost:4000/artists/${album.artistId}/album/${album._id}`
            )
            .then((response) => {
                if (response.data.success) {
                    console.log(response.data.message);
                    //navigate(`/artists/${state.artistId}`);
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
