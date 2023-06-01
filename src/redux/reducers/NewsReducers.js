import { ToastsSuccess } from "../ToastHandler"

const Initstate = {
    news: [],
    newt: {},
}

export const NewsReducers = (state = Initstate, action) => {
    switch (action.type) {
        case "CREATE_NEWS":
            ToastsSuccess(action.payload)
            return { ...state, news: [...state.news, action.payload.newsletter] }
        case "GET_NEWS":
            return { ...state, news: action.payload  ,newt:action.payload[action.payload.length-1]}
        case "SET_SINGLE_NEWS":
            return { ...state, newt: action.payload }
       
        default:
            return state
    }
}