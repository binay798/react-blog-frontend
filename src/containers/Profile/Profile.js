import React,{useContext,useEffect,useState} from 'react'
import classes from './Profile.module.scss';
import { profile,profilePic, nature,fox, hawk, leopard, mountain, panda, squarell } from './../../assets/images/images';
import DisplaySvg from './../../components/UI/DisplaySvg/DisplaySvg';
import Button from './../../components/UI/Button/Button';
import { withRouter } from "react-router-dom";
import Input from './../../components/UI/Input/Input'
import axios from './../../axios/axiosInstance'
import { GlobalContext } from './../../store/store'

// {
//     headers: {
//         'Content-Type': 'multipart/form-data'
//     }
// }
function Profile(props) {
    const [globalState,dispatch] = useContext(GlobalContext)
    const btnStyle = {
        border: '1px solid lightgray',
        borderRadius: '4px',
        
    }
    const goToEditProfilePage = () => {
        props.history.push('/profile/edit')
    }
    const goToCreateBlogPage= () => {
        props.history.push('/createBlog')
    }

    const updateProfilePic = async(e) => {
        const file = e.target.files[0];
        const jwtToken = localStorage.getItem('jwt')
        const config = { headers: { 'Content-Type': 'multipart/form-data',authorization:`Bearer ${jwtToken}` } };
        let fd = new FormData();
        fd.append('file',file)
        if(file) {
            try {
                let response = await axios.post('/api/v1/users/changeProfilePic',fd,config)
                console.log(response)
                window.location.reload()
                
            } catch(err) {
                console.log(err)
            }
            
        }
    }

    
    return (
        <div className={classes.profile}>
            {/* Edit profile route */}

            <div className={classes.profile__top}>
                {/* User image */}
                <form encType='multipart/form-data' className={classes.profile__img}>
                    <img src={globalState.user?.photo || `${profilePic}`} alt=""/>

                    <label htmlFor='profile'  className={classes.profile__img__camera}>
                        <DisplaySvg icon={'camera'}  />
                    </label>
                    <Input onChange={updateProfilePic} type='file' id='profile' name='file' style={{display: 'none'}} />
                    
                    <Button clicked={goToEditProfilePage} name={'Edit Profile'} style={{...btnStyle,display: 'block',marginTop:'4rem'}} />
                </form>
                {/* User description */}
                <div className={classes.profile__desc}>
                    <h2>About me</h2>

                    <div className={classes.profile__desc__container}>
                        <div className={classes.profile__desc__container__left}>
                            <div>Name</div>
                            <div>{globalState.user?.fullname}</div>
                            <div>Username</div>
                            <div>{globalState.user?.username}</div>
                            <div>Age:</div>
                            <div>{globalState.user?.age || 'null'}</div>
                            <div>Email</div>
                            <div>{globalState.user?.email}</div>
                            
                            <div>Phone:</div>
                            <div>{globalState.user?.mobile || 'null'}</div>
                        </div>
                        <div className={classes.profile__desc__container__right}>

                        </div>
                    </div>
                    <Button clicked={goToCreateBlogPage}  name='+ Create Post' style={btnStyle} />

                </div>
            </div>
            <div className={classes.profile__bottom}>
                <h2>Your Recent Posts</h2>

                <div className={classes.gallery__container}>
                    
                    <div className={classes.gallery__container__img}>
                        <img src={mountain}  alt=""/>

                        <div className={classes.gallery__container__img__overlay}>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
                            </p>
                        </div>
                    </div>
                    <div className={classes.gallery__container__img}>
                        <img src={squarell}  alt=""/>

                        <div className={classes.gallery__container__img__overlay}>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
                            </p>
                        </div>
                    </div>
                    <div className={classes.gallery__container__img}>
                        <img src={fox}  alt=""/>

                        <div className={classes.gallery__container__img__overlay}>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
                            </p>
                        </div>
                    </div>
                    <div className={classes.gallery__container__img}>
                        <img src={panda}  alt=""/>

                        <div className={classes.gallery__container__img__overlay}>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
                            </p>
                        </div>
                    </div>
                    <div className={classes.gallery__container__img}>
                        <img src={leopard}  alt=""/>

                        <div className={classes.gallery__container__img__overlay}>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
                            </p>
                        </div>
                    </div>
                    <div className={classes.gallery__container__img}>
                        <img src={hawk}  alt=""/>

                        <div className={classes.gallery__container__img__overlay}>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
                            </p>
                        </div>
                    </div>

                    <div className={classes.gallery__container__img}>
                        <img src={nature}  alt=""/>

                        <div className={classes.gallery__container__img__overlay}>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Profile);
