import React, { useState, useEffect, useRef } from 'react';

import Navmenu from '../../../components/Navmenu';
import SettingsNav from '../../../components/SettingsNav';
import SettingsPainel from '../../../components/SettingsPainel';

import './styles.css';
import localStorageUser from '../../../auth/localStorageUser/index';
import api from '../../../services/api';

export default function Preferences({ history }) {
    const [theme, setTheme] = useState('light');
    const [privacy, setPrivacy] = useState('public');
    const [profilepic, setProfilepic] = useState("");
    const user_id = useRef();

    useEffect(() => {
        localStorageUser.checkLocalStorageUser(history);
        localStorage.removeItem('searchUser');
        user_id.current = localStorage.getItem('user');
        async function getUser() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/userbyid', {
                headers: { user_id } 
            });            
            setPrivacy((response.data.private ? 'private' : 'public'));            
            setTheme(response.data.theme);
            setProfilepic(response.data.profilepic_url);                                             
        }
        getUser();
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        await api.put('./setpreferences', {
            user_id: user_id.current,
            theme,
            private: (privacy === 'public' ? false : true)
        });
        window.location.reload()
    }

    return (
        <>
            <div className="preferenceswrapper">
                <Navmenu profilepicsrc={profilepic} /> 
                <div className="painel">
                    <div className="paineloptions">
                        <SettingsNav />
                    </div>
                    <div className="painelscreen">
                        <SettingsPainel title={"Preferences"} />
                        <div className="form">
                            <form onSubmit={handleSubmit}>                                        
                                <label htmlFor="colorTheme">Color theme</label> 
                                <select value={theme} id="colorTheme" onChange={event => setTheme(event.target.value)}>
                                    <option value="light">White</option>                    
                                    <option value="dark">Dark</option>                                      
                                </select>                                
                                <label htmlFor="accountPrivacy">Account privacy</label> 
                                <select value={privacy} id="accountPrivacy" onChange={event => setPrivacy(event.target.value)}>
                                    <option value="public">Public</option>                    
                                    <option value="private">Private</option>                                      
                                </select>                                
                                <button className="profilebtn" type="submit">Set preferences</button>
                            </form>  
                        </div>                   
                    </div>
                </div>           
                
            </div>
        </>
    );
}