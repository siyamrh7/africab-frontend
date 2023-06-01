import { ToastsSuccess } from "../ToastHandler"

const Initstate = {
    questions: [],
    questiont: {},
}

export const CommunityReducers = (state = Initstate, action) => {
    switch (action.type) {
        case "CREATE_QUESTION":
            ToastsSuccess(action.payload)
            return state
        case "GET_QUESTION":
            return { ...state, questions: action.payload }
        case "SET_SINGLE_QUESTION":
            return { ...state, questiont: action.payload }
       
        default:
            return state
    }
}