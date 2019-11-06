import React, { useState, useEffect } from 'react';

import Navmenu from '../../components/Navmenu';
import api from '../../services/api';

import './styles.css';

export default function Feed() {
    const [name, setName] = useState("");

    useEffect(() => {
        async function loadNames() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/userbyid', {
                headers: { user_id } 
            });
            setName(response.data.username);
        }
        loadNames()
    }, []);

    return (
        <>                        
            <div className='feedwrapper'>
                <Navmenu/>      
                <div className="feed">
                    <h1>{name}</h1>
                </div>
            </div>
            
        </>
    );
}

//menu buttons: home, log out, preferences