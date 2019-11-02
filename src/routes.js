import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignUp from './pages/SignUp';
import Feed from './pages/Feed';
import Preferences from './pages/Preferences';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SignUp} />
                <Route path="/feed" component={Feed} />
                <Route path="/preferences" component={Preferences} />
            </Switch>
        </BrowserRouter>
    );
}