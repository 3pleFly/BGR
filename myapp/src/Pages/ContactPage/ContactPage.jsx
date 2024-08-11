import React from 'react'
import jsonProfile from './../../Data/Profile.json';
import './ContactPage.css'
import DrawerComp from '../../Home/Components/DrawerComp/DrawerComp';
import { Typography } from '@mui/material';

const ContactPage = () => {
    return (
        <div>
            <DrawerComp />

            <img className='customContactPageLogo' src={jsonProfile.forPageContact.Logo} alt="Image Logo BGR" />
            <img className='customContactPageSubLogo' src={jsonProfile.forPageContact.SubLogo} alt="Image sub Logo BGR" />
            <Typography className='customContactPageSubLogoContext'>{jsonProfile.forPageContact.contextUnderLogo}</Typography>


            <Typography className='customContactPageContextOffice'>{jsonProfile.forPageContact.contextOffice}</Typography>
            <Typography className='customContactPageContextPost'>{jsonProfile.forPageContact.contextPost}</Typography>
            <Typography className='customContactPageContextEmail'>{jsonProfile.forPageContact.contextEmail}</Typography>
            <Typography className='customContactPageContextPhone'>{jsonProfile.forPageContact.contextPhone}</Typography>
            <Typography className='customContactPageContextFax'>{jsonProfile.forPageContact.contextFax}</Typography>

            <div className='mymap'>
            </div>

        </div>
    )
}

export default ContactPage