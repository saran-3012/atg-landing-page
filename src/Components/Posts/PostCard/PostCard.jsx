import React from 'react';
import './PostCard.css';
import DropdownButton from '../../DropdownButton/DropdownButton';
import threeDots from '../../../Assets/triple_dot_menu.svg' ;
import calanderIcon from '../../../Assets/calander_icon.svg';
import jobIcon from '../../../Assets/job_icon.svg';
import locationIcon from '../../../Assets/location_icon.svg';
import eyeIcon from '../../../Assets/eye_icon.svg';
import shareIcon from '../../../Assets/share_icon.svg';

const PostCard = ({postInfo}) => {
  const {postPic, postType, postTitle, postText, postDate, postCompany, postLocation, postButton, userPic, userName, postViews} = postInfo;
  return (
    <div className='postcard'>
       {postPic && (<img className='postcard__img' src={postPic} alt='Post'/>)}
       <div className='postcard__container'>
        <span className='postcard__type'>{postType}</span>
        <div className='postcard__box'>
          <h3 className='postcard__title'>{postTitle}</h3>
          <DropdownButton btnIcon={threeDots} dropdownOptions={["Edit", "Report", "Delete"]}/>
        </div>
        {postText && (<article className='postcard__text'>{postText}</article>)}
        <div className='postcard__metabox'>
          {postDate && (
            <div className='postcard__metainfo'>
              <img src={calanderIcon} alt="Date" />
              <span>{postDate}</span>
            </div>
          )}
          {postCompany && (
            <div className='postcard__metainfo'>
              <img src={jobIcon} alt="Company" />
              <span>{postCompany}</span>
            </div>
          )}
          {postLocation && (
            <div className='postcard__metainfo'>
              <img src={locationIcon} alt="Location" />
              <span>{postLocation}</span>
            </div>
          )}
        </div>
        {postButton && (<button className='btn postcard__btn' style={{"--btn-clr": postButton.btnColor}}>{postButton.btnName}</button>)}
        <div className='postcard__usercontainer'>
          <div className='postcard__userbox'>
            <img src={userPic} alt="Profile Pic" />
            <div className='postuser_box'>
              <span className='post_username'><strong>{userName}</strong></span>
              <span className='post_mviews'>{postViews}</span>
            </div>
          </div>
          <div className='postcard__insightsbox'>
            <div className='views_box'>
              <img src={eyeIcon} alt="Views" />
              <span>{postViews}</span>
            </div>
            <button className='btn share_btn'>
              <img src={shareIcon} alt="Share" />
              <span>Share</span>
            </button>
          </div>
        </div>
       </div>
    </div>
  )
}

export default PostCard;