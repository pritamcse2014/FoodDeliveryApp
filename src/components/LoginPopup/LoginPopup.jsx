import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {
    const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="login-popup">
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {
                    currentState === "Login" 
                    ? 
                    <></> 
                    : 
                    <input type="text" name="name" id="name" placeholder="Enter Your Name" required />
                }
                <input type="email" name="email" id="email" placeholder="Enter Your Email" required />
                <input type="password" name="password" id="password" placeholder="Enter Your Password" required />
            </div>
            <button>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" name="checkbox" id="checkbox" required />
                <p>By continuing i agree to the terms of use & privacy policy.</p>
            </div>
            {
                currentState === "Login" 
                ? 
                <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
                : 
                <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup