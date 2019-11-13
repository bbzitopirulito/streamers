import React, { useState, useEffect } from 'react';

import Navmenu from '../../components/Navmenu';
import api from '../../services/api';
import localStorageUser from '../../auth/localStorageUser/index';

import './styles.css';
import FeedContainer from '../../components/Styled/FeedContainer';

export default function Feed({ history }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [themeColor, setThemeColor] = useState("");
    const [profilepic, setProfilepic] = useState("");

    useEffect(() => {
        localStorageUser.checkLocalStorageUser(history);
        async function loadNames() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/userbyid', {
                headers: { user_id } 
            });            
            setProfilepic(response.data.profilepic_url);
            setThemeColor((response.data.theme === "dark" ? "#586069" : "#FFF"));                        
            setUsername(response.data.username);
        }
        loadNames();
    }, []);

    return (
        <>                        
            <FeedContainer className="feedwrapper" color={themeColor}>
                <div className='feed'>
                    <Navmenu profilepicsrc={profilepic} />      
                    <div className="welcomeback">
                        <h1>{username}</h1>                             
                    </div>
                </div>
            </FeedContainer>                
            
        </>
    );
}

//menu buttons: home, log out, preferences