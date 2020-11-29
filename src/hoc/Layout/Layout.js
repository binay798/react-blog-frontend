import React,{ useContext, useEffect,useRef } from 'react'
import classes from './Layout.module.scss'
import { profile,profilePic } from './../../assets/images/images'
import Navigation from '../../components/Navigation/Navigation'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import { Link } from 'react-router-dom';
import { GlobalContext } from './../../store/store';
import axios from './../../axios/axiosInstance';
import Notification from './../../components/UI/Notification/Notification'

const jwtToken = localStorage.getItem('jwt')
function Layout(props) {
    const [globalState,dispatch] = useContext(GlobalContext);

    let rightSide = useRef()
    useEffect(() => {
        rightSide.current.scrollTop = 0
    })
    useEffect(() => {
        const fetchData = async() => {
            try {
                if(jwtToken === 'null' || jwtToken === null) return;
                const config = {
                    headers: {
                        authorization: `Bearer ${jwtToken}`
                    }
                } 
                const res = await axios.post('/api/v1/users/loginThroughToken',null,config)
                let user = res.data.user;
                dispatch({type: 'AUTH_USER',payload: user})
                
            } catch(err) {
                console.log(err.message)
            }
        }

        fetchData()
    },[dispatch])
    // If user is authenticated then show profile component
    const profileContent = (
                <Link to='/profile' className={classes.userProfile}>
                    <img src={globalState.user?.photo || profilePic} alt=""/>
                    <span>{globalState.user?.username || 'Christine458'}</span>
                </Link>
    )
    return (
        <div className={classes.layout}>

            {/* Notification */}
            <Notification  />
            <div className={classes.layout__left}>
                
                {/* User Profile */}
                {globalState.auth ? profileContent : null}

                

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
            <div className={classes.layout__right} ref={rightSide} >
                {props.children}
                
            </div>
        </div>
    )
}

export default Layout
