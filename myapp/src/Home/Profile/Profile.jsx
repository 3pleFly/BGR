import { Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import jsonProfile from './../../Data/Profile.json'
import './Profile.css'

const ProfileComp = ({ profileId, image_Profile, imageProfileLogo, en_name, heb_name, typeRule, aboutPerson }) => {

    const navigate = useNavigate();

    const moveToSpecificProfile = () => {
        sessionStorage['scrollYPosition'] = window.scrollY;
        navigate(`/profile/${profileId}`) // הכנס את ה-URL של האתר האחר
        // sessionStorage['yAxis'] = yAxis;
    }

    const createMarkup = (text) => {
        const formattedText = text ? text.replace(/\n/g, '<br />') : '';
        return { __html: formattedText };
    };

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>

                <img src={imageProfileLogo} alt="Image Profile logo" className='customImageProfileLogofoo' />
                <Typography className='customNameEnfoo'>{en_name}</Typography>
                <Typography className='custom_AdvCPAfoo'>{'Adv. (CPA)'}</Typography>
                <img className='customImageProfilefoo' src={image_Profile} alt="Image Profile" />
                <Typography className='customNameHebfoo'>{heb_name}</Typography>
                <Typography className='customSubNameHebfoo'>{typeRule}</Typography>
                <Typography
                    className='custom_textAboutPeoplefoo'
                    dangerouslySetInnerHTML={createMarkup(aboutPerson)} />

                <div className='CustomTextContinueReadingfoo' onClick={() => moveToSpecificProfile()}>
                    <img src={jsonProfile.Icon_Continue_Reading} alt="Icon to continue reading" style={{ cursor: 'pointer' }} />
                </div>

            </div>
        </div>
    )
}

export default ProfileComp