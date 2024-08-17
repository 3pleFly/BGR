import React from 'react'
import imageSubtitle from '/Images/Brown color on beige-the chosen 3.png';
import './Subtitle.css'
import { Typography } from '@mui/material';

const SubtitleComp = () => {
    return (
        <div>
            <div className='customSubtitle'>
                <img src={imageSubtitle} alt="Subtitle" />
            </div>
            <Typography className='customSubtitle2'>{'מיסוי מקרקעין מסים עקיפים ומס הכנסה'}</Typography>
        </div>
    )
}

export default SubtitleComp