import React,{ useState } from 'react'
import classes from './Navigation.module.scss'
import { NavLink } from 'react-router-dom'
import DisplaySvg from './../UI/DisplaySvg/DisplaySvg'

function Navigation() {
    const [activeLink,setActiveLink] = useState('Home');

    const getActiveLink = link => {
        setActiveLink(link)
    }
    return (
        <div className={classes.navigation}>
            <NavigationItem to='/' icon={'home'} name={'Home'} />
            <NavigationItem to='/travel' icon={'around'} name={'Travel'} />
            <NavigationItem to='/fashion' icon={'fashion'} name={'Fashion'} />
            <NavigationItem to='/contact' icon={'call'} name={'Contact'} />
            <NavigationItem to='/accounts/login' icon={'login'} name={'Login'} />
        </div>
    )
}


function NavigationItem(props) {

    
    return (<NavLink 
                to={props.to} 
                 exact
                
                activeClassName={classes.active} >
                    <DisplaySvg icon={props.icon} />
                    <span>{props.name}</span>
                </NavLink>)
}

export default Navigation
