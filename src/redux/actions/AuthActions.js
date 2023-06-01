import axios from 'axios'
export const UserRegAction=(state)=>async(dispatch)=>{
    try {
        const {data}=await axios.post(`${process.env.REACT_APP_BACKEND_URL}signup`,{...state})
        dispatch({type:"USER_REG",payload:data})
    } catch (error) {
        dispatch({type:"ERROR",payload:error})
    }
}

export const UserLogAction=(state)=>async(dispatch)=>{
    try {
        
        const {data}=await axios.post(`${process.env.REACT_APP_BACKEND_URL}login`,{...state})
        dispatch({type:"USER_LOG",payload:data})
       localStorage.setItem("token",data.token)
        
    } catch (error) {
        dispatch({type:"ERROR",payload:error})
    }
}



export const UserLogBack=(state,token)=>async(dispatch)=>{
    try {
        
        const {data}=await axios.get(`${process.env.REACT_APP_BACKEND_URL}${state}`)
        dispatch({type:"USER_LOG_BACK",payload:data,token})
        
    } catch (error) {
        dispatch({type:"ERROR",payload:error})
    }
}