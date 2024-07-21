import React from 'react'
import Typography from '@mui/material/Typography';
import './Profile.css'

const Profile = ({ image_Profile, imageProfileLogo, en_name }) => {
    return (
        <div>
            <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <img src={imageProfileLogo} alt="Image Profile" />
                    <Typography className='customName'>{en_name}</Typography>
                    <Typography className='custom_AdvCPA'>{en_name}</Typography>
                </div>
                <img src={image_Profile} alt="Image Profile" />
                {/*  */}

            </div>
        </div>
    )
}

export default Profile

