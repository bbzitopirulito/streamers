import React, { useState } from 'react';

import Navmenu from '../../../components/Navmenu';
import SettingsNav from '../../../components/SettingsNav';
import SettingsPainel from '../../../components/SettingsPainel';

import default_user_image from '../../../assets/default_user_image.jpg';

import './styles.css';

export default function Profile() {
    const [newusername, setNewUsername] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [newplatform, setNewPlatform] = useState("");

    //search about svg, redux and next.js in order

    async function handleSubmit(event) {
        event.preventDefault();
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
                        <div className="form">
                            <form onSubmit={handleSubmit}>                                        
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
                                <p><strong>WARNING!</strong> You will only be able to change it again in 6 months.</p>
                                <button className="profilebtn" type="submit">Update profile</button>
                            </form>  
                            <div className="profileimage">
                                <label htmlFor="profileimage">Profile image</label>
                                <img id="profileimage" src={default_user_image} width={200} />
                            </div>                     
                        </div>  

                        <SettingsPainel title={"Delete account"} color={"#cb2431"} />                      
                        <div className="deleteaccount">
                            <p className="deletetext">I heard a story from the friend of my friend's friend that after a friend of his pressed this button,<br></br> 
                            he started to suffer from a disease called "highPingInGame", so he could never play online again...</p>
                            <button className="profilebtn deletebtn" type="submit">Delete profile</button>  
                        </div>
                    </div>
                </div>           
                
            </div>
        </>
    )
}