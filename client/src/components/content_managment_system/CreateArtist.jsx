import axios from 'axios';
import React, { useState } from 'react';

export default function CreateArtist() {
    const [image, setImage] = useState('');
    const [editedImage, setEditedImage] = useState(null);
    const [err, setErr] = useState({
        artistName: '',
        artistImage: '',
        description: '',
    });
    const CreateArtist = (e) => {
        e.preventDefault();
        const artist = {
            artistName: e.target.artistName.value,
            artistImage: e.target.artistImage.value,
            city: e.target.city.value,
            state: e.target.state.value,
            biography: e.target.biography.value,
            genres: e.target.genres.value,
            albums: e.target.albums.value,
        };
        axios
            .post('/artists', JSON.stringify(artist), {
                headers: { 'Content-Type': 'application/json' },
            })
            .then((response) => {
                if (response.data.success) {
                    // navigate('/album');
                } else {
                    console.log(response.data.message);
                    setErr(...err, ...response.data.message[0]);
                }
            });
    };

    function handleApi() {
        const formData = new FormData();
        formData.append('image', editedImage || image);
        axios.post('url', formData).then((res) => console.log(res));
    }

    function handleEdit() {
        setEditedImage(editedImage);
    }
    return (
        // create a form using tailwind css
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/3">
                <h1 className="text-3xl font-bold mb-5">Create Artist</h1>
                <form onSubmit={CreateArtist}>
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
                            htmlFor="artistImage"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Artist Image
                        </label>
                        <input
                            type="file "
                            name="artistImage"
                            id="artistImage"
                            placeholder="Enter artist image"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <button onClick={handleEdit}>Edit photo</button>
                        <button onClick={handleApi}>Upload photo</button>
                        {err.artistImage && (
                            <p className="text-red-500 text-xs italic">
                                {err.artistImage}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="city"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            City
                        </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder="Enter city"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {err.city && (
                            <p className="text-red-500 text-xs italic">
                                {err.city}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="state"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            State
                        </label>
                        <input
                            type="text"
                            name="state"
                            id="state"
                            placeholder="Enter state"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {err.state && (
                            <p className="text-red-500 text-xs italic">
                                {err.state}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="biography"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Biography
                        </label>
                        <input
                            type="text"
                            name="biography"
                            id="biography"
                            placeholder="Enter biography"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {err.biography && (
                            <p className="text-red-500 text-xs italic">
                                {err.biography}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="genres"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Genres
                        </label>
                        <input
                            type="text"
                            name="genres"
                            id="genres"
                            placeholder="Enter genres"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {err.genres && (
                            <p className="text-red-500 text-xs italic">
                                {err.genres}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Create Artist
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
