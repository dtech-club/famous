import { useContext } from 'react';
import { MyContext } from '../context/context';
import { Link } from 'react-router-dom';

const Artists = () => {
    const { artists } = useContext(MyContext);

    return (
        <div
            className="artists"
            class="flex justify-between m-20"
            
        >
            {artists.map((artist) => {
                return (
                    <div key={artist._id} className="small-artists">
                        <Link to={`/artists/${artist._id}`} state={artist}>
                            <h3 class = "py-10">{artist.artistName}</h3>
                            <img src={artist.artistImage} alt="artistimage" class = "object-contain"/>
                            <p class = "py-10">{artist.city}</p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};
export default Artists;
