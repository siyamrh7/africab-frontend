import axios from "axios";


export const NewsCreateAction = (state, token) => async (dispatch) => {

    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}createnews`, state, {
            headers: {
                'Authorization': token,
                'Content-Type': 'multipart/form-data'

            }
        })
        dispatch({ type: "CREATE_NEWS", payload: data })
    } catch (error) {
        dispatch({ type: "ERROR", payload: error })

    }
}

export const NewsGetAction = () => async (dispatch) => {

    try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}getnews`)
        dispatch({ type: "GET_NEWS", payload: data.news })
    } catch (error) {
        dispatch({ type: "ERROR", payload: error })

    }
}

export const SingleNewsAction = (id) => async (dispatch) => {

    try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}getnews/${id}`)
        dispatch({ type: "GET_SINGLE_NEWS", payload: data.business })
    } catch (error) {
        dispatch({ type: "ERROR", payload: error })

    }
}