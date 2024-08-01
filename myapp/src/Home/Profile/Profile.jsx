import React from 'react'
import Typography from '@mui/material/Typography';
import './Profile.css'

import jsonProfile from './../../Data/Profile.json'

const Profile = ({ image_Profile, imageProfileLogo, en_name, heb_name, typeRule, aboutPerson }) => {
    return (
        <div>
            <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <img src={imageProfileLogo} alt="Image Profile logo" className='customImageProfileLogo' />
                    <Typography className='customName'>{en_name}</Typography>
                    <Typography className='custom_AdvCPA'>{en_name}</Typography>
                </div>
                <img src={image_Profile} alt="Image Profile" />
                {/* Name: */}
                <div>
                    <Typography className='custom_AdvCPA'>{heb_name}</Typography>
                    <Typography className='custom_AdvCPA'>{typeRule}</Typography>
                    <Typography className='custom_AdvCPA'>{aboutPerson}</Typography>
                    <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <img src={jsonProfile.Icon_Back} alt="Icon Back" />
                        </div>
                        <div>
                            <img src={jsonProfile.Icon_Continue_Reading} alt="Icon to continue reading" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

