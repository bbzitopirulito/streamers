import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignUp from './pages/SignUp';
import Feed from './pages/Feed';
import Profile from './pages/Settings/Profile';
import Preferences from './pages/Settings/Preferences';
import About from './pages/Settings/About';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SignUp} />
                <Route path="/feed" component={Feed} />
                <Route path="/settings/profile" component={Profile} />
                <Route path="/settings/preferences" component={Preferences} />
                <Route path="/settings/about" component={About} />
            </Switch>
        </BrowserRouter>
    );
}