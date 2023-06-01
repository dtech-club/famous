import { MyContext } from '../context/context.js';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Albums = () => {
    const { albums } = useContext(MyContext);
    
    return (
        <div
            className="albums"
            class="flex justify-between m-20"
            
        >
            {albums.map((album) => {
                return (
                    <div key={album._id} className="small-albums" >
                        <Link to={`/albums/${album._id}`} state={album}>
                            <h3 class = "py-10">{album.artistName}</h3>
                            <img src={album.albumImage} alt="" class = "object-contain"/>
                            <p class = "py-10">{album.albumName}</p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};
export default Albums;
