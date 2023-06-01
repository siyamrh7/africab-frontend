import React, { useState } from 'react'
import './SellerSignup.scss'
import Subscription from '../Subscription'
const SellerSignup = () => {
  const [state,setState]=useState(false)
  if(state)return (
    <Subscription/>
  )
  return (
    <div className="container-sellersignup">
    <div className="title">Seller Registration</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required/>
          </div>
          <div className="input-box">
            <span className="details">Business Name</span>
            <input type="text" placeholder="Enter your Business Name" required/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" required/>
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" required/>
          </div>
         
          <div className="input-box">
            <span className="details">Password</span>
            <input type="text" placeholder="Enter your password" required/>
          </div>
          <div className="input-box">
            <span className="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required/>
          </div>
        </div>
        <div className="gender-details">
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span className="gender-title">Choose Payment Method</span>
          <div className="category">
            <label for="dot-1">
            <span className="dot one"></span>
            <span className="gender">Visa/Master Card</span>
          </label>
          <label for="dot-2">
            <span className="dot two"></span>
            <span className="gender">Debit/Creadit Card</span>
          </label>
          <label for="dot-3">
            <span className="dot three"></span>
            <span className="gender">Start Free Trial</span>
            </label>
          </div>
        </div>
        <div className="button-reg" onClick={()=>setState(true)}>
          <input type="submit" value="NEXT"/>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SellerSignup