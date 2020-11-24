import React from 'react'
import classes from './Layout.module.scss'
import { profile,logo } from './../../assets/images/images'
import Navigation from '../../components/Navigation/Navigation'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import { Link } from 'react-router-dom'

function Layout(props) {
    return (
        <div className={classes.layout}>
            <div className={classes.layout__left}>
                {/* User Profile */}
                <Link to='/profile' className={classes.userProfile}>
                    <img src={profile} alt=""/>
                    <span>Christine458</span>
                </Link>

                {/* Navigation */}
                <Navigation />
                {/* News letter */}

                <form className={classes.newsletter}>
                    <h4 className={classes.newsletter__heading}>Subscribe for newsletter</h4>
                    <Input placeholder={'Enter your email address'} type='email' />
                    <Button 
                        name="Subscribe"
                        style={{background: 'coral',padding: "1rem 2rem",color: 'white'}} />
                </form>
                {/* Logo */}

                {/* <img src={logo} className={classes.logo} alt=""/> */}
            </div>
            <div className={classes.layout__right}>
                {props.children}
                
            </div>
        </div>
    )
}

export default Layout
