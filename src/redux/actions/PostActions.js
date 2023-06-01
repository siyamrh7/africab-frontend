import axios from "axios";


export const PostCreateAction = (state, token) => async (dispatch) => {

    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}createpost`, state, {
            headers: {
                'Authorization': token,
                'Content-Type': 'multipart/form-data'

            }
        })
        dispatch({ type: "CREATE_POST", payload: data })
    } catch (error) {
        dispatch({ type: "ERROR", payload: error })

    }
}

export const PostGetAction = (search, location, category) => async (dispatch) => {

    try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}getposts?name=${search}&location=${JSON.stringify(location)}&category=${encodeURIComponent(category)}`)
        dispatch({ type: "GET_POSTS", payload: data.businesses })
    } catch (error) {
        dispatch({ type: "ERROR", payload: error })

    }
}
export const LatestPostGetAction = () => async (dispatch) => {

    try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}getposts`)
        dispatch({ type: "GET_LATEST_POSTS", payload: data.businesses })
    } catch (error) {
        dispatch({ type: "ERROR", payload: error })

    }
}
export const SinglePostAction = (id) => async (dispatch) => {

    try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}getpost/${id}`)
        dispatch({ type: "GET_SINGLE_POST", payload: data.business })
    } catch (error) {
        dispatch({ type: "ERROR", payload: error })

    }
}