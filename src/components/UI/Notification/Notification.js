import React,{useContext} from 'react'
import classes from './Notification.module.scss';
import DisplaySvg from './../DisplaySvg/DisplaySvg';
import { GlobalContext } from './../../../store/store'


function Notification() {
    const [globalState,dispatch] = useContext(GlobalContext)

    const hide = () => {
        dispatch({type: 'HIDE_NOTIFICATION'})
    }

    
    return (
        <div className={classes.notification} style={{display: globalState.showNotification.status ? 'flex' : 'none'}}>
            <p>{globalState.showNotification.content || 'Notification'}</p>
            <DisplaySvg clicked={hide} icon='cancel' style={{cursor: 'pointer',width: '1.5rem',height: '1.5rem',fill: 'white'}} />
        </div>
    )
}

export default Notification
