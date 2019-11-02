import React from 'react';
import { Link } from 'react-router-dom';

import NavSettings from '../Styled/SettingsNav';

import "./styles.css";

const SettingsNav = () => (
    <NavSettings>
        <div className="settingsmenuitem">
            <Link to="/settings/profile">Profile</Link>
        </div>
        <div className="settingsmenuitem">
            <Link to="/settings/preferences">Preferences</Link>
        </div>
    </NavSettings>
);

export default SettingsNav;