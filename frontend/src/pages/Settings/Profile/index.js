import React, { useState, useEffect, useRef, useMemo } from 'react';

import Navmenu from '../../../components/Navmenu';
import SettingsNav from '../../../components/SettingsNav';
import SettingsPainel from '../../../components/SettingsPainel';

import camera from '../../../assets/camera.svg';

import './styles.css';

import localStorageUser from '../../../auth/localStorageUser/index';
import api from '../../../services/api';

export default function Profile({ history }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [platform, setPlatform] = useState(""); 
    const [profilepic, setProfilepic] = useState(null);
    const [userpic, setUserpic] = useState("");
    const user_id = useRef();

    //search about svg, redux and next.js in order

    useEffect(() => {
        localStorageUser.checkLocalStorageUser(history);
        user_id.current = localStorage.getItem('user');        
        async function setUserVariables() {
            const rawUser = await api.get('./userbyid', {
                headers: { user_id: user_id.current }
            });
            const user = rawUser.data;
            setUserpic(user.profilepic_url)          
            setUsername(user.username);
            setPassword(user.password);
            setPlatform(user.platform);
        }
        setUserVariables();
    }, []);

    const preview = useMemo(() =>{
        return profilepic ? URL.createObjectURL(profilepic) : null;
    },[profilepic]);

    async function handleSubmit(event) {
        event.preventDefault();                

        const data = new FormData();
        data.append('profilepic', profilepic);
        data.append('username', username);
        data.append('password', password);
        data.append('platform', platform)

        const response = await api.put('./updateuser', data, {
            headers: { user_id: user_id.current }
        });
        // I'll change this verification 
        if(response.data === 'Username or password already used by another user.') {
            alert(response.data);
            window.location.reload();
        }        

        window.location.reload();        
    }

    async function deleteAccount() {
        console.log(user_id.current);
        const response = await api.delete('./deleteuser', {
            headers: {user_id: user_id.current}
        });
        alert(response.data); 
        console.log(response.data);
                
        localStorage.removeItem('user');

        window.location.reload();
    }

    return (
        <>
            <div className="profilesettingswrapper">
                <Navmenu profilepicsrc={userpic} /> 
                <div className="painel">
                    <div className="paineloptions">
                        <SettingsNav />
                    </div>
                    <div className="painelscreen">
                        <SettingsPainel title={"Profile"} /> 
                        <div className="form">
                            <form onSubmit={handleSubmit} encType="multipart/form-data">                                        
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
                                <label id="profilepiclabel">Profile image</label>
                                <label 
                                    id="profilepic"
                                    style={{backgroundImage: `url(${preview})`}}
                                    className={profilepic ? 'has-profilepic' : ''}                                    
                                >
                                    <input name="profilepic" type="file" onChange={event => setProfilepic(event.target.files[0])} />
                                    <img src={camera} alt="Select img"/>
                                </label>               
                            </div>      
                        </div>  

                        <SettingsPainel title={"Delete account"} color={"#cb2431"} />                      
                        <div className="deleteaccount">
                            <p className="deletetext">I heard a story from the friend of my friend's friend that after a friend of his pressed this button,<br></br> 
                            he started to suffer from a disease called "highPingInGame", so he could never play online again...</p>
                            <button className="profilebtn deletebtn" onClick={() => deleteAccount()} type="submit">Delete profile</button>  
                        </div>
                    </div>
                </div>           
                
            </div>
        </>
    )
}