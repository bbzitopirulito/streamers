import React, { useState } from 'react';

import Navmenu from '../../../components/Navmenu';
import SettingsNav from '../../../components/SettingsNav';
import SettingsPainel from '../../../components/SettingsPainel';

import './styles.css';

export default function Profile() {
    const [newusername, setNewUsername] = "";
    const [newpassword, setNewPassword] = "";
    const [newplatform, setNewPlatform] = "";

    //search about redux and svg

    async function handleSubmit() {

    }

    return (
        <>
            <div className="profilewrapper">
                <Navmenu /> 
                <div className="painel">
                    <div className="paineloptions">
                        <SettingsNav />
                    </div>
                    <div className="painelscreen">
                        <SettingsPainel title={"Profile"} />                        
                        {/* <form onSubmit={handleSubmit}>                                        
                            <label htmlFor="username">Username</label> 
                            <input 
                                type="text" 
                                id="username"                                 
                                value={newusername} 
                                onChange={event => setNewUsername(event.target.value)} 
                            />
                            <label htmlFor="password">Password</label> 
                            <input 
                                type="password" 
                                id="password"                                 
                                value={newpassword} 
                                onChange={event => setNewPassword(event.target.value)}                         
                            />
                            <label htmlFor="platform">Platform</label> 
                            <select value={newplatform} id="platform" onChange={event => setNewPlatform(event.target.value)}>
                                <option value="twitch">Twitch</option>                    
                                <option value="mixer">Mixer</option>                    
                                <option value="hitbox">Hitbox</option>                    
                                <option value="facebook">Facebook</option>                    
                                <option value="youtube">Youtube</option>                    
                                <option value="nimo">Nimo</option>                    
                            </select>

                            <button className="btn" type="submit">Update profile</button>
                        </form>                         */}
                    </div>
                </div>           
                
            </div>
        </>
    )
}