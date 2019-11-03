import React from 'react';

import Navmenu from '../../../components/Navmenu';
import SettingsNav from '../../../components/SettingsNav';
import SettingsPainel from '../../../components/SettingsPainel';

import './styles.css';

export default function Preferences() {
    return (
        <>
            <div className="preferenceswrapper">
                <Navmenu /> 
                <div className="painel">
                    <div className="paineloptions">
                        <SettingsNav />
                    </div>
                    <div className="painelscreen">
                        <SettingsPainel title={"Preferences"}>

                        </SettingsPainel>
                    </div>
                </div>           
                
            </div>
        </>
    );
}