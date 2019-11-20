import React, { useState, useEffect, useRef } from 'react';

import Navmenu from '../../components/Navmenu';

import api from '../../services/api';

import default_user_wallpaper from '../../assets/default_user_wallpaper.jpg';
import default_user_image from '../../assets/default_user_image.jpg';

import './styles.css';

export default function User({ history }) {
    const [profilepic, setProfilepic] = useState('');
    const [loggedProfilePic, setLoggedProfilePic] = useState('');
    const [username, setUsername] = useState('');
    const [addButton, setAddButton] = useState('Add friend');
    const [friends, setFriends] = useState(false);
    const user_id = useRef();
    const friendId = useRef();

    useEffect(() => {      
        async function checkUser() {
            if(localStorage.getItem('searchUser') === null) {
                return history.push('/feed');
            }
            friendId.current = localStorage.getItem('searchUser');                              
        }
        async function getLoggedUser() {
            user_id.current = localStorage.getItem('user');
            const response = await api.get('/userbyid', {
                headers: { user_id: user_id.current }
            });
            if(response.data.friends.includes(friendId.current)) {
                setFriends(true);
                setAddButton('Remove friend');
            } else {
                setFriends(false);
            }
            setLoggedProfilePic(response.data.profilepic_url);
        }
        async function getUser() {
            const response = await api.get('/userbyid', {
                headers: { user_id: friendId.current }
            });
            setProfilepic(response.data.profilepic_url);
            setUsername(response.data.username);
        }
        checkUser();
        getLoggedUser();
        getUser();
    },[]);

    async function addFriend() {            
        const response = await api.put('/updatefriends', {
            friends,
            friendId: friendId.current
        },{
            headers: { user_id: user_id.current }
        });        

        const check = await api.get('/userbyid', {
            headers: { user_id: user_id.current }
        })

        if(check.data.friends.includes(friendId.current)) {
            setFriends(true);
            setAddButton('Remove friend');
        } else {
            setFriends(false);
            setAddButton('Add friend');
        }                
    }

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
                            <div className="addbtn">
                                <button className={`btn ${friends ? `remove` : `add`}`}  onClick={() => addFriend()}>{addButton}</button>                                    
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