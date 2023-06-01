import axios from "axios";

const DeleteTrack = ({ track }) => {
    const deleteTrack = (e) => {
        e.preventDefault();

        axios
        .delete(`http://localhost:4000/artists/${track.artistId}/album/${track.albumId}/track/${track._id}`)
        .then((response) => {
            if (response.data.success) {
                console.log(response.data.message);
            } else {
                console.log(response.data.message);
            }
        }
        );
    };

    return (
        <div>
            <button onClick={deleteTrack}>DeleteTrack</button>
        </div>
    );
};
export default DeleteTrack;
