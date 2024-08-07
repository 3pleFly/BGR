import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jsonProfile from '../../Data/Profile.json';
import { Typography } from '@mui/material';
import './FullProfile.css';

const FullProfileComp = () => {
    const { profileId } = useParams();
    const [detailsAboutProfile, setDetailsAboutProfile] = useState({});

    const InitData = () => {
        console.log(profileId);
        setDetailsAboutProfile(jsonProfile.Profile[profileId - 1]);
    };

    useEffect(() => {
        InitData();
    }, []);

    const createMarkup = (text) => {
        const formattedText = text ? text.replace(/\n/g, '<br />') : '';
        return { __html: formattedText };
    };

    return (
        <div>
            {console.log(detailsAboutProfile)}
            <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <img className='customFullProfileImageProfile' src={detailsAboutProfile.image_FullProfile} alt="Image Profile" />
                </div>
                <div>
                    <Typography className='customFullProfileNameHeb'>{detailsAboutProfile.heb_name}</Typography>
                    <Typography className='customFullProfileSubNameHeb'>{detailsAboutProfile.typeRule}</Typography>
                    <Typography
                        className='customFullProfile_textAboutPeople'
                        dangerouslySetInnerHTML={createMarkup(detailsAboutProfile.aboutPersonFullProfile)}
                    />
                </div>
            </div>
        </div>
    );
};

export default FullProfileComp;
