import React from 'react'
import classes from './Button.module.scss';
import { withRouter } from 'react-router-dom'

function Button(props) {

    
    return (
        <button onClick={props.clicked}  className={classes.button} style={props.style} >{props.name}</button>
    )
}

export default withRouter(Button)
