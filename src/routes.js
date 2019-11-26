import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Login from './components/Login'

function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
    )
}

export default Routes;

