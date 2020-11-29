import React from 'react'
import classes from './Comment.module.scss';
import { profile } from './../../assets/images/images'

function Comment() {
    return (
        <div className={classes.comment}>
            <img src={profile} className={classes.comment__img} alt='author' />

            
            <div className={classes.comment__desc}>
                <h2 className={classes.comment__author}>John Doe</h2>
                <p className={classes.comment__date}>July 12,2020</p>
                <p className={classes.comment__details}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Pariatur quidem laborum necessitatibus, ipsam impedit vitae 
                    autem, eum officia, fugiat saepe enim sapiente iste iure! 
                    Quam voluptas earum impedit necessitatibus, nihil?
                </p>
            </div>
        </div>
    )
}

export default Comment
