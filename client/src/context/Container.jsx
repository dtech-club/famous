import { useEffect, useState } from 'react';
import { MyContext } from './context.js';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { axiosWithToken } from '../main.jsx';

export default function Container({ children }) {
    const [user, setUser] = useState(null);

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
    }, []);

    return (
        <MyContext.Provider value={{ user, setUser }}>
            <Toaster />
            {children}
        </MyContext.Provider>
    );
}
