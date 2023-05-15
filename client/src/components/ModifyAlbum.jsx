import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateAlbum() {
    const navigate = useNavigate();
    const [err, setErr] = useState({ userName: '', email: '', password: '' });
    
        const ModifyAlbum = (e) =>  {
            const album = {
                albumName: e.target.albumName.value,
                artistName: e.target.artistName.value,
                releaseDate: e.target.releaseDate.value,
                genre: e.target.genre.value,
                albumImage: e.target.albumImage.value,
                tracks: e.target.tracks.value,
                description: e.target.description.value,
            };
            axios
                .patch('/albums', JSON.stringify(album), {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then((response) => {
                    if (response.data.success) {
                        navigate('/album');
                    } else {
                        console.log(response.data.message);
                        setErr(...err, ...response.data.message[0]);
                    }
                });
        };
        return (
            // create a form using tailwind css
            <div className="flex justify-center items-center h-screen">
                <div className="w-1/3">
                    <h1 className="text-3xl font-bold mb-5">Create Album</h1>
                    <form onSubmit={ModifyAlbum}>
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
                                htmlFor="artistName"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Artist Name
                            </label>
                            <input
                                type="text"
                                name="artistName"
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
                                htmlFor="releaseDate"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Release Date
                            </label>
                            <input
                                type="date"
                                name="releaseDate"
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
                                htmlFor="albumImage"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Album Image
                            </label>
                            <input
                                type="text"
                                name="albumImage"
                                id="albumImage"
                                placeholder="Enter album image"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {err.albumImage && (
                                <p className="text-red-500 text-xs italic">
                                    {err.albumImage}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="tracks"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Tracks
                            </label>
                            <input
                                type="text"
                                name="tracks"
                                id="tracks"
                                placeholder="Enter tracks"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {err.tracks && (
                                <p className="text-red-500 text-xs italic">
                                    {err.tracks}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Description
                            </label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Enter description"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {err.description && (
                                <p className="text-red-500 text-xs italic">
                                    {err.description}
                                </p>
                            )}
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Modify Album
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };