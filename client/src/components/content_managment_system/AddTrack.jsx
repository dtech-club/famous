import axios from 'axios';
import React, { useState } from 'react';

const AddTrack = ({ state }) => {
    const [err, setErr] = useState({
        trackName: '',
        trackNumber: '',
        trackLength: '',
        trackImage: '',
        trackFile: '',
    });
    const [artistName, setArtistName] = useState(state.artistName);

    const postTrack = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        axios
            .post(
                `http://localhost:4000/artists/${state.artistId}/album/${state._id}/track`,
                formData
            )
            .then((response) => {
                if (response.data.success) {
                    console.log(response.data.message);
                } else {
                    console.log(response.data.message);
                    setErr({ ...err, ...response.data.message[0] });
                }
            });
    };

    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="w-1/3">
                    <h1 className="text-3xl font-bold mb-5">Create Track</h1>
                    <form onSubmit={ModifyTrack}>
                        <div className="mb-4">
                            <label
                                htmlFor="artistId"
                                className="appearance-none"
                            >
                                ArtistId
                            </label>
                            <input
                                type="text"
                                name="artistId"
                                value={state.artistId}
                                id="artistId"
                                className="appearance-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="albumId"
                                className="appearance-none"
                            >
                                AlbumId
                            </label>
                            <input
                                type="text"
                                name="albumId"
                                value={state._id}
                                id="albumId"
                                className="appearance-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="trackName"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Track Name
                            </label>
                            <input
                                type="text"
                                name="trackName"
                                id="trackName"
                                placeholder="Enter track name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {err.trackName && (
                                <p className="text-red-500 text-xs italic">
                                    {err.trackName}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="artistName"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Artist Name
                            </label>
                            <input
                                type="text"
                                name="artistName"
                                value={artistName}
                                onChange={(e) => setArtistName(e.target.value)}
                                id="artistName"
                                placeholder="Enter artist name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {err.artistName && (
                                <p className="text-red-500 text-xs italic">
                                    {err.artistName}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="albumName"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Album Name
                            </label>
                            <input
                                type="text"
                                name="albumName"
                                value={state?.albumName}
                                id="albumName"
                                placeholder="Enter album name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {err.albumName && (
                                <p className="text-red-500 text-xs italic">
                                    {err.albumName}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="releaseDate"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Release Date
                            </label>
                            <input
                                type="text"
                                name="releaseDate"
                                value={state?.releaseDate}
                                id="releaseDate"
                                placeholder="Enter release date"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {err.releaseDate && (
                                <p className="text-red-500 text-xs italic">
                                    {err.releaseDate}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="genre"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Genre
                            </label>
                            <input
                                type="text"
                                name="genre"
                                value={state?.genre}
                                id="genre"
                                placeholder="Enter genre"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {err.genre && (
                                <p className="text-red-500 text-xs italic">
                                    {err.genre}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="trackFile"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Track File
                            </label>
                            <input
                                type="file"
                                name="trackFile"
                                id="trackFile"
                                placeholder="Enter track file"
                                // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {err.trackFile && (
                                <p className="text-red-500 text-xs italic">
                                    {err.trackFile}
                                </p>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Add Track
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default AddTrack;
