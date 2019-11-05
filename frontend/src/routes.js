import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/Settings/About';
import Profile from './pages/Settings/Profile';
import Preferences from './pages/Settings/Preferences';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/feed" component={Feed} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={SignUp} />
                <Route path="/settings/about" component={About} />
                <Route path="/settings/profile" component={Profile} />
                <Route path="/settings/preferences" component={Preferences} />
            </Switch>
        </BrowserRouter>
    );
}