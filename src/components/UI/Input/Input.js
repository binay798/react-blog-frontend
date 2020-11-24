import React from 'react'
import classes from './Input.module.scss'

function Input(props) {
    return (
        <input className={classes.input} style={{...props.style}} type={props.type} placeholder={props.placeholder} />
    )
}

export default Input
