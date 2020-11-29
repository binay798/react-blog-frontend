import React,{useContext,useState} from 'react'
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import classes from './CreateBlog.module.scss';
import { GlobalContext } from './../../store/store'
import axios from './../../axios/axiosInstance';
import { withRouter } from 'react-router-dom'

function CreateBlog(props) {
    const [globalState,dispatch] = useContext(GlobalContext);
    const [loading,setLoading] = useState(false)
    const [state,setState] = React.useState({
        title: '',
        description: '',
        category: 'travel',
        photo: '',
        author: ''
    })
    const btnStyle = {
        background: 'coral',
        padding: '1rem 2rem',
        color: 'white',
        width: '50%',
        margin: '0 auto'
    }

    React.useEffect(() => {
        setState({...state,author: globalState.user?.username})
    },[globalState.user?.username])

    const inputChangeHandler = (e,type) => {
        if(type === 'file') {
            let file = e.target.files[0];
            
            
            setState({...state,photo: file})
        } else {
            setState({...state,[type]: e.target.value})
        }
    }

    const submitHandler = async(e) => {
        setLoading(true);
        e.preventDefault()
        if(state.author !== '' && state.title !== '' && state.description !== '' && state.photo !== '' && state.category !== '') {
            try {
                const config = {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('jwt')}`
                    }
                }
                let fd = new FormData();
                fd.append('file',state.photo);
                fd.append('title',state.title);
                fd.append('description',state.description);
                fd.append('category',state.category);
                fd.append('author',state.author);

                let res = await axios.post('/api/v1/posts',fd,config)
                setLoading(false);
                setState({title:'',description: '',category:'travel',photo: ''})
                dispatch({type: 'SHOW_NOTIFICATION',payload: 'Post created'})
                props.history.push('/')


            } catch(err) {
                console.log(err)
                setLoading(false);

            }

        }
    }
    return (
        <div className={classes.blog}>
            <h2>Create Blog</h2>

            <form onSubmit={submitHandler} className={classes.blog__form}>
                <Input value={state.title} onChange={(e) => inputChangeHandler(e,'title')} type={'text'} placeholder={'Title of the blog'} />
                <textarea value={state.description} onChange={(e) => inputChangeHandler(e,'description')} name="description" cols="30" rows="10" placeholder="Description"></textarea>
                <select value={state.category} onChange={(e) => inputChangeHandler(e,'category')} name="" id="">
                    <option value="travel">Travel</option>
                    <option value="fashion">Fashion</option>
                    <option value="photography">Photography</option>
                    <option value="food">Food</option>
                    <option value="technology">Technology</option>

                </select>
                <Input onChange={(e) => inputChangeHandler(e,'file')} name='file' type={'file'} placeholder={'Title of the blog'} />
                <Button onClick={submitHandler} name={loading? 'Submitting...' : 'Submit'} style={btnStyle} />
            </form>
        </div>
    )
}

export default withRouter(CreateBlog);
