import React from 'react';
import './Popup.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import mExitIcon from '../../Assets/mexit_icon.svg';
import pExitIcon from '../../Assets/pexit_icon.svg';
import authImg from '../../Assets/auth_img.svg';

const Popup = ({togglePopup, isPopupSignin, toggleAuth, setIsSignedIn}) => {
  const submitExit = (e) => {
    e.preventDefault();
    setIsSignedIn(true);
    togglePopup();
  };

  return (
    <div className='popup' onClick={togglePopup}>
        <div className='mauth_model' onClick={(e) => e.stopPropagation()}>
            {
                isPopupSignin?
                (   
                    <>
                        <div className='mauth_headerbox'>
                            <h2>Welcome back!</h2>
                            <button onClick={togglePopup}>
                                <img src={mExitIcon} alt="Exit" />
                            </button>
                        </div>
                        <SignIn submitExit={submitExit} toggleAuth={toggleAuth}/>
                    </>
                )
                :
                (
                    <>
                        <div className='mauth_headerbox'>
                            <h2>Create Account</h2>
                            <button onClick={togglePopup}>
                                <img src={mExitIcon} alt="Exit" />
                            </button>
                        </div> 
                        <SignUp submitExit={submitExit} toggleAuth={toggleAuth}/>
                        <article className='terms_conditions'>By signing up, you agree to our Terms & conditions, Privacy policy</article>
                    </>
                )
            }
            
        </div>
        <div className='pauth_model' onClick={(e) => e.stopPropagation()}>
            <div className='pauth_tagline'>
                <p>
                    Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                </p>
                <button onClick={togglePopup}>
                    <img  src={pExitIcon} alt="Exit" />
                </button>
            </div>
            <div className='pauth_container'>
            {
                isPopupSignin?
                (   
                    <>
                        <div className='pauth_credentials'>
                            <h2>Sign In</h2>
                            <SignIn submitExit={submitExit} toggleAuth={toggleAuth}/>
                        </div>
                        <div className='pauth_imgbox'>
                            <p className='switch_text'>Don’t have an account yet? <span onClick={toggleAuth}>Create new for free!</span></p>
                            <img className='auth_img' src={authImg} alt="People" />
                        </div>
                    </>
                )
                :
                (
                    <>
                        <div className='pauth_credentials'>
                            <h2>Create Account</h2>
                            <SignUp submitExit={submitExit} toggleAuth={toggleAuth}/>
                        </div>
                        <div className='pauth_imgbox'>
                            <p className='switch_text'>Already have an account? <span onClick={toggleAuth}>Sign In</span></p>
                            <img className='auth_img' src={authImg} alt="People" />
                            <article className='terms_conditions'>By signing up, you agree to our Terms & conditions, Privacy policy</article>
                        </div>
                    </>
                )
            }
            </div>
        </div>
    </div>
  )
}

export default Popup;