import React from 'react'
import classes from './Profile.module.scss';
import { profile, nature,fox, hawk, leopard, mountain, panda, squarell } from './../../assets/images/images';
import DisplaySvg from './../../components/UI/DisplaySvg/DisplaySvg';
import Button from './../../components/UI/Button/Button'

function Profile() {
    const btnStyle = {
        border: '1px solid lightgray',
        padding: '0 1rem',
        borderRadius: '2.5rem'
    }
    return (
        <div className={classes.profile}>
            <div className={classes.profile__top}>
                {/* User image */}
                <div className={classes.profile__img}>
                    <img src={profile} alt=""/>

                    <div className={classes.profile__img__camera}>
                        <DisplaySvg icon={'camera'} />
                    </div>
                    
                </div>
                {/* User description */}
                <div className={classes.profile__desc}>
                    <h2>Your Profile</h2>

                    <div className={classes.profile__desc__container}>
                        <div className={classes.profile__desc__left}>
                            <p><strong>Fullname : </strong>Christine Smith</p>
                            <p><strong>Username : </strong>Christine458</p>
                            <p><strong>Email : </strong>christine458@gmail.com</p>

                        </div>
                        <div className={classes.profile__desc__right}>
                            <Button name='Update Profile' style={btnStyle} />
                            <Button name='Update Password' style={btnStyle} />

                        </div>
                    </div>
                    <Button name='+ Create Post' style={btnStyle} />

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

export default Profile;
