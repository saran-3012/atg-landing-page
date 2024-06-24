import React from 'react';
import './SignIn.css';
import PasswordBox from '../PasswordBox/PasswordBox';
import facebookLogo from '../../../Assets/facebook_logo.svg';
import googleLogo from '../../../Assets/google_logo.svg';

const SignIn = ({submitExit, toggleAuth}) => {
  return (
    <form className='signin'>
        <div className='signin_container'>
            <input className='signin_email' type="email" placeholder='Email' />
            <PasswordBox passPlaceholder={"Password"}/>
        </div>
        <div className='auth_submitbox'>
            <button className='btn auth_submit' onClick={submitExit}>Sign In</button>
            <span onClick={toggleAuth}>or, Create Account</span>
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
        <span className='forget_password'>Forget Password?</span>
    </form>
  )
}

export default SignIn