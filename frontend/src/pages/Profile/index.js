import React, { useState, useEffect, useRef } from 'react';

import Navmenu from '../../components/Navmenu';

import localStorageUser from '../../auth/localStorageUser';
import api from '../../services/api';

import default_user_wallpaper from '../../assets/default_user_wallpaper.jpg';
import default_user_image from '../../assets/default_user_image.jpg';

import './styles.css';

export default function Profile({ history }) {
    const [profilepic, setProfilepic] = useState("");
    const [username, setUsername] = useState("");
    const [friends, setFriends] = useState({});        
    const user_id = useRef();      

    let s ;

    useEffect(() => {
        localStorageUser.checkLocalStorageUser(history);
        localStorage.removeItem('searchUser');
        user_id.current = localStorage.getItem('user');
        async function getUser() {
            const response = await api.get('/userbyid', {
                headers: { user_id: user_id.current }
            });            
            s = response.data
            setProfilepic(response.data.profilepic_url);
            setUsername(response.data.username);
        }
        async function getFriends() {
            const response = await api.get('/friends', {
                headers: { user_id: user_id.current }
            });                           
            // console.log(response.data[0])            
            for (let i = 0; i < response.data.length; i++) {
                setFriends([
                     
                    response.data[i]
                ])
            }
            setFriends(response.data);
        }
        getUser();
        getFriends();                   
    }, []);

    // let { test } = friends[0];
        
    // console.log(test)            
    
    return (
        <>
            <div className="profilewrapper">
                <Navmenu profilepicsrc={profilepic} />            
                <div className="container">
                    <div className="profile">
                        <div className="wallpaper" style={{backgroundImage: `url(${default_user_wallpaper})`}}>
                            <div className="profilepic">
                                <div className="profilepicimg">
                                    <header style={{backgroundImage: `url(${(profilepic.indexOf("undefined") === -1 ? profilepic : default_user_image )})`}} />
                                    <h1>{username}</h1>  
                                    <h1>{friends.username}</h1>
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