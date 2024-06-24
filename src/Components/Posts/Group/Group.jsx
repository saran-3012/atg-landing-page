import React, { useState } from 'react';
import './Group.css';

const Group = ({groupDetail}) => {
  const {groupPic, groupName} = groupDetail;
  const [isFollowed, setIsFollowed] = useState(false);
  const toggleFollow = () => {
    setIsFollowed(!isFollowed);
  };

  return (
    <div className='group_box'>
        <div className='group_innerbox'>
            <img src={groupPic} alt="Group Icon" />
            <span>{groupName}</span>
        </div>
        <button className={`btn group_follow_btn ${isFollowed? 'active': ''}`} onClick={toggleFollow}>{isFollowed? "Followed": "Follow"}</button>
    </div>
  )
}

export default Group