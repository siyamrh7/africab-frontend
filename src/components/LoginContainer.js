import { Link } from "react-router-dom";
import "./LoginContainer.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { UserLogAction } from "../redux/actions/AuthActions";
const LoginContainer = () => {
const dispatch=useDispatch()
  const [state, setState] = useState({ email: "", password: "" })
  const onchangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const onsubmitHandler = async () => {
    dispatch(UserLogAction(state))
    // try {
      
    //   const data = await axios.post(process.env.REACT_APP_BACKEND_URL + "login", { ...state })
    //   alert(data.data.message)

    // } catch (error) { 
    //   console.log(error)
    //   alert(error.response.data.message)
    // }
  }
  return (
    <div className="login-with-account-parent">

      <div className="login-with-account">Login with account</div>
      <div className="email">Email *</div>
      <input onChange={onchangeHandler}  name="email" className="frame-child31" type={"email"} />
      <div className="password">Password *</div>
      <div className="rectangle-parent">
        <input onChange={onchangeHandler}  name="password" className="group-inner" type={"password"} />
        {/* <img
          className="mdieye-off-outline-icon"
          alt=""
          src="../mdieyeoffoutline.svg"
        /> */}
      </div>
      <div className="must-be-at">Must be at Least 8 characters</div>
      <div onClick={onsubmitHandler} className="login-wrapper" style={{ cursor: "pointer" }}>
        <div className="login" >Login</div>
      </div>
      <div className="google-logo-parent" style={{ cursor: "pointer" }}>
        <img className="google-logo-icon" alt="" src="../google-logo@2x.png" />
        <div className="login" >Login with Google</div>
      </div>
      <div className="forget-your-password-parent">
        <div className="forget-your-password" style={{ cursor: "pointer" }}> Forget your password?</div>
        <Link to={"/signup"} className="signup-for-new" style={{ cursor: "pointer" }}>Signup Now</Link>
      </div>
    </div>
  );
};

export default LoginContainer;
