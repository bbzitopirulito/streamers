import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import User from './pages/User';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import AboutSettings from './pages/Settings/About';
import ProfileSettings from './pages/Settings/Profile';
import PreferencesSettings from './pages/Settings/Preferences';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/feed" component={Feed} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={SignUp} />
                <Route path="/settings/about" component={AboutSettings} />
                <Route path="/settings/profile" component={ProfileSettings} />
                <Route path="/settings/preferences" component={PreferencesSettings} />
                <Route path="/profile" component={Profile} />
                <Route path="/user" component={User} />
            </Switch>
        </BrowserRouter>
    );
}