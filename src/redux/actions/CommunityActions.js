import axios from "axios";


export const QuestionCreateAction = (state, token) => async (dispatch) => {

    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}question`, state, {
            headers: {
                'Authorization': token,
                'Content-Type': 'multipart/form-data'

            }
        })
        dispatch({ type: "CREATE_QUESTION", payload: data })
    } catch (error) {
        dispatch({ type: "ERROR", payload: error })

    }
}

export const QuestionGetAction = (keyword) => async (dispatch) => {

    try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}question?keyword=${keyword}`)
        dispatch({ type: "GET_QUESTION", payload: data.questions })
    } catch (error) {
        dispatch({ type: "ERROR", payload: error })

    }
}

export const SingleQuestionAction = (id) => async (dispatch) => {

    try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}getnews/${id}`)
        dispatch({ type: "GET_SINGLE_QUESTION", payload: data.business })
    } catch (error) {
        dispatch({ type: "ERROR", payload: error })

    }
}