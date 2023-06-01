import { bubble as Menu } from 'react-burger-menu'
import { useMemo } from "react";

import React from 'react';
import './responsiveheader.css';
import { NavLink } from 'react-router-dom';
const ResponsiveNavbar=({LogStatus,logout})=> {

 
  const showSettings=()=>{

  }

 
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
<div id='outer-container'>


      <Menu right noOverlay width={"50vw"} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <NavLink to={"/home"} className="newsletter" >
        Start a search
          </NavLink>
          <NavLink to={"/news-letter"} className="newsletter" >
            Newsletter
          </NavLink>
          <NavLink to={"/community"} className="newsletter" >
          Community
          </NavLink>
          {
            LogStatus ? (
              <>
                  <NavLink to={"/home"} className="newsletter" >
        Profile
          </NavLink>
          <NavLink to={"/chats"} className="newsletter" >
            Messages
          </NavLink>
          <NavLink to={"/createpost"} className="newsletter" >
            Make A Post
          </NavLink>
          <NavLink to={"/createnews"} className="newsletter" >
            Create News
          </NavLink>
          <NavLink to={"/activity"} className="newsletter" >
          Activity
          </NavLink>
          <div className="button" onClick={logout}>
            <div className="log-in">Log out</div>
          </div>
              </>
            ): (
              <>
          <NavLink to={"/comming"} className="button">
            <div className="log-in">Log in</div>
          </NavLink>
          <NavLink   to={"/comming"} className="button1">
            <div className="sign-up">Sign up</div>
          </NavLink>
              </>
            )
          }
      </Menu>
</div>
    );
  }
export default ResponsiveNavbar;