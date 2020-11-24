import React from 'react'
import classes from './Auth.module.scss';
import SignUp from './../../components/SignUp/SignUp'
import { Route, Switch } from 'react-router';
import Login from './../../components/Login/Login'
function Auth() {
    return (
        <div className={classes.auth}>
            <Switch>
                <Route path='/accounts/signup' component={SignUp} />
                <Route path='/accounts/login' component={Login} />

            </Switch>
            
        </div>
    )
}

export default Auth
