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
    const [friends, setFriends] = useState([]);
    const user_id = useRef();          

    useEffect(() => {
        localStorageUser.checkLocalStorageUser(history);
        localStorage.removeItem('searchUser');
        user_id.current = localStorage.getItem('user');        
        async function getUser() {
            const response = await api.get('/userbyid', {
                headers: { user_id: user_id.current }
            });                        
            setProfilepic(response.data.profilepic_url);
            setUsername(response.data.username);
        }
        
        async function getFriends() {
            const response = await api.get('/friends', {
                headers: { user_id: user_id.current }
            });                                                
            setFriends(response.data)                       
        }

        getUser();
        getFriends();   
    }, []);    
        
    async function searchUser(friendsUsername) {
        const response = await api.get('./username', {
            headers: { username: friendsUsername }
        });
        
        localStorage.setItem('searchUser', response.data._id);
        history.push('./user');
    }
    
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
                                </div>
                            </div>                            
                        </div>
                    </div>
                    <div className="friends">
                        <ul className="friendsList">
                        {friends.map(friend => (
                            <li key={friend._id} onClick={() => searchUser(friend.username)}>
                                <img src={(friend.profilepic_url.indexOf("undefined") === -1 ? friend.profilepic_url : default_user_image)} alt="friend pic" />                                           
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="timeline">

                    </div>
                </div>
            </div>
        </>
    );
}