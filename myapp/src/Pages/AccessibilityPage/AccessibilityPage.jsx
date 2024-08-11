import React from 'react'
import { Typography } from '@mui/material';
import jsonProfile from './../../Data/Profile.json';
import './AccessibilityPage.css'
import DrawerComp from '../../Home/Components/DrawerComp/DrawerComp';

const AccessibilityPage = () => {
    return (
        <div>
            <DrawerComp />
            <Typography className='customAccessibilityStatementTitle'>{'הצהרת נגישות'}</Typography>
            <Typography className='customAccessibilityStatement'>{jsonProfile.forAccessibilityPage.accessibilityStatement}</Typography>
        </div>
    )
}

export default AccessibilityPage