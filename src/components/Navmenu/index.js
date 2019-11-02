import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Styled/Nav';
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
            <Link to="/settings/preferences">Preferences</Link>
        </div>
            
        
    </Nav>
);

export default Navmenu; 