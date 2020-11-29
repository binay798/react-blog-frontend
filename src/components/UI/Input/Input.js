import React from 'react'
import classes from './Input.module.scss'

function Input(props) {
    return (
        <input 
            onChange={props.onChange} 
            className={classes.input} 
            style={{...props.style}} 
            type={props.type} 
            value={props.value}
            id={props.id}
            name={props.name}
            placeholder={props.placeholder} />
    )
}

export default Input
