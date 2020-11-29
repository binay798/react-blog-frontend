import React,{useState,useContext} from 'react'
import classes from './SignUp.module.scss';
import Input from './../UI/Input/Input'
import Button from '../UI/Button/Button';
import axios from './../../axios/axiosInstance';
import { withRouter } from 'react-router-dom'
import { GlobalContext } from './../../store/store' 

function SignUp(props) {
    const [globalState,dispatch] = useContext(GlobalContext)

    const [state,setState] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        loading: false
    })

    const inputChangedHandler = (e,type) => {
        setState({...state,[type]: e.target.value})
    }

    // Login submit handler
    const submitHandler = async (e) => {
        e.preventDefault()

        if(state.email !== '' || state.firstname !== '' || state.lastnamename !== '' || state.password !== '' || state.confirmPassword !== '') {
            if(state.password === state.confirmPassword) {
                try {
                    let userData = {
                        fullname:`${state.firstname} ${state.lastname}`,
                        username: state.username,
                        email: state.email,
                        password: state.password,
                        confirmPassword: state.confirmPassword
                    }
                    setState({...state,loading: true});
                    // Remove the current jwt from local storage
                    localStorage.removeItem('jwt')
                    console.log(userData)
                    let response = await axios.post('/api/v1/users/signup',userData)
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
                    setState({...state,loading: false})
                    props.history.push('/')
    
                } catch(err) {
                    setState({...state,loading: false})
                    console.log(err)
                }
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
        <div className={classes.signup}>
            <h1>Register</h1>
            <p>Create your account.It's free and it takes only few minutes.</p>

            <form action="/" className={classes.signup__container}>
                <Input type={'text'} placeholder='Firstname' style={{borderRadius: '4px'}} onChange={(e) => inputChangedHandler(e,'firstname')} />
                <Input type={'text'} placeholder='Lastname' style={{borderRadius: '4px'}} onChange={(e) => inputChangedHandler(e,'lastname')} />
                <Input type={'text'} placeholder='Username' style={{borderRadius: '4px'}} onChange={(e) => inputChangedHandler(e,'username')} />
                <Input type={'email'} placeholder='Email' style={{borderRadius: '4px'}} onChange={(e) => inputChangedHandler(e,'email')} />
                <Input type={'password'} placeholder='Password' style={{borderRadius: '4px'}} onChange={(e) => inputChangedHandler(e,'password')} />
                <Input type={'password'} placeholder='Confirm Password' style={{borderRadius: '4px'}} onChange={(e) => inputChangedHandler(e,'confirmPassword')} />

                <Button clicked={submitHandler} name={state.loading ? 'Signning up' : 'Register'} style={btnStyle} /> 
            </form>
        </div>
    )
}

export default withRouter(SignUp);
