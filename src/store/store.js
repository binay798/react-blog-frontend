import React,{useReducer,createContext} from 'react'
import reducer from './reducer'
export const GlobalContext = createContext()

const initialState = {
    auth: false,
    allPosts: null,
    selectedPost:null,
    selectedCategoryPosts: null,
    user: null,
    showNotification: {
        status: false,
        content: null
    }
}

const Store = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);

    return (
        <GlobalContext.Provider value={[state,dispatch]}>
            {children}
        </GlobalContext.Provider>
    )
}

export default Store;