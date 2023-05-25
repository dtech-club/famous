import { useEffect, useState } from 'react';
import { MyContext } from './context.js';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { axiosWithToken } from '../main.jsx';

export default function Container({ children }) {
    const [user, setUser] = useState(null);
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [singleArtist, setSingleArtist] = useState({});
    const [artistIdState, setArtistIdState] = useState('');

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

    useEffect(() => {
        axios
            .get(`http://localhost:4000/artists/${artistIdState}`)
            .then((response) => {
                console.log(response.data);
                if (response.data.success) {
                    console.log('response.data.data', response.data.data);
                    console.log(' 1 singleArtist', singleArtist)
                    setSingleArtist({data: 'idiot'})
                    console.log(' 2 updated singleArtist', singleArtist)                    
                    setSingleArtist(response.data.data);
                    console.log('single artist', singleArtist);
                    //console.log('singleArtist', singleArtist);
                } else {
                    toast.error(response.data.data);
                }
            });
    }, [artistIdState]);

    return (
        <MyContext.Provider
            value={{
                user,
                setUser,
                artists,
                setArtists,
                albums,
                setAlbums,
                singleArtist,
                setSingleArtist,
                artistIdState,
                setArtistIdState,
            }}
        >
            <Toaster />
            {children}
        </MyContext.Provider>
    );
}
