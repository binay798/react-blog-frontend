import React,{ useState,useContext } from 'react'
import classes from './Navigation.module.scss'
import { NavLink } from 'react-router-dom'
import DisplaySvg from './../UI/DisplaySvg/DisplaySvg';
import { GlobalContext } from './../../store/store'
import { withRouter } from 'react-router-dom'
function Navigation(props) {
    const [globalState,dispatch] = useContext(GlobalContext)
    const [activeLink,setActiveLink] = useState('Home');

    const getActiveLink = link => {
        setActiveLink(link)
    }

    const logout = (e) => {
        e.preventDefault()
        localStorage.setItem('jwt',null)
        dispatch({type: 'LOGOUT'})
        dispatch({type: 'SHOW_NOTIFICATION',payload: 'User Logged Out'})
        props.history.push('/')
    }
    return (
        <div className={classes.navigation}>
            <NavigationItem to='/' icon={'home'} name={'Home'} />
            <NavigationItem to='/categories/travel' icon={'around'} name={'Travel'} />
            <NavigationItem to='/categories/fashion' icon={'fashion'} name={'Fashion'} />
            <NavigationItem to='/contact' icon={'call'} name={'Contact'} />

            {globalState.auth ? <a href='/' onClick={logout}>Logout</a> : <NavigationItem to='/accounts/login' icon={'login'} name={'Login'} />}
            
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

export default withRouter(Navigation);
