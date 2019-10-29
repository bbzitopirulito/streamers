import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignUp from './pages/SignUp/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={SignUp} />
            </Switch>
        </BrowserRouter>
    );
}