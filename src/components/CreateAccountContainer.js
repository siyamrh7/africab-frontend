import "./LoginContainer.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { UserRegAction } from "../redux/actions/AuthActions";

const CreateAccountContainer = () => {
  const [state, setState] = useState({ name: "", email: "", phone: "", password: "" })
  const onchangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const dispatch=useDispatch()
  const onsubmitHandler = async () => {
    dispatch(UserRegAction(state))
    // try {
      
    //   const data = await axios.post(process.env.REACT_APP_BACKEND_URL + "signup", { ...state })
    //   alert(data.data.message)

    // } catch (error) { 
    //   alert(error.response.data.message)
    // }
  }
  return (
    <div className="signup-with-account-parent">

      <div className="login-with-account">Create New account</div>
      <div className="email">Name</div>
      <input onChange={onchangeHandler} name="name" className="frame-child31" type={"text"} />
      <div className="email">Phone</div>
      <input onChange={onchangeHandler} name="phone" className="frame-child31" type={"text"} />
      <div className="email">Email</div>
      <input onChange={onchangeHandler} name="email" className="frame-child31" type={"email"} />
      <div className="password">Password</div>
      <div className="rectangle-parent">
        <input onChange={onchangeHandler} name="password" className="group-inner" type={"password"} />
        {/* <img
          className="mdieye-off-outline-icon"
          alt=""
          src="../mdieyeoffoutline.svg"
        /> */}
      </div>
      <div className="must-be-at">Must be at Least 8 characters</div>
      <div className="login-wrapper" style={{ cursor: "pointer" }} onClick={onsubmitHandler}>
        <div className="login" >Create New Account</div>
      </div>
      {/* <div className="google-logo-parent" style={{cursor:"pointer"}}>
        <img className="google-logo-icon" alt="" src="../google-logo@2x.png" />
        <div className="login" >Signup with Google</div>
      </div> */}
      <div className="forget-your-password-parent">
        <Link to={"/sellersignup"} className="forget-your-password" style={{ cursor: "pointer", textDecoration: "none", color: "purple" }}>Join as a seller?</Link>
        <Link to={"/signin"} className="signup-for-new" style={{ cursor: "pointer" }}>Signin to your account</Link>
      </div>
    </div>
  );
};

export default CreateAccountContainer;
