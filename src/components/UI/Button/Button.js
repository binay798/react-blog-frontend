import React from 'react'
import classes from './Button.module.scss';
import { Link } from 'react-router-dom';


function Button(props) {
    return (
        <Link to='/' className={classes.button} style={props.style} >{props.name}</Link>
    )
}

export default Button
