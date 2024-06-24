import React from 'react';
import './PostAside.css';
import AllGroups from '../AllGroups/AllGroups';
import inputLocationIcon from '../../../Assets/input_location_icon.svg';
import pencilIcon from '../../../Assets/edit_pencil.svg'; 
import infoIcon from '../../../Assets/info_icon.svg';
import thumbsupIcon from '../../../Assets/thumbsup_icon.svg';


const PostAside = ({isSignedIn}) => {
  return (
    <aside className='postaside'>
      <div className='postaside__inputbox'>
        <img src={inputLocationIcon} alt="Location" />
        <input className='location_input' defaultValue={"Noida, India"} placeholder='Location' type="text" />
        <img src={pencilIcon} alt="Pencil" />
      </div>
      <div className='postaside__notice'>
        <img src={infoIcon} alt="Info" />
        <p>Your location will help us serve better and extend a personalised experience.</p>
      </div>
      <div className={`postaside__groups ${isSignedIn? 'show': ''}`}>
        <div className='groups_header'>
          <img src={thumbsupIcon} alt="Thumbs Up" />
          <span>Recommended Groups</span>
        </div>
        <AllGroups />
      </div>
    </aside>
  )
}

export default PostAside