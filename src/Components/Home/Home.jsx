import React from 'react';
import './Home.css';
import backArrow from '../../Assets/back_arrow.svg'

const Home = ({isSignedIn, openAuth}) => {
  return (
    <main className='home'>
      <div className='home__btns'>
        <button className='btn back_btn'><img src={backArrow} alt="Back" /></button>
        <button className='btn group_btn' onClick={openAuth}>
          <span>{isSignedIn? "Leave Group": "Join Group"}</span>
        </button>
      </div>
      <div>
        <h1 className='home__header'>Computer Engineering</h1>
        <p className='home__text'>142,765 Computer Engineers follow this</p>
      </div>
    </main>
  )
}

export default Home;