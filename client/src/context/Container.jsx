import { useEffect, useState } from 'react';
import { MyContext } from './context.js';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { axiosWithToken } from '../main.jsx';

export default function Container({ children }) {
    const [user, setUser] = useState(null);
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            axiosWithToken
                .get('/users/refreshpage', {
                    headers: { token: localStorage.getItem('token') },
                })
                .then((response) => {
                    if (response.data.success) {
                        setUser(response.data.user);
                    } else {
                        toast.error(res.data.data);
                    }
                });
        }
        axios.get('http://localhost:4000/artists').then((response) => {
            if (response.data.success) {
                console.log(response.data.data);
                setArtists(response.data.data);
            }
        });
        axios.get('http://localhost:4000/music/albums').then((response) => {
            if (response.data.success) {
                setAlbums(response.data.data);
            }
        });
    }, []);

    return (
        <MyContext.Provider
            value={{ user, setUser, artists, setArtists, albums, setAlbums }}
        >
            <Toaster />
            {children}
        </MyContext.Provider>
    );
}
