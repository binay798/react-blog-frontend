
const reducer = (state,action) => {
    switch(action.type) {
        case 'AUTH_USER':
            return {
                ...state,
                user: {
                    ...action.payload
                },
                auth: true
            };
        case 'LOGOUT':
            return {
                ...state,
                auth:false,
                user: null
            }
        case 'GET_ALL_POSTS':
            return {
                ...state,
                allPosts: [...action.payload.posts]
            };
        case 'STORE_SELECTED_POST':

            return {
                ...state,
                selectedPost: action.payload.post
            };
        case 'STORE_SELECTED_CATEGORY_POSTS':
            return {
                ...state,
                selectedCategoryPosts: [...action.payload.posts]
            };
        case 'HIDE_NOTIFICATION':
            return {
                ...state,
                showNotification: {
                    ...state.showNotification,
                    status: false,
                    content: null
                }
            }
        case 'SHOW_NOTIFICATION':
            return {
                ...state,
                showNotification: {
                    status: true,
                    content: action.payload
                }
            }
        default:
            return state;
    }
}

export default reducer;