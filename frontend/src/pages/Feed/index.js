import React, { useState, useEffect, useRef } from 'react';

import Navmenu from '../../components/Navmenu';
import FeedContainer from '../../components/Styled/FeedContainer';

import api from '../../services/api';
import localStorageUser from '../../auth/localStorageUser/index';

import default_user_image from '../../assets/default_user_image.jpg'

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
                <div className='feedcontainer'>
                    <Navmenu profilepicsrc={profilepic} />      
                    <div className="feed">                            
                        <div className="postbox">
                            <div className="line1">
                                <div className="profileicon">                                
                                    <header style={{backgroundImage: `url(${(profilepic.indexOf("undefined") === -1 ? profilepic : default_user_image)})`}} />
                                </div>
                                <div className="text">
                                    <textarea name="posttext" placeholder="Put it out..." id="posttext"></textarea>
                                </div>
                            </div>
                            <div className="line2">
                                <div className="publiccheckbox">
                                    <input type="checkbox" name="privatepost" id="privatepost"/>
                                </div>
                                <div className="postbutton">
                                    <button className="">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FeedContainer>                
            
        </>
    );
}

//menu buttons: home, log out, preferences