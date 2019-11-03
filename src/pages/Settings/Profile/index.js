import React from 'react';

import Navmenu from '../../../components/Navmenu';
import SettingsNav from '../../../components/SettingsNav';
import SettingsPainel from '../../../components/SettingsPainel';

import './styles.css';

export default function Profile() {
    return (
        <>
            <div className="profilewrapper">
                <Navmenu /> 
                <div className="painel">
                    <div className="paineloptions">
                        <SettingsNav />
                    </div>
                    <div className="painelscreen">
                        <SettingsPainel title={"Profile"}>

                        </SettingsPainel>
                    </div>
                </div>           
                
            </div>
        </>
    )
}