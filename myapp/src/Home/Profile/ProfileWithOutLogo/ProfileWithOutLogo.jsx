import React from 'react';
import Typography from '@mui/material/Typography';
import './ProfileWithOutLogo.css';

import jsonProfile from './../../../Data/Profile.json';
import { useNavigate } from 'react-router-dom';

const ProfileWithOutLogoComp = ({ profileId, image_Profile, imageProfileLogo, en_name, heb_name, typeRule, aboutPerson }) => {

    const navigate = useNavigate();

    const moveToSpecificProfile = () => {
        sessionStorage['scrollYPosition'] = window.scrollY;
        navigate(`/profile/${profileId}`) // הכנס את ה-URL של האתר האחר
    }

    const createMarkup = (text) => {
        const formattedText = text ? text.replace(/\n/g, '<br />') : '';
        return { __html: formattedText };
    };

    return (
        <div>
            <div className="profileWithoutLogoContainer">

                <div>
                    <Typography className='customNameEn3'>{en_name}</Typography>
                    <Typography className='custom_AdvCPA3'>{'Adv. (CPA)'}</Typography>
                </div>
                <img className='customImageProfile3' src={image_Profile} alt="Image Profile" />
                {/* Name: */}
                <div>
                    <Typography className='customNameHeb3'>{heb_name}</Typography>
                    <Typography className='customSubNameHeb3'>{typeRule}</Typography>
                    <br />
                    <br />
                    <Typography
                        className='custom_textAboutPeople3'
                        dangerouslySetInnerHTML={createMarkup(aboutPerson)} />

                    <br />
                    <br />

                    <div>
                        <div className='CustomTextContinueReading3' onClick={() => moveToSpecificProfile()}>
                            <img src={jsonProfile.Icon_Continue_Reading} alt="Icon to continue reading" style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileWithOutLogoComp;
