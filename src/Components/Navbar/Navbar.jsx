import React from 'react';
import './Navbar.css';
import appLogo from '../../Assets/windows_icon.svg';
import mobileIcons from '../../Assets/mobile_icons.svg';
import profileIcon from '../../Assets/profile_pic.svg';
import downArrow from '../../Assets/down_arrow.svg';
import searchIcon from '../../Assets/searchBtn.svg'

const Navbar = ({isSignedIn, togglePopup}) => {

  return (
    <header className='navbar'>
      <a href='/' className='navbar__logo'>
        <img src={appLogo} alt="App Logo" />
      </a>
      <div className="navbar__search">
        <img src={searchIcon} alt="Search" />
        <input type="search" placeholder='Search for your favorite groups in ATG'/>
      </div>
      <div className='navbar__pauth'>
        {
          isSignedIn?
           <div>
            <img src={profileIcon} alt="Pfp" />
            <span>Siddharth Goyal</span>
            <img src={downArrow} alt="Arrow" />
           </div>
           :
           <div>
            <p>Create account. <span onClick={togglePopup}>It’s free!</span></p>
            <img src={downArrow} alt="Arrow" />
           </div>
        }
      </div>
      <a className='navbar__mauth' onClick={togglePopup}>
        <img src={mobileIcons} alt="Navbar Icon" />
      </a>
    </header>
  )
}

export default Navbar;