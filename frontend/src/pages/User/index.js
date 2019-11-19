import React, { useState, useEffect, useRef } from 'react';

import Navmenu from '../../components/Navmenu';

import api from '../../services/api';

import default_user_wallpaper from '../../assets/default_user_wallpaper.jpg';
import default_user_image from '../../assets/default_user_image.jpg';

export default function User({ history }) {
    const [profilepic, setProfilepic] = useState('');
    const [loggedProfilePic, setLoggedProfilePic] = useState('');
    const [username, setUsername] = useState('');
    const user_id = useRef();

    useEffect(() => {      
        async function getLoggedUser() {
            const response = await api.get('/userbyid', {
                headers: { user_id: localStorage.getItem('user') }
            });
            setLoggedProfilePic(response.data.profilepic_url);
        }
        async function checkUser() {
            if(localStorage.getItem('searchUser') === null) {
                return history.push('/feed');
            }
            user_id.current = localStorage.getItem('searchUser');
            localStorage.removeItem('searchUser');                  
        }
        async function getUser() {
            const response = await api.get('/userbyid', {
                headers: { user_id: user_id.current }
            });

            setProfilepic(response.data.profilepic_url);
            setUsername(response.data.username);
        }
        getLoggedUser();
        checkUser();
        getUser();
    },[]);

    return(
        <>
            <div className="profilewrapper">
                <Navmenu profilepicsrc={loggedProfilePic} />            
                <div className="container">
                    <div className="profile">
                        <div className="wallpaper" style={{backgroundImage: `url(${default_user_wallpaper})`}}>
                            <div className="profilepic">
                                <div className="profilepicimg">
                                    <header style={{backgroundImage: `url(${(profilepic.indexOf("undefined") === -1 ? profilepic : default_user_image )})`}} />
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