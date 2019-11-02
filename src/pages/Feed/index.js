import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navmenu from '../../components/Navmenu';

import './styles.css';

export default function Feed() {
    return (
        <>                        
            <div className='feedwrapper'>
                <Navmenu/>      
            </div>
            
        </>
    );
}

//menu buttons: home, log out, preferences