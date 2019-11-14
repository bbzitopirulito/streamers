import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Styled/Nav';

import searchicon from '../../assets/search_icon.png';
import liveIcon from '../../assets/live_icon.png';

import default_user_image from '../../assets/default_user_image.jpg';

import './styles.css';

let searchText = '';

async function setSearchText(newText) {
    searchText = newText;
}

async function search(text) {
    
}

async function deleteLocalUserId(event) {    
    localStorage.removeItem('user');    
}

const Navmenu = (props) => (
    <Nav className="menu">                     
        <div className="liveicon">
            <img src={liveIcon}  />                               
        </div>

        <div className="searchmenu">
            <input type="text" name="searchmenu" onChange={(event) => setSearchText(event.target.value)} id="searchmenu"/>
        </div>
        <div className="menuitem searchicon">
            <button><img src={searchicon} width={20} alt="" onClick={() => search(searchText)}/></button>
        </div>
        <div className="menuitem">
            <Link to="/feed">Home</Link>
        </div>           
        <div className="menuitem">
            <Link to="/login" onClick={(event) => deleteLocalUserId(event)}>Log out</Link>
        </div>
        <div className="menuitem">
            <Link to="/settings/preferences">Preferences</Link>
        </div>
        
        <div className="menuitem profilepic">
            <Link to="/profile">
                {props.profilepicsrc ? 
                    <header style={{backgroundImage: `url(${props.profilepicsrc})`}} />
                :
                    <header style={{backgroundImage: `url(${default_user_image})`}} />                    
                }
            </Link>
        </div>
        
    </Nav>
);

export default Navmenu; 