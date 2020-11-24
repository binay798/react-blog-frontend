import React,{useState} from 'react'
import classes from './Blog.module.scss';
import { nature, profile } from './../../assets/images/images'
import Button from './../UI/Button/Button'
import DisplaySvg from './../UI/DisplaySvg/DisplaySvg'

function Blog() {
    const [liked,setLiked] = useState(false)

    const likeHandler = () => {
        setLiked(!liked)
    }
    const btnStyle = {
        border: '1px solid #827878',
        padding: '1rem 2rem',
        color: '#827878',
        borderRadius: '25px',
        fontWeight: '400'
    }
    return (
        <div className={classes.blog}>
            {/* Image */}
            <img src={nature} className={classes.blog__img} alt=""/>
            {/* title */}
            <h2 className={classes.blog__header}>A Loving Heart is the Truest Wisdom</h2>
            {/* short Description */}
            <p className={classes.blog__desc}>
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
            text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            </p>
            {/* Author */}
            <div className={classes.blog__author}>
                <img src={profile} className={classes.author__img} />
                <div className={classes.author__desc}>
                    <p className={classes.author__desc__top}>Written By</p>


                    <div className={classes.author__desc__bottom}>
                        <p>Christine458,</p>
                        <p>June 28, 2019</p>
                    </div>
                </div>
            </div>
            {/* likes,comments,continue reading... */}

            <div className={classes.blog__likes}>
                <Button name={'Continue Reading'} style={btnStyle} />

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

export default Blog
