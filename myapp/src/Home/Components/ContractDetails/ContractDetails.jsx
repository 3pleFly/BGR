import React from 'react'
import jsonProfile from './../../../Data/Profile.json'
import './ContractDetails.css'
import { Typography } from '@mui/material'


const ContractDetailsComp = () => {
    return (
        <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='customRectangleContractDetails'>
                    <img className='customBGRLogoSmall' src={jsonProfile.TitleContactDetails.ImageLogoSmall} alt="Image all workers" />
                    <Typography className='customRectangleContractAddress'>משרד: מגדל הכשרת-היישוב. קומה 27. רח' ז'בוטינסקי 9 בני ברק</Typography>
                    <Typography className='customRectangleContractPost'>דואר: ת.ד 2163, בני ברק, ישראל, 5112101</Typography>
                    <Typography className='customRectangleContractEmail'>מייל: BGR@gmail.com</Typography>
                    <Typography className='customRectangleContractPhone'>טלפון: 972.3.6544.303+</Typography>

                </div>


                {/* <Typography className='customFullProfileNameHeb'>{detailsAboutProfile.heb_name}</Typography> */}

            </div>
        </div>

    )
}

export default ContractDetailsComp