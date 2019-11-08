import React, { useState, useEffect } from 'react';

import Navmenu from '../../components/Navmenu';
import api from '../../services/api';
import localStorageUser from '../../auth/localStorageUser/index';

import './styles.css';

export default function Feed({ history }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        localStorageUser.checkLocalStorageUser(history);
        async function loadNames() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/userbyid', {
                headers: { user_id } 
            });
                        
            setUsername(response.data.username);
        }
        loadNames();
    }, []);

    return (
        <>                        
            <div className='feedwrapper'>
                <Navmenu/>      
                <div className="feed">
                    <div className="welcomeback">
                        <h1>{username}</h1>
                    </div>
                </div>
            </div>
            
        </>
    );
}

//menu buttons: home, log out, preferences