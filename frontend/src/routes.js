import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logon from './pages/logon';
import Register from './pages/register';
import Profile from './pages/profile';
import NewIncident from './pages/new_incidents';


export default function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incident/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}