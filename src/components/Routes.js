import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import { state } from '../lib/state'
import { items } from '../lib/menu'
import Success from '../views/Success'
import Profile from '../views/Profile'
import Register from '../views/Register'
import Login from '../views/Login'


export default () => (
    <Switch>
        {items.map(item => (
            <Route key={item.key} exact={item.exact} path={item.to} component={item.component} />
        ))}
        <Route path="/register/success" component={Success} />
        <Route path="/profile" component={() => (<Profile user={state.user} />)} />   
        <Route path="/register" component={Register} />   
        <Route path="/login" component={Login} />    
         
         
    </Switch>
)

// <Route exact path="/" component={Home} />
// <Route path="/register" component={Register} />
// <Route path="/login" component={Login} />       