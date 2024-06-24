import React, { useState } from 'react';
import './PostNav.css';
import downArrow from '../../../Assets/down_arrow.svg';
import joinGroup from '../../../Assets/join_group.svg';
import leaveGroup from '../../../Assets/leave_group.svg';

const PostNav = ({openAuth}) => {
  const [activeItem, setActiveItem] = useState('0');

  const handleClick = (e) => {
    setActiveItem(e.target.dataset.index);
  };

  const [isGroupJoined, setIsGroupJoined] = useState(false);

  const toggleGroupJoin = () => {
    setIsGroupJoined(!isGroupJoined);
  };

  const menuItems = [
    { index: '0', label: 'All Posts(32)' },
    { index: '1', label: 'Article' },
    { index: '2', label: 'Event' },
    { index: '3', label: 'Education' },
    { index: '4', label: 'Job' }
  ];

  return (
    <nav className='postnav'>
      <div className='post_mnav'>
        <a>Posts(368)</a>
        <button className='btn' onClick={openAuth}>
          <span>Filter: All</span>
          <img src={downArrow} alt="Arrow" />
        </button>
      </div>
      <div className='post_pnav'>
        <ul className='pnav_menu'>
          {menuItems.map(item => (
            <li key={item.index}>
              <a
                className={`pnav_menu_items ${activeItem === item.index ? 'active' : ''}`}
                data-index={item.index}
                onClick={handleClick}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='pnav_btns'>
          <button className="btn bg-grey">
            <span>Write a Post</span>
            <img src={downArrow} alt="" />
          </button>
          <button className={`btn bg-blue ${isGroupJoined? 'joined': ''}`} onClick={() => {openAuth(); toggleGroupJoin();}}>
            {
              isGroupJoined?
              (<img src={leaveGroup} alt="Leave" />)
              :
              (<img src={joinGroup} alt="Join" />)
            }
            <span >
            {
              isGroupJoined?
              ("Leave Group")
              :
              ("Join Group")
            }
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default PostNav;
