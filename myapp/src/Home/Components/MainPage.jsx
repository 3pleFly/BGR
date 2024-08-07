import React from 'react'
import LogoComp from '../LOGO/LogoComp'
import SubtitleComp from '../Subtitle/Subtitle'
import ArrowDownComp from '../Arrow Down/ArrowDown'
import ProfilesComp from '../Profile/Profiles'

const MainPage = () => {
    return (

        <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <LogoComp />
                <br />
                <br />
                <SubtitleComp />
                <ArrowDownComp />
                <br /><br /><br /><br /><br />
                <ProfilesComp />
            </div>
        </div>
    )
}

export default MainPage