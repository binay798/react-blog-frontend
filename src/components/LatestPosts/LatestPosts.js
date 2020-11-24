import React from 'react'
import classes from './LatestPosts.module.scss';
import { nature } from './../../assets/images/images'
import { Link } from 'react-router-dom';
import DisplaySvg from '../UI/DisplaySvg/DisplaySvg';
// Post
function Post() {
    return (
        <div className={classes.post}>
            <img src={nature} className={classes.post__img} alt=""/>

            <div className={classes.post__desc}>
                <Link to='/'>
                    Even the all-powerful Pointing has no control
                </Link>

                <div className={classes.post__desc__date}>
                    <DisplaySvg icon='calendar' />
                    <span>June 28, 2019</span>
                </div>

                <div className={classes.post__desc__author}>
                    <DisplaySvg icon='user' />
                    <span>Christine</span>
                </div>
            </div>
        </div>
    )
}

function LatestPosts() {
    return (
        <div className={classes.latest}>
            <h2>Latest Posts</h2>
            <div className={classes.latest__container}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
            

        </div>
    )
}

export default LatestPosts
