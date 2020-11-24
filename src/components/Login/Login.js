import React from 'react'
import classes from './Login.module.scss';
import Input from './../UI/Input/Input'
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

function Login() {

    const btnStyle = {
        backgroundImage: 'linear-gradient(to bottom ,#d62929, #188018)',
        color: 'white',
        borderRadius: '4px',
        padding: '1rem 2rem'
    }
    return (
        <div className={classes.login}>
            <h1>Login</h1>
            <p>Log in to your existing account</p>

            <form action="/" className={classes.login__container}>
                <Input type={'email'} placeholder='Enter your email' style={{borderRadius: '4px'}} />
                <Input type={'password'} placeholder='Password' style={{borderRadius: '4px'}} />
                

                <Button name="Login" style={btnStyle} /> 
            </form>
            <p>
                <span>Don't have an account ? </span>
                <Link to='/accounts/signup' >SignUp</Link>
            </p>
        </div>
    )
}

export default Login
