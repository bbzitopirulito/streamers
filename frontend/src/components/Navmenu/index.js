import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Styled/Nav';

import searchicon from '../../assets/search_icon.png';
import liveIcon from '../../assets/live_icon.png';

import default_user_image from '../../assets/default_user_image.jpg';

import './styles.css';
import api from '../../services/api';

let searchUsername = '';

async function deleteLocalUserId() {    
    localStorage.removeItem('user');    
}

async function searchUser() {
    console.log(searchUsername);
    const response = await api.get('./username', {
        headers: { username: searchUsername }
    });

    console.log(response.data);
}

const Navmenu = (props) => (
    <Nav className="menu">                     
        <div className="liveicon">
            <img src={liveIcon}  />                               
        </div>

        <div className="searchmenu">
            <input type="text" name="searchmenu" onChange={(event) => searchUsername = event.target.value} id="searchmenu"/>
        </div>
        <div className="menuitem searchicon">
            <button onClick={() => searchUser()}><img src={searchicon} width={20} alt="search icon" /></button>
        </div>
        <div className="menuitem">
            <Link to="/feed">Home</Link>
        </div>           
        <div className="menuitem">
            <Link to="/login" onClick={(event) => deleteLocalUserId()}>Log out</Link>
        </div>
        <div className="menuitem">
            <Link to="/settings/preferences">Preferences</Link>
        </div>
        
        <div className="menuitem profilepic">
            <Link to="/profile">
                {props.profilepicsrc.indexOf("undefined") === -1 ? 
                    <header style={{backgroundImage: `url(${props.profilepicsrc})`}} />
                :
                    <header style={{backgroundImage: `url(${default_user_image})`}} />
                }
            </Link>
        </div>
        
    </Nav>
);

export default Navmenu; 