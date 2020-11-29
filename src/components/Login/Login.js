import React,{useState,useContext} from 'react'
import classes from './Login.module.scss';
import Input from './../UI/Input/Input'
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import axios from './../../axios/axiosInstance';
import { GlobalContext } from './../../store/store'
import { withRouter } from 'react-router-dom'
function Login(props) {
    const [globalState,dispatch] = useContext(GlobalContext);
    const [state,setState] = useState({
        email: '',
        password: '',
        loading: false
    })

    // Input changed handler
    const inputChangeHandler = (e,type) => {
        setState({...state,[type]: e.target.value})
    }

    // Login submit handler
    const loginHandler = async (e) => {
        e.preventDefault()

        if(state.email !== '' || state.password !== '') {
            try {
                setState({...state,loading: true});
                // Remove the current jwt from local storage
                localStorage.removeItem('jwt')
                let response = await axios.post('/api/v1/users/login',{email: state.email,password: state.password})
                // if an error occurs during login then return from the function
                if(response.data.message) {
                    console.log(response.data.message)
                    setState({...state,loading: false})
                    return ;
                };
                // If login is success then store jwt to local storage
                localStorage.setItem('jwt',response.data.token)
                let user = response.data.user;
                // Store user details in the store
                dispatch({type: 'AUTH_USER',payload: user})
                dispatch({type: 'SHOW_NOTIFICATION',payload: 'Log in successful'})
                setState({...state,loading: false})
                props.history.push('/')

            } catch(err) {
                setState({...state,loading: false})
                dispatch({type: 'SHOW_NOTIFICATION',payload: 'Something went wrong'})

                console.log(err)
            }
            
        
        }
    }

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

            <form action=""  className={classes.login__container}>
                <Input 
                    type={'email'} 
                    value={state.email}
                    onChange={(e) => inputChangeHandler(e,'email')}
                    placeholder='Enter your email' 
                    style={{borderRadius: '4px'}} />
                <Input 
                    type={'password'} 
                    value={state.password}
                    onChange={(e) => inputChangeHandler(e,'password')}
                    placeholder='Password' 
                    style={{borderRadius: '4px'}} />
                

                <Button clicked={loginHandler} name={state.loading ? 'Logging in' : 'Login'} style={btnStyle} /> 
                {/* <button style={{btnStyle}}>{state.loading ? 'Logging in' : 'Login'}</button> */}
            </form>
            <p>
                <span>Don't have an account ? </span>
                <Link to='/accounts/signup' >SignUp</Link>
            </p>
        </div>
    )
}

export default withRouter(Login);
