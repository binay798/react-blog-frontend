import React from 'react'
import Layout from './hoc/Layout/Layout'
import Homepage from './containers/Homepage/Homepage'
import { Route, Switch } from 'react-router';
import Auth from './containers/Auth/Auth';
import Profile from './containers/Profile/Profile';
import Contact from './containers/Contact/Contact';
import SelectedCategoryBlogs from './containers/SelectedCategoryBlogs/SelectedCategoryBlogs'
import CreateBlog from './containers/CreateBlog/CreateBlog';
import SingleBlog from './containers/SingleBlog/SingleBlog';
import EditProfile from './components/EditProfile/EditProfile'


function app() {
    return (
        <Layout>
            <Switch>
                <Route path='/posts/:id' component={SingleBlog} />
                <Route path='/createBlog' component={CreateBlog} />   
                <Route path='/contact' component={Contact} />
                <Route path='/profile/edit' component={EditProfile} />
                <Route path='/profile' component={Profile} />
                <Route path='/accounts' component={Auth} />
                <Route path='/categories/:category' component={SelectedCategoryBlogs} />
                <Route path='/' component={Homepage} />
            </Switch>
            

        </Layout>
    )
}

export default app
