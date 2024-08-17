import React from 'react'
import LogoComp from '../LOGO/LogoComp'
import SubtitleComp from '../Subtitle/Subtitle'
import ArrowDownComp from '../Arrow Down/ArrowDown'
import ProfilesComp from '../Profile/Profiles'

import './MainPage.css';
import ContractDetailsComp from './Footer/Footer'
import DrawerComp from './DrawerComp/DrawerComp'
import { useTranslation } from '../../Hooks/useTranslation'


const MainPage = () => {

    const translation = useTranslation();

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <div style={{ textAlign: 'center' }}>

                        <LogoComp />

                        <br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br />

                    </div>
                    <ProfilesComp />


                    <div className='customImageMeetingOfficeOutside'>
                        <img src={translation.imageMeetingOfficeOutside} alt="Image meeting office outside" />
                    </div>


                    <div className='customImageMeetingOffice'>
                        <img src={translation.imageMeetingOffice} alt="Image meeting office" />
                    </div>

                    <br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <div className='customImageAllWorkers'>
                        <img src={translation.imageAllWorkers} alt="Image all workers" />
                    </div>


                    <br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br />


                    {/* <ContractDetailsComp /> */}
                </div>
            </div>


        </div>
    )
}

export default MainPage