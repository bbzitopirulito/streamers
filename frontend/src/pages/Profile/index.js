import React, { useState, useEffect, useRef } from 'react';

import Navmenu from '../../components/Navmenu';

import localStorageUser from '../../auth/localStorageUser';
import api from '../../services/api';

import default_user_wallpaper from '../../assets/default_user_wallpaper.jpg';

import './styles.css';

export default function Profile({ history }) {
    const [profilepic, setProfilepic] = useState("");
    const [username, setUsername] = useState("");
    const user_id = useRef();

    useEffect(() => {
        localStorageUser.checkLocalStorageUser(history);
        user_id.current = localStorage.getItem('user');
        async function getUser() {
            const response = await api.get('/userbyid', {
                headers: { user_id: user_id.current }
            });            
            setProfilepic(response.data.profilepic_url);
            setUsername(response.data.username);
        }
        getUser();
    }, []);

    return (
        <>
            <div className="profilewrapper">
                <Navmenu profilepicsrc={profilepic} />            
                <div className="container">
                    <div className="profile">
                        <div className="wallpaper" style={{backgroundImage: `url(${default_user_wallpaper})`}}>
                            <div className="profilepic">
                                <div className="profilepicimg">
                                    <header style={{backgroundImage: `url(${profilepic})`}} />
                                    <h1>{username}</h1>
                                </div>
                            </div>                            
                        </div>
                    </div>
                    <div className="friends">

                    </div>
                    <div className="timeline">

                    </div>
                </div>
            </div>
        </>
    );
}