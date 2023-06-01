import { ToastsSuccess } from "../ToastHandler"

const Initstate = {
    posts: [],
    post: {},
    search: "",
    location: "",
    category: "",
    latest:[],
}

export const PostsReducers = (state = Initstate, action) => {
    switch (action.type) {
        case "CREATE_POST":
            ToastsSuccess(action.payload)
            return { ...state, posts: [...state.posts, action.payload.business] }
        case "GET_POSTS":
            return { ...state, posts: action.payload  }
            case "GET_LATEST_POSTS":
                return { ...state,latest:action.payload.slice(0,12) }
        case "GET_SINGLE_POST":
            return { ...state, post: action.payload }
        case "SEARCH_CHANGE":
            return { ...state, search: action.payload }
        case "LOCATION_CHANGE":
            return { ...state, location: action.payload }
        case "CATEGORY_CHANGE":
            return { ...state, category: action.payload }
        default:
            return state
    }
}