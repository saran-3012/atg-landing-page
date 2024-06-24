import React from 'react';
import './SignUp.css';
import PasswordBox from '../PasswordBox/PasswordBox';
import facebookLogo from '../../../Assets/facebook_logo.svg';
import googleLogo from '../../../Assets/google_logo.svg';

const SignUp = ({submitExit, toggleAuth}) => {
  return (
    <form className='signup'>
        <div className='signup_container'>
            <div className='signup_namebox'>
              <input className='signup_name' type="text" placeholder='First Name'/>
              <input className='signup_name' type="text" placeholder='Last Name'/>
            </div>
            <input className='signup_email' type="email" placeholder='Email' />
            <PasswordBox passPlaceholder={"Password"}/>
            <PasswordBox passPlaceholder={"Confirm Password"}/>
        </div>
        <div className='auth_submitbox'>
            <button className='btn auth_submit' onClick={submitExit}>Create Account</button>
            <span onClick={toggleAuth}>or, Sign In</span>
        </div>
        <div className='other_authbox'>
            <button className='btn other_authbtn' onClick={submitExit}>
                <img src={facebookLogo} alt="Facebook" />
                <span>Sign in with Facebook</span>
            </button>
            <button className='btn other_authbtn' onClick={submitExit}>
                <img src={googleLogo} alt="Google" />
                <span>Sign in with Google</span>
            </button>
        </div>
    </form>
  )
}

export default SignUp