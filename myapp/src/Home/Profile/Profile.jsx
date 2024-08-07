import React from 'react'
import Typography from '@mui/material/Typography';
import './Profile.css'

import jsonProfile from './../../Data/Profile.json'
import { useNavigate } from 'react-router-dom';

const Profile = ({ profileId, image_Profile, imageProfileLogo, en_name, heb_name, typeRule, aboutPerson }) => {

    const navigate = useNavigate();

    const moveToSpecificProfile = () => {
        sessionStorage['scrollYPosition'] = window.scrollY;
        navigate(`/profile/${profileId}`) // הכנס את ה-URL של האתר האחר
        // sessionStorage['yAxis'] = yAxis;
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <img src={imageProfileLogo} alt="Image Profile logo" className='customImageProfileLogo' />
                    <Typography className='customNameEn'>{en_name}</Typography>
                    <Typography className='custom_AdvCPA'>{'Adv. (CPA)'}</Typography>
                </div>
                <img src={image_Profile} alt="Image Profile" />
                {/* Name: */}
                <div>
                    <Typography className='customNameHeb'>{heb_name}</Typography>
                    <Typography className='customSubNameHeb'>{typeRule}</Typography>
                    <Typography className='custom_textAboutPeople'>{aboutPerson}</Typography>
                    <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <img src={jsonProfile.Icon_Back} alt="Icon Back" />
                        </div>
                        <button onClick={() => moveToSpecificProfile()}>
                            <img src={jsonProfile.Icon_Continue_Reading} alt="Icon to continue reading" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

