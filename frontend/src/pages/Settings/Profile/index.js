import React, { useState, useEffect, useRef } from 'react';

import Navmenu from '../../../components/Navmenu';
import SettingsNav from '../../../components/SettingsNav';
import SettingsPainel from '../../../components/SettingsPainel';

import default_user_image from '../../../assets/default_user_image.jpg';

import './styles.css';
import localStorageUser from '../../../auth/localStorageUser/index';
import api from '../../../services/api';

export default function Profile({ history }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [platform, setPlatform] = useState("");    
    const [passwordConfirm, setPasswordConfirm] = useState("");
    let differentPassword = false;        
    const user_id = useRef();

    //search about svg, redux and next.js in order

    useEffect(() => {
        localStorageUser.checkLocalStorageUser(history);
        user_id.current = localStorage.getItem('user');        
        async function setUserVariables() {
            const rawUser = await api.get('./userbyid', {
                headers: { user_id: user_id.current }
            })
            const user = rawUser.data;
            setUsername(user.username);
            setPassword(user.password);
            setPlatform(user.platform);
        }
        setUserVariables();
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();                

        const response = await api.put('./updateuser', {
             user_id: user_id.current , username, password, platform 
        });
        // I'll change this verification 
        if(response.data === 'Username or password already used by another user.') {
            alert(response.data);
            window.location.reload();
        }        

        window.location.reload();        
    }

    function comparePasswords(confirmPassword) {
        if(confirmPassword !== password) {
            differentPassword = true;
        } else {
            differentPassword = false;
        }
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
                                    value={username} 
                                    onChange={event => setUsername(event.target.value)} 
                                />
                                <label htmlFor="password">Password</label> 
                                <input 
                                    type="password" 
                                    id="password"                                 
                                    value={password}  
                                    onChange={event => setPassword(event.target.value)}                         
                                />
                                <label htmlFor="confirmpassword">Confirm password</label> 
                                <input 
                                    type="password" 
                                    id="confirmpassword"                                 
                                    value={passwordConfirm}
                                    onChange={event => setPasswordConfirm(event.target.value)}
                                    onPointerOut={() => comparePasswords(passwordConfirm)}                  
                                />                                
                                {/* <div className="differentpasswords">
                                    <p>Different passwords</p>
                                </div>                                 */}
                                <label htmlFor="platform">Platform</label> 
                                <select value={platform} id="platform" onChange={event => setPlatform(event.target.value)}>
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