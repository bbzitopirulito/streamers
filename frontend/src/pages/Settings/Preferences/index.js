import React, { useState } from 'react';

import Navmenu from '../../../components/Navmenu';
import SettingsNav from '../../../components/SettingsNav';
import SettingsPainel from '../../../components/SettingsPainel';

import './styles.css';

export default function Preferences() {
    const [colorTheme, setColorTheme] = useState('white');
    const [accountPrivacy, setAccountPrivacy] = useState('public');

    async function handleSubmit() {

    }

    return (
        <>
            <div className="preferenceswrapper">
                <Navmenu /> 
                <div className="painel">
                    <div className="paineloptions">
                        <SettingsNav />
                    </div>
                    <div className="painelscreen">
                        <SettingsPainel title={"Preferences"} />
                        <div className="form">
                            <form onSubmit={handleSubmit}>                                        
                                <label htmlFor="colorTheme">Color theme</label> 
                                <select value={colorTheme} id="colorTheme" onChange={event => setColorTheme(event.target.value)}>
                                    <option value="white">White</option>                    
                                    <option value="dark">Dark</option>                                      
                                </select>                                
                                <label htmlFor="accountPrivacy">Account privacy</label> 
                                <select value={accountPrivacy} id="accountPrivacy" onChange={event => setAccountPrivacy(event.target.value)}>
                                    <option value="public">Public</option>                    
                                    <option value="private">Private</option>                                      
                                </select>                                
                                <button className="profilebtn" type="submit">Set preferences</button>
                            </form>  
                        </div>                   
                    </div>
                </div>           
                
            </div>
        </>
    );
}