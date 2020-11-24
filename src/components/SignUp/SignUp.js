import React from 'react'
import classes from './SignUp.module.scss';
import Input from './../UI/Input/Input'
import Button from '../UI/Button/Button';

function SignUp() {

    const btnStyle = {
        backgroundImage: 'linear-gradient(to bottom ,#d62929, #188018)',
        color: 'white',
        borderRadius: '4px',
        padding: '1rem 2rem'
    }
    return (
        <div className={classes.signup}>
            <h1>Register</h1>
            <p>Create your account.It's free and it takes only few minutes.</p>

            <form action="/" className={classes.signup__container}>
                <Input type={'text'} placeholder='Firstname' style={{borderRadius: '4px'}} />
                <Input type={'text'} placeholder='Lastname' style={{borderRadius: '4px'}} />
                <Input type={'email'} placeholder='Email' style={{borderRadius: '4px'}} />
                <Input type={'password'} placeholder='Password' style={{borderRadius: '4px'}} />
                <Input type={'password'} placeholder='Confirm Password' style={{borderRadius: '4px'}} />

                <Button name="Register" style={btnStyle} /> 
            </form>
        </div>
    )
}

export default SignUp
