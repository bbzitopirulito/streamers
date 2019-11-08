import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Styled/Nav';

import searchicon from '../../assets/search_icon.png';
import liveIcon from '../../assets/live_icon.png';

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

const Navmenu = () => (
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
    </Nav>
);

export default Navmenu; 