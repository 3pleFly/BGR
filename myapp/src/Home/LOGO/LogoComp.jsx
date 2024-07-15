import React from 'react';
import imageBGR_B from './../../Images/BGR_B.png';
import imageBGR_G from './../../Images/BGR_G.png';
import imageBGR_R from './../../Images/BGR_R.png';
import './Logo.css';

const LogoComp = () => {
    return (
        <div className="container">
            <button className='CustomButton_BGR_G'>
                <img src={imageBGR_G} alt="Custom Button G" />
            </button>

            <button className='CustomButton_BGR_B'>
                <img src={imageBGR_B} alt="Custom Button B" />
            </button>

            <button className='CustomButton_BGR_R'>
                <img src={imageBGR_R} alt="Custom Button R" />
            </button>
        </div>
    );
}

export default LogoComp;
