import React,{useState,useContext,useEffect} from 'react'
import classes from './EditProfile.module.scss';
import Input from './../UI/Input/Input';
import Button from './../UI/Button/Button';
import { GlobalContext } from './../../store/store';
import axios from './../../axios/axiosInstance'

const btnStyle = {
    backgroundImage: 'linear-gradient(to right,rgb(85,85,204),rgb(44,44,210))',
    color: 'white'
}

function EditProfile() {
    const [globalState,dispatch] = useContext(GlobalContext);
    const [loading,setLoading] = useState(false)
    const [user,setUser] = useState({
        fullname: '',
        username: '',
        age: '',
        mobile: '',
        email: ''
    })

    useEffect(() => {
        if(!globalState.user) return;
        const {fullname,username,age,mobile,email} = globalState.user;
        setUser({
            fullname,
            username,
            age,
            mobile,
            email
        })
    },[globalState.user])

    const inputChangedHandler = (e,type) => {
        setUser({...user,[type]: e.target.value})
    }

    const updateProfileHandler = async(e) => {
        e.preventDefault()
        setLoading(true)
        const config = {
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        }
        try {
            let res = await axios.post(`/api/v1/users/updateUser/${globalState.user?._id}`,user,config)
            setLoading(false)
            // if(res.data.message) return;
            window.location.reload()
        } catch(err) {
            console.log(err)
            setLoading(false)

        }
    }
    
    return (
        <div className={classes.profile}>
            <h2>Edit Profile</h2>

            <form onSubmit={updateProfileHandler}  className={classes.profile__container}>
                <div className={classes.form__group}>
                    <label htmlFor="">Fullname</label>
                    <Input type="text" value={user.fullname} onChange={(e) => inputChangedHandler(e,'fullname')} />
                </div>
                <div className={classes.form__group}>
                    <label htmlFor="">Username</label>
                    <Input type="text" value={user.username} onChange={(e) => inputChangedHandler(e,'username')} />
                </div>
                <div className={classes.form__group}>
                    <label htmlFor="">Email</label>
                    <Input type="text" value={user.email} onChange={(e) => inputChangedHandler(e,'email')} />
                </div>
                <div className={classes.form__group}>
                    <label htmlFor="">Age</label>
                    <Input type="number" value={user.age || ''} onChange={(e) => inputChangedHandler(e,'age')} />
                </div>
                <div className={classes.form__group}>
                    <label htmlFor="">Mobile</label>
                    <Input type="number" value={user.mobile || ''} onChange={(e) => inputChangedHandler(e,'mobile')} />
                </div>

                <Button clicked={updateProfileHandler} name={loading ? 'Updating...' : 'Update'} style={btnStyle} />

            </form>
        </div>
    )
}

export default EditProfile
