import React,{useState,useEffect,useContext} from 'react'
import classes from './LatestPosts.module.scss';
import { nature } from './../../assets/images/images'
import { Link } from 'react-router-dom';
import DisplaySvg from '../UI/DisplaySvg/DisplaySvg';
import axios from './../../axios/axiosInstance';
import { withRouter } from 'react-router-dom';
import { LatestPostSkeleton } from './../UI/Skeleton/Skeleton';
import { SkeletonTheme } from 'react-loading-skeleton';
import { GlobalContext } from './../../store/store'
// Post
function Post(props) {

    
    return (
        <div className={classes.post} onClick={props.clicked}>
            <img src={props.photo} className={classes.post__img} alt=""/>

            <div className={classes.post__desc}>
                <Link to='/'>
                    {props.title}
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


function LatestPosts(props) {
    const [globalState,dispatch] = useContext(GlobalContext)
    const [latest,setLatest] = useState(null);

    useEffect(() => {
        const fetchData= async() => {
            try {
                let res = await axios.get('/api/v1/posts?limit=8')
                if(res.data.message) throw res.data.message
                setLatest(res.data.posts)
            } catch(err) {
                console.log(err)
            }
        }

        fetchData()
    },[])

    const goToSingleBlog = (id) => {
        console.log('from latest click')
        dispatch({type:'STORE_SELECTED_POST',payload: {post: null}})

        props.history.push(`/posts/${id}`)
    }

    let displayContent = Array(6).fill().map((el,id) => {
        return (
            <SkeletonTheme key={id} color='#afa2a2'>
                <LatestPostSkeleton />
            </SkeletonTheme>
        )
    })
    if(latest) {
        displayContent = latest?.map(post => {
            return <Post key={post._id} {...post} clicked={() => goToSingleBlog(post._id)} />
        })
    }
    return (
        <div className={classes.latest}>
            <h2>Latest Posts</h2>
            <div className={classes.latest__container}>
                {displayContent}
            </div>
            

        </div>
    )
}


export default withRouter(LatestPosts);
