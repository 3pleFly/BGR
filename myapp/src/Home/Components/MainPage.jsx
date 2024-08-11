import React from 'react'
import LogoComp from '../LOGO/LogoComp'
import SubtitleComp from '../Subtitle/Subtitle'
import ArrowDownComp from '../Arrow Down/ArrowDown'
import ProfilesComp from '../Profile/Profiles'
import jsonProfile from './../../Data/Profile.json'

import './MainPage.css';
import ContractDetailsComp from './ContractDetails/ContractDetails'


const MainPage = () => {
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
                        <br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br />

                    </div>
                    <ProfilesComp />


                    <div className='customImageMeetingOfficeOutside'>
                        <img src={jsonProfile.imageMeetingOfficeOutside} alt="Image meeting office outside" />
                    </div>


                    <div className='customImageMeetingOffice'>
                        <img src={jsonProfile.imageMeetingOffice} alt="Image meeting office" />
                    </div>

                    <br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <div className='customImageAllWorkers'>
                        <img src={jsonProfile.imageAllWorkers} alt="Image all workers" />
                    </div>



                    {/* <ContractDetailsComp /> */}


                </div>
            </div>
        </div>
    )
}

export default MainPage