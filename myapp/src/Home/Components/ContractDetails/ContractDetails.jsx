import React from 'react'
import jsonProfile from './../../../Data/Profile.json'
import './ContractDetails.css'
import { Typography } from '@mui/material'


const ContractDetailsComp = () => {
    return (
        <div className='customContactDetails'>
            <div className='customLogoSmall'>
                <img src={jsonProfile.TitleContactDetails.ImageLogoSmall} alt="Image all workers" />
            </div>
            <Typography className='customFullProfileNameHeb'>{detailsAboutProfile.heb_name}</Typography>
        </div>

    )
}

export default ContractDetailsComp