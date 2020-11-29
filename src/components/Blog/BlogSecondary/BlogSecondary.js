import React,{ useContext } from 'react'
import classes from './BlogSecondary.module.scss';
import { nature } from './../../../assets/images/images';
import { withRouter } from 'react-router-dom'
import DisplaySvg from '../../UI/DisplaySvg/DisplaySvg';
import Button from '../../UI/Button/Button';
import { GlobalContext } from './../../../store/store'

function BlogSecondary(props) {
    const [globalState,dispatch] = useContext(GlobalContext)

    const btnStyle = {
        color: '#4484e4',
        marginRight: 'auto',
        display: 'inline-block',
    }

    const goToSingleBlog = () => {
        dispatch({type: 'STORE_SELECTED_POST',payload: {post: null}})
        props.history.push(`/posts/${props._id}`)
    }
    return (
        <div className={classes.blog}>
            
            <div className={classes.blog__container}>
                <img src={props.photo ||nature} className={classes.blog__img} onClick={goToSingleBlog} />

                
                <div className={classes.blog__desc}>
                    <h3 onClick={goToSingleBlog}>Great Things Never Came from Comfort Zone</h3>

                    <div className={classes.blog__desc__options}>
                        <div>
                            <DisplaySvg icon={'calendar'} style={{fill:'#a29f9f'}} />
                            <span>June 28, 2021</span>
                        </div>
                        <div>
                            <DisplaySvg icon={'list'} style={{fill:'#a29f9f'}} />
                            <span>{props.category}</span>
                        </div>
                        <div>
                            <DisplaySvg icon={'comment'} style={{fill:'#a29f9f'}} />
                            <span>12</span>
                        </div>
                    </div>

                    <p>
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </p>

                    <Button name={'Read More'} style={btnStyle} />
                </div>
            </div>
            
        </div>
    )
}

export default withRouter(BlogSecondary);
