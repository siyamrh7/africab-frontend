import { useEffect, useMemo, useState } from "react";
import "./Header.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ResponsiveNavbar from "./ResponsiveHeader";
import { useDispatch, useSelector } from "react-redux";
import HeaderTop from "./HeaderTop";
import jwt from "jwt-decode";
import { UserLogBack } from "../redux/actions/AuthActions";
import { LatestPostGetAction, PostGetAction } from "../redux/actions/PostActions";

const Header = ({ communityTextDecoration }) => {
  const [show, setShow] = useState(false)
  const { userId, user, LogStatus, token, redirect ,language} = useSelector((state) => state.AuthReducers)
  const { search,location ,category} = useSelector((state) => state.PostsReducers)

  const newsletterStyle = useMemo(() => {
    return {
      textDecoration: communityTextDecoration,
    };
  }, [communityTextDecoration]);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem("token")
    dispatch(PostGetAction(search,location,category))
    dispatch(LatestPostGetAction())
    if (token) {
      const { userId } = jwt(token)
      dispatch(UserLogBack(userId, token))
    }
  }, [])

  useEffect(() => {
    if (redirect) {
      navigate(redirect)
    }
  }, [redirect])

  const logout = () => {
    localStorage.removeItem("token")
    dispatch({ type: "LOGOUT" })
    setShow(false)
  }

  const hideHandler = () => {
    setShow(false)
  }

  return (
    
    <div className="navbar">

      <div className="container">
        <NavLink to={"/"}>

          <img className="container-child" alt="" src="../frame-47@2x.png" />
        </NavLink>
        <div className="column">
          <NavLink to={"/home"} className="newsletter" style={newsletterStyle}>
            {language.start}
          </NavLink>
          <NavLink to={"/news-letter"} className="newsletter" style={newsletterStyle}>
          {language.newsletter}
          </NavLink>
          <NavLink to={"/community"} className="newsletter" style={newsletterStyle}>
          {language.community}

          </NavLink>
        </div>
        <div className="column1">
          <select onChange={(e)=>dispatch({type:"LANGUAGE",payload:e.target.value})}>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
          </select>
          {
            LogStatus ? (
              <>
                <div className="arrow">
                </div>
                <div className="master-header-user-menu" onClick={() => setShow(!show)}>
                  <img
                    className="i-icongearsix-settings-sw"
                    alt=""
                    src="../iicondotsthreevertical--swap.svg"
                  />
                  <div className="profile">Menu</div>
                </div>
              </>
            ) : (
              <>

                <NavLink to={"/signin"} className="button">
                  <div className="log-in">{language.login}
</div>
                </NavLink>
                <NavLink to={"/signup"} className="button1">
                  <div className="sign-up">            {language.signup}
</div>
                </NavLink>
              </>
            )
          }
          <div className={show ? "popupmenu" : "popupmenunone"}>
            <div className={show ? "items-container" : "popupmenunone"}>
              <div className="d-avatar-parent">
                <div className="d-avatar4">
                  <img
                    className="i-iconuser-swap"
                    alt=""
                    src="../iiconuser--swap.svg"
                  />
                  <div className="d-status-dot4">
                    <div className="badge4" />
                    <div className="status7">Status</div>
                  </div>
                </div>
                <div className="user-info">
                  <div className="oleg-ojo">{user.name}</div>
                  <div className="ux-architect">{user.email}</div>
                </div>
              </div>
              <div className="d-divider-border-separator3" />
              <div className="master-header-user-menu">
                <img
                  className="i-icongearsix-settings-sw"
                  alt=""
                  src="../iiconuser--swap1.svg"
                />
                <div className="profile">Messages</div>
              </div>
              <div className="master-header-user-menu" onClick={() => { navigate('/createpost'), hideHandler() }}>
                <img
                  className="i-icongearsix-settings-sw"
                  alt=""
                  src="../iiconglobe--swap.svg"
                />

                <div className="profile">Make a Post</div>
              </div>
              <div className="master-header-user-menu">
                <img
                  className="i-icongearsix-settings-sw"
                  alt=""
                  src="../iiconclockcounterclockwise--swap.svg"
                />
                <div className="profile">Activity log</div>
              </div>
              <div className="master-header-user-menu" onClick={() => { navigate('/createnews'), hideHandler() }}>
                <img
                  className="i-icongearsix-settings-sw"
                  alt=""
                  src="../iicongearsixsettings--swap.svg"
                />
                <div className="profile">Create News</div>
              </div>
              <div className="d-divider-border-separator3" />
              <div className="master-header-user-menu">
                <img
                  className="i-icongearsix-settings-sw"
                  alt=""
                  src="../iiconinfo--swap.svg"
                />
                <div className="profile">Help</div>
              </div>
              <div className="master-header-user-menu" onClick={logout}>
                <img
                  className="i-icongearsix-settings-sw"
                  alt=""
                  src="../iiconsignout--swap.svg"
                />
                <div className="profile">Log out</div>
              </div>
            </div>

          </div>
        </div>
        <ResponsiveNavbar LogStatus={LogStatus} logout={logout} />
      </div>

    </div>
  );
};

export default Header;
