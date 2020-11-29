import React,{ useContext,useEffect } from 'react'
import Blog from '../../components/Blog/Blog';
import classes from './Homepage.module.scss';
import { Link } from 'react-router-dom';
import LatestPosts from './../../components/LatestPosts/LatestPosts';
import Pagination from './../../components/Pagination/Pagination';
import { GlobalContext } from './../../store/store';
import axios from './../../axios/axiosInstance';
import { BlogSkeleton } from './../../components/UI/Skeleton/Skeleton'
import { SkeletonTheme } from 'react-loading-skeleton';

function Homepage() {
    const [state,dispatch] = useContext(GlobalContext)
    // Get blog posts
    useEffect(() => {
        let fetchData = async() => {
            try {
                let response = await axios.get('/api/v1/posts');
                if(response.data.message) return new Error('fetch data failed')

                dispatch({type: 'GET_ALL_POSTS',payload: {posts: response.data.posts}})
            } catch(err) {
                console.log(err)
            }
            
        }
        fetchData()

        return () => {
            fetchData()
        }
    },[])

    let displayPost = Array(3).fill().map((el,id) =>  {
        return (
            <SkeletonTheme key={id} color='#afa2a2'>
                <BlogSkeleton />
            </SkeletonTheme>
        )
    })
    if(state.allPosts) {
        displayPost = state.allPosts?.map(post => {
            return <Blog key={post._id}  {...post} />
        })
    }


    return (
        <div className={classes.homepage}>
            <div className={classes.homepage__left}>
                <div className={classes.homepage__blog}>
                    {displayPost}
                </div>
                <div className={classes.homepage__pagination}>
                    <Pagination />
                </div>

            </div>
            <div className={classes.homepage__right}>
                {/* Categories */}
                <div className={classes.categories}>
                    <h3>Categories</h3>
                    <ul className={classes.categories__list}>
                        <li>
                            <Link to='/categories/fashion'>Fashion(<span>5</span>)</Link>
                        </li>
                        <li>
                            <Link to='/categories/technology'>Technology(<span>15</span>)</Link>
                        </li>
                        <li>
                            <Link to='/categories/travel'>Travel(<span>50</span>)</Link>
                        </li>
                        <li>
                            <Link to='/categories/food'>Food(<span>6</span>)</Link>
                        </li>
                        <li>
                            <Link to='/categories/photography'>Photography(<span>99</span>)</Link>
                        </li>
                    </ul>
                </div>
                {/* Latest Posts */}

                <LatestPosts />
            </div>
        </div>
    )
}

export default Homepage
