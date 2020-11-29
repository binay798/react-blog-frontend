import React,{useEffect,useContext,useRef} from 'react'
import classes from './SingleBlog.module.scss';
import { leopard,profile } from './../../assets/images/images'
import DisplaySvg from '../../components/UI/DisplaySvg/DisplaySvg';
import Comment from '../../components/Comment/Comment'
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { withRouter } from 'react-router-dom'
import axios from './../../axios/axiosInstance';
import { GlobalContext } from './../../store/store'
import Latest from './../../components/LatestPosts/LatestPosts'
import { SkeletonTheme } from 'react-loading-skeleton';
import { BlogSkeleton } from './../../components/UI/Skeleton/Skeleton'

function SingleBlog(props) {
    const [globalState,dispatch] = useContext(GlobalContext)    
    const [liked,setLiked] = React.useState(false);
    const top = useRef()
    console.log(globalState)
    useEffect(() => {
    
        const fetchData = async() => {
            
            try {
                let res =await axios.get(`/api/v1/posts/${props.match.params.id}`)
                if(res.data.message) return new Error(res.data.message);
                dispatch({type: 'STORE_SELECTED_POST',payload: {post: res.data.post}})

            } catch(err) {
                console.log(err)
            }
            
        }
        fetchData();

        return () => {
            fetchData()
        }
    },[props.match.params.id,dispatch])
    const likeHandler = () => {
        setLiked(!liked)
    }

    const btnStyle = {
        background: 'coral',
        color: 'white',
        padding: '1rem 2rem'
    }

    let displayContent = (
        <SkeletonTheme color='#afa2a2'>
            <BlogSkeleton />
        </SkeletonTheme>
    )

    if(globalState.selectedPost) {
        displayContent = (
                <>
                {/* Blog title */}
                <h1 className={classes.blog__title}>
                    {globalState.selectedPost?.title}
                </h1>
                {/* Blog image */}
                <img src={globalState.selectedPost?.photo || leopard} className={classes.blog__img} alt="my title"/>
                {/* Blog description */}
                <p className={classes.blog__desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio 
                    perferendis et doloribus unde architecto optio laboriosam porro 
                    adipisci sapiente officiis nemo accusamus ad praesentium? 
                    Esse minima nisi et. Dolore perferendis, enim praesentium omnis, 
                    iste doloremque quia officia optio deserunt molestiae voluptates 
                    soluta architecto tempora.
                </p>
                {/* Likes */}
                <div className={classes.blog__author}>
                    <img src={profile} className={classes.author__img} alt="blog" />
                    <div className={classes.author__desc}>
                        <p className={classes.author__desc__top}>Written By</p>


                        <div className={classes.author__desc__bottom}>
                            <p>{globalState.selectedPost?.author},</p>
                            <p>June 28, 2019</p>
                        </div>
                    </div>

                    <div className={classes.blog__author__likes}>
                        <DisplaySvg clicked={likeHandler} style={{fill:'coral',cursor: 'pointer'}} icon={liked ? 'like-filled' : 'like'} />
                        <span>3</span>
                    </div>
                </div>

                {/* Comments */}

                <div className={classes.blog__comments}>
                    <h2>3 Comments</h2>
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />

                </div>

                {/* Leave a comment */}

                <div className={classes.blog__createComment}>
                    <h3>Leave a comment</h3>

                    <form action="">
                        <Input type='text' placeholder='Your name *' />
                        <Input type='email' placeholder='Your email *' />
                        <Input type='text' placeholder='Your website' />
                        <textarea name="message" id="" cols="30" rows="10">

                        </textarea>

                        <Button name={'Submit'} style={btnStyle} />

                    </form>
                </div>
                </>
        )
    }
    return (
        <div className={classes.blog} ref={top}>
            <div className={classes.blog__left}>
                {displayContent}
            </div>
            
            
            <div className={classes.blog__right}>
                <Latest />
            </div>
            
        </div>
    )
}

export default withRouter(SingleBlog);
