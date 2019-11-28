import React, { useState, useEffect, useRef } from 'react';

import Navmenu from '../../components/Navmenu';
import FeedContainer from '../../components/Styled/FeedContainer';

import api from '../../services/api';
import localStorageUser from '../../auth/localStorageUser/index';

import './styles.css';

export default function Feed({ history }) {
    const [username, setUsername] = useState("");
    const [themeColor, setThemeColor] = useState("");
    const [profilepic, setProfilepic] = useState("");
    const user_id = useRef();

    useEffect(() => {
        localStorageUser.checkLocalStorageUser(history);
        user_id.current = localStorage.getItem('user');
        localStorage.removeItem('searchUser');
        async function getUser() {            
            const response = await api.get('/userbyid', {
                headers: { user_id: user_id.current } 
            });                     
            setProfilepic(response.data.profilepic_url);
            setThemeColor((response.data.theme === "dark" ? "#586069" : "#FFF"));                        
            setUsername(response.data.username);
        }
        getUser();
    }, []);

    return (
        <>                        
            <FeedContainer className="feedwrapper" color={themeColor}>
                <div className='feed'>
                    <Navmenu profilepicsrc={profilepic} />      
                    <div className="welcomeback">                            
                        <div className="postbox">
                            <div className="profileicon">
                                <img src={profilepic} alt="profile pic" width={20}/>
                            </div>
                        </div>
                    </div>
                </div>
            </FeedContainer>                
            
        </>
    );
}

//menu buttons: home, log out, preferences