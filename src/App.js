import React from 'react'
import Layout from './hoc/Layout/Layout'
import Homepage from './containers/Homepage/Homepage'
import { Route, Switch } from 'react-router';
import Auth from './containers/Auth/Auth';
import Profile from './containers/Profile/Profile';
import Contact from './containers/Contact/Contact'

function app() {
    return (
        <Layout>
            <Switch>
                <Route path='/contact' component={Contact} />
                <Route path='/profile' component={Profile} />
                <Route path='/accounts' component={Auth} />
                <Route path='/' component={Homepage} />
            </Switch>
            

        </Layout>
    )
}

export default app
