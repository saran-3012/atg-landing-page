import React from 'react';
import './Posts.css';
import PostNav from './PostNav/PostNav';
import AllPosts from './AllPosts/AllPosts';
import PostAside from './PostAside/PostAside';
import mPencilIcon from '../../Assets/mpencil_icon.svg';

const Posts = ({isSignedIn, openAuth}) => {

  return (
    <section className='posts'>
      <PostNav isSignedIn={isSignedIn} openAuth={openAuth}/>
      <div className='Posts__container'>
        <AllPosts />
        <PostAside isSignedIn={isSignedIn}/>
      </div>
      <div className='mobile_pencil_btn'>
        <img src={mPencilIcon} alt="Write" />
      </div>
    </section>
  )
}

export default Posts;