import React from 'react';
import Navmenu from '../../../components/Navmenu';
import SettingsNav from '../../../components/SettingsNav';

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

                    </div>
                </div>           
                
            </div>
        </>
    );
}