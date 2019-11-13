import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navmenu from '../../../components/Navmenu';
import SettingsNav from '../../../components/SettingsNav';
import SettingsPainel from '../../../components/SettingsPainel';

import './styles.css';
import localStorageUser from '../../../auth/localStorageUser/index';
import api from '../../../services/api';

export default function About({ history }) {
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
            <div className="aboutwrapper">
                <Navmenu profilepicsrc={profilepic} /> 
                <div className="painel">
                    <div className="paineloptions">
                        <SettingsNav />
                    </div>
                    <div className="painelscreen">
                        <SettingsPainel title={"About"}>                            
                        </SettingsPainel>
                        <div className="preferencestext">
                            <p>Streamers is a platform where people can rate streamers and 
                            comment about their stream so that they will be able to improve their performances.</p>
                            <p>You can find the source code <a href="https://github.com/bbzitopirulito/streamers">here</a>.</p>
                        </div>
                    </div>
                </div>                           
            </div>
    </>
    );
}