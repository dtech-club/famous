import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../context/context';

const ArtistInformationSidebar = ({ artist }) => {
    console.log(artist, 'artist in sidebar');

    return (
        <div className="p-4 bg-black-100 flex flex-col">
            <div>
                <Link to={`/artists/${artist?._id}`}>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">
                            {artist?.artistName}
                        </h3>
                        <img
                            src={artist?.artistImage}
                            alt="artistimage"
                            className="w-1/2 rounded-full"
                        />
                        {/* <p className="text-white-600">{artist?.city}</p> */}
                    </div>
                </Link>
            </div>
            <div>
                <h3>Discography</h3>
                <ul className="flex flex-col list-none ml-0 pl-0">
                    <li className="font-bold mb-2 ml-0 pl-0">
                        {artist?.albums?.map((album) => {
                            return (
                                <div key={album._id} className="my-5">
                                    <Link to={`/albums/${album._id}`} className=''>
                                        <li className="ml-0">
                                            <img
                                                src={album.albumImage}
                                                alt={album.title}
                                                className="w-1/2 rounded"
                                            />
                                            <p>{album.title}</p>
                                        </li>
                                    </Link>
                                </div>
                            );
                        })}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ArtistInformationSidebar;
