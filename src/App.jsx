import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Posts from './Components/Posts/Posts';
import Popup from './Components/Popup/Popup';

function App() {

  const body = document.querySelector('body');

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const openAuth = () => {
    if(isSignedIn) return;
    togglePopup();
  };

  useEffect(() => {
    body.style.overflow = isPopupOpen? 'hidden': 'auto';
  }, [isPopupOpen]);


  const [isPopupSignin, setIsPopupSignin] = useState(false);
  const toggleAuth = () => {
    setIsPopupSignin(!isPopupSignin);
  };

  

  const [isSignedIn, setIsSignedIn] = useState(false);
  

  return (
    <>
      <Navbar isSignedIn={isSignedIn} togglePopup={togglePopup}/>
      <Home isSignedIn={isSignedIn} openAuth={openAuth}/>
      <Posts isSignedIn={isSignedIn} openAuth={openAuth} />
      {
        isPopupOpen && (<Popup togglePopup={togglePopup} isPopupSignin={isPopupSignin} setIsSignedIn={setIsSignedIn} toggleAuth={toggleAuth}/>)
      }
    </>
  );
}

export default App;
