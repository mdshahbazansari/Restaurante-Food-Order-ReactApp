import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState("Login");

  return (
    <div className='loginPopup' id='loginPopup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-heading">
            <h2>{currentState}</h2>
            {/* <img  src={assets.cross_icon} alt="" /> */}
            <i onClick={()=>setShowLogin(false)} class="fa-solid fa-xmark"></i>
        </div>
        <div className="login-popup-input">
            {currentState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
            <input type="email" placeholder='Your Email' required />
            <input type="Password" placeholder='Password' required />
        </div>
        <button>{currentState==="Sign Up"?"Create account":'Login'}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>i agree to the term of use & privacy policy.</p>
        </div>
        {currentState==="Login"
            ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>
            :<p>Alread have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
