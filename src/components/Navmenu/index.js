import React from 'react';
import Nav from '../Nav';

import { Link } from 'react-router-dom';

import liveIcon from '../../assets/live_icon.png';

import './styles.css';

const Navmenu = () => (
    <Nav className="menu">                     
        <div className="liveicon">
            <img src={liveIcon}  />                               
        </div>

        <div className="searchmenu">
            <input type="text" name="searchmenu" id="searchmenu"/>
        </div>
        <div className="menuitem">
            <Link to="/feed">Home</Link>
        </div>           
        <div className="menuitem">
            <Link to="/">Log out</Link>
        </div>
        <div className="menuitem">
            <Link to="/preferences">Preferences</Link>
        </div>
            
        
    </Nav>
);

export default Navmenu; 