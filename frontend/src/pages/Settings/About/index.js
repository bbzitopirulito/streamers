import React, { useState, useEffect, useRef } from 'react';

import Navmenu from '../../../components/Navmenu';
import SettingsNav from '../../../components/SettingsNav';
import SettingsPainel from '../../../components/SettingsPainel';

import './styles.css';
import localStorageUser from '../../../auth/localStorageUser/index';
import api from '../../../services/api';

export default function About({ history }) {
    const [profilepic, setProfilepic] = useState("");
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
            
        }
        getUser();
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