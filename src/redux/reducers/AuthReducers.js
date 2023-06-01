import { toast } from 'react-toastify'
import { languages } from '../../Constants';
import jwt from 'jwt-decode'
import { ToastsError, ToastsSuccess } from '../ToastHandler';
var InitState = {
    token: null,
    LogStatus: false,
    userId: "",
    email: "",
    user: {},
    redirect: '',
    language:{    "start":"Start a search",
    "newsletter":"Newsletter",
    "community":"Community",
    "login":"Login",
    "signup":"Signup",
    "find":"Find information easily",
    "thousands":"Thousands of information in different sectors are waiting for you.",
    "what":"What information are you looking for ?",
    "popular":"Popular",
    "categories":"Categories",
    "latestnews":"Latest News from Newsletter",
    "seemore":"See more relevant listings, find what you’re looking for quicker, and more! ",
    "latestPost":"Latests Post",
    "subscribe":"Subscribe",
    "ready":"Ready to get started?",
    "kick":"KICK START FUTURE",
    "search":"Search",
    "browse":"Browse all in Search Page"}
}

export const AuthReducers = (state = InitState, action) => {

    switch (action.type) {
        case "USER_REG":
            ToastsSuccess(action.payload)
            return { ...state, RegStatus: action.payload.status }
        case "USER_LOG":
            ToastsSuccess(action.payload)
            var token = action.payload.token
            const { userId, email } = jwt(token)
            return { ...state, token: action.payload.token, LogStatus: token && true, userId: userId, email: email, user: action.payload.user, redirect: "/" };
        case "USER_LOG_BACK":
            const user = action.payload.user
            return { ...state, user: action.payload.user, LogStatus: action.payload.user && true, token: action.token, userId: user._id, email: user.email }
        case "LOGOUT":
            return {
                ...state, LogStatus: false, userId: "",
                email: "",
                user: {},
                redirect: '/signin',
                token: null,
            };
        case "ERROR":
            ToastsError(action.payload.response)
            return state;
        case "LANGUAGE":
            const language=languages[action.payload]
            return {...state,language:language};
        default:
            return state
    }
}



