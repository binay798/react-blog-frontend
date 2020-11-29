import React,{useState,useEffect,useContext} from 'react'
import classes from './SelectedCategoryBlogs.module.scss';
import BlogSecondary from './../../components/Blog/BlogSecondary/BlogSecondary'
import axios from './../../axios/axiosInstance';
import { GlobalContext } from './../../store/store'


function SelectedCategoryBlogs(props) {
    const [globalstate,dispatch] = useContext(GlobalContext)
    const [category,setCategory] = useState(null)
    useEffect(() => {
        let category = props.match.params.category

        setCategory(category)
        const fetchData = async() => {
            try {
                let res = await axios.get(`/api/v1/posts?category=${category}`)
                if(res.data.message) return new Error(res.data.message)
                const posts = res.data.posts
                dispatch({type: 'STORE_SELECTED_CATEGORY_POSTS',payload: {posts}})
            } catch(err) {
                console.log(err)
            }
        }
        fetchData()
    },[props.match.params.category])
    return (
        <div className={classes.selected}>
            <h2>{category?.toUpperCase()}</h2>

            {globalstate.selectedCategoryPosts?.map(post => {
                return <BlogSecondary key={post._id} {...post} />
            })}
             
            

        </div>
    )
}

export default SelectedCategoryBlogs
