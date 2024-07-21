import React, { useState } from 'react';
import imageBGR_B from './../../Images/BGR_B.png';
import imageBGR_G from './../../Images/BGR_G.png';
import imageBGR_R from './../../Images/BGR_R.png';
import './Logo.css';

const LogoComp = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div style={{ display: 'flex', justifyContent: 'center',textAlign:'center', alignItems: 'center', height:'100vh' }}>
            <button className={`CustomButton_BGR_B ${isHovered ? 'move-CustomButton_BGR_B ' : ''}`}>
                <img src={imageBGR_B} alt="Custom Button B" />
            </button>
            <button
                className='CustomButton_BGR_G'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src={imageBGR_G} alt="Custom Button G" />
            </button>
            <button className={`CustomButton_BGR_R ${isHovered ? 'move-CustomButton_BGR_R ' : ''}`}>
                <img src={imageBGR_R} alt="Custom Button R" />
            </button>
        </div>
    );
}

export default LogoComp;
