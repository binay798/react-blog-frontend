import React,{useState,useContext} from 'react'
import classes from './Blog.module.scss';
import { profile } from './../../assets/images/images'
import Button from './../UI/Button/Button'
import DisplaySvg from './../UI/DisplaySvg/DisplaySvg';
import { withRouter } from 'react-router-dom';
import {GlobalContext} from './../../store/store'

function Blog(props) {
    const [globalState,dispatch] = useContext(GlobalContext)
    const [liked,setLiked] = useState(false)

    const likeHandler = () => {
        
        setLiked(!liked)
    }
    const btnStyle = {
        border: '1px solid #827878',
        padding: '1rem 2rem',
        color: '#827878',
        borderRadius: '25px',
        fontWeight: '400',
        width: '35%'
    }

    const goToSingleBlogPage = () => {
        dispatch({type: 'STORE_SELECTED_POST',payload: {post: null}})
        props.history.push(`/posts/${props._id}`)
    }

    
    return (
        <div className={classes.blog}>
            {/* Image */}
            <img src={props.photo} onClick={goToSingleBlogPage} className={classes.blog__img} alt=""/>
            {/* title */}
            <h2 className={classes.blog__header} onClick={goToSingleBlogPage} >{props.title || 'A Loving Heart is the Truest Wisdom'}</h2>
            {/* short Description */}
            <p className={classes.blog__desc}>
            {props.description}
            </p>
            {/* Author */}
            <div className={classes.blog__author}>
                <img src={profile} className={classes.author__img} alt='profile' />
                <div className={classes.author__desc}>
                    <p className={classes.author__desc__top}>Written By</p>


                    <div className={classes.author__desc__bottom}>
                        <p>{props.author},</p>
                        <p>June 28, 2019</p>
                    </div>
                </div>
            </div>
            {/* likes,comments,continue reading... */}

            <div className={classes.blog__likes}>
                <Button to='/posts/1' name={'Continue Reading'} style={btnStyle} />

                <div className={classes.blog__likes__container}>
                    <div className={classes.likes}>
                        <DisplaySvg clicked={likeHandler} style={{fill:'coral'}} icon={liked ? 'like-filled' : 'like'} />
                        <span>3</span>
                    </div>
                    <div className={classes.comments}>
                        <DisplaySvg icon={'comment'} />
                        <span>2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Blog);
