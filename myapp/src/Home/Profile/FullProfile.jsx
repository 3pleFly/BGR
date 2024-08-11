// FullProfileComp.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import jsonProfile from '../../Data/Profile.json';
import { Typography } from '@mui/material';
import './FullProfile.css';

const FullProfileComp = () => {
    const navigate = useNavigate();
    const { profileId } = useParams();
    const [detailsAboutProfile, setDetailsAboutProfile] = useState({});

    const InitData = () => {
        if (profileId <= 3)
            setDetailsAboutProfile(jsonProfile.Profile[profileId - 1]);
        else
            setDetailsAboutProfile(jsonProfile.ProfileWithOutLogo[profileId - 4]);
    };

    useEffect(() => {
        InitData();
    }, []);

    const createMarkup = (text) => {
        const formattedText = text ? text.replace(/\n/g, '<br />') : '';
        return { __html: formattedText };
    };

    const moveToSpecificProfile = () => {
        sessionStorage['scrollYPosition'] = window.scrollY;
        navigate(`/`) // הכנס את ה-URL של האתר האחר
        // sessionStorage['yAxis'] = yAxis;
    }

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <img className='customFullProfileImageProfile' src={detailsAboutProfile.image_FullProfile} alt="Image Profile" />
                <Typography className='customFullProfileNameHeb'>{detailsAboutProfile.heb_name}</Typography>
                <Typography className='customFullProfileSubNameHeb'>{detailsAboutProfile.typeRule}</Typography>
                <Typography
                    className='customFullProfile_textAboutPeople'
                    dangerouslySetInnerHTML={createMarkup(detailsAboutProfile.aboutPersonFullProfile)}
                />
                <div className='CustomIconBack' onClick={() => moveToSpecificProfile()}>
                    <img src={jsonProfile.Icon_Back} alt="Icon back to main" style={{ cursor: 'pointer' }} />
                </div>
            </div>



        </div>
    );
};

export default FullProfileComp;
