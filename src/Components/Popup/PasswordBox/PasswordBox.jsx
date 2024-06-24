import React, { useState } from 'react';
import './PasswordBox.css';
import eyeIcon from '../../../Assets/eye_icon.svg';
import eyeCrossIcon from '../../../Assets/eye_cross_icon.svg';

const PasswordBox = ({passPlaceholder}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePassword = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="password_box">
            <input type={isPasswordVisible? 'text': 'password'} placeholder={passPlaceholder} />
            <img src={isPasswordVisible? eyeIcon: eyeCrossIcon} alt="Toggle" onClick={togglePassword}/>
        </div>
    )
}

export default PasswordBox