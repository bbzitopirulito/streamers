import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navmenu from '../../../components/Navmenu';
import SettingsNav from '../../../components/SettingsNav';
import SettingsPainel from '../../../components/SettingsPainel';

import './styles.css';
import localStorageUser from '../../../auth/localStorageUser/index';

export default function About({ history }) {

    useEffect(() => {
        localStorageUser.checkLocalStorageUser(history);
    }, []);

    return (
        <>
            <div className="aboutwrapper">
                <Navmenu /> 
                <div className="painel">
                    <div className="paineloptions">
                        <SettingsNav />
                    </div>
                    <div className="painelscreen">
                        <SettingsPainel title={"About"}>                            
                        </SettingsPainel>
                        <div className="preferencestext">
                            <p>Streamers is a platform where people can rate streamers and 
                            comment about their stream so that they will be able to improve their performances.</p>
                            <p>You can find the source code <a href="https://github.com/bbzitopirulito/streamers">here</a>.</p>
                        </div>
                    </div>
                </div>                           
            </div>
    </>
    );
}