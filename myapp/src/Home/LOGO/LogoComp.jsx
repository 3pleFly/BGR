import React, { useState } from 'react';
import './Logo.css';
import jsonProfile from './../../Data/Profile.json'

const LogoComp = () => {

    return (
        // <div style={{ display: 'flex', justifyContent: 'center',textAlign:'center', alignItems: 'center', height:'60vh' }}>
        <div style={{ position: 'relative' }}>
            <img className='customMainLogoBGR' src={jsonProfile.MainLogo.LogoBGR} alt="Image logo B" />
            <img className='customMainsubLogo1' src={jsonProfile.MainLogo.SubLogo1} alt="Image logo R" />
            <text className='customMainsubLogo2'>מיסוי מקרקעין מסים עקיפים ומס הכנסה</text>
            <img className='customMainIconDown' src={jsonProfile.MainLogo.IconDown} alt="Image for scroll down" />
        </div>
    );
}

export default LogoComp;
