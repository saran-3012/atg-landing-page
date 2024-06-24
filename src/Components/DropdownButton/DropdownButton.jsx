import React, { useState } from 'react';
import './DropdownButton.css';

const DropdownButton = ({btnIcon, btnName, dropdownOptions}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`dropdown ${isDropdownOpen? 'active':''}`} onClick={handleDropdownClick}>
        <button className='btn dropdown-btn'>
            {btnName && (<span>btnName</span>)}
            {btnIcon && (<img src={btnIcon} alt='Button Icon'/>)}
        </button>
        <ul className='dropdown-menu'>
            {
                dropdownOptions.map((option, index) => (
                    <li className='dropdown_options' key={index}>{option}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default DropdownButton;